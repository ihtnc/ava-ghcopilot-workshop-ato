import streamlit as st
import pandas as pd
from datetime import datetime

def main():
    st.title('CSV File Upload and Data Visualization')
    uploaded_file = st.file_uploader("Choose a CSV file", type="csv")

    if uploaded_file is not None:
        data = pd.read_csv(uploaded_file)
        st.dataframe(data)

        # Convert 'day' column to datetime
        data['day'] = pd.to_datetime(data['day'], format="%d/%m/%Y")

        # Add a date range selector in the sidebar
        date_range = st.sidebar.date_input("Select a date range", [data['day'].min(), data['day'].max()])

        # Check if date_range contains two elements
        if len(date_range) != 2:
            st.error("Please select a valid date range.")
        else:
            # Convert date to datetime
            start_date = pd.to_datetime(date_range[0])
            end_date = pd.to_datetime(date_range[1])

            # Filter data based on the selected date range
            filtered_data = data[(data['day'] >= start_date) & (data['day'] <= end_date)]

            if filtered_data.empty:
                st.error("No data found for the selected date range.")
            else:
                # Group data by 'day' and calculate the sum of 'breakdown_suggestions_count' and 'breakdown_acceptances_count'
                grouped_data = filtered_data.groupby('day')[['breakdown_suggestions_count', 'breakdown_acceptances_count']].sum()

                # Create a line chart
                st.line_chart(grouped_data)

if __name__ == "__main__":
    main()