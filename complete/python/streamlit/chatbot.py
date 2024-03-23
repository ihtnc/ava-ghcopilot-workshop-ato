import streamlit as st

def bot_response(user_message):
    # This is where you would implement your bot's response generation logic.
    # For now, it just echoes the user's message.
    return f"Bot: You said '{user_message}'"

def main():
    st.title("Simple Chatbot")
    
    user_message = st.text_input("Your Message")
    if st.button("Send"):
        st.text_area("Chat", value=bot_response(user_message), height=200, max_chars=None, key=None)

if __name__ == "__main__":
    main()