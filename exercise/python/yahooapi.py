import yfinance as yf
from datetime import datetime, timedelta

def get_stock_price_history(symbol):
    end_date = datetime.today().strftime('%Y-%m-%d')
    start_date = (datetime.today() - timedelta(days=365)).strftime('%Y-%m-%d')
    stock = yf.Ticker(symbol)
    history = stock.history(start=start_date, end=end_date)
    return history

# Test the function with Nvidia stock symbol
nvidia_history = get_stock_price_history("NVDA")
print(nvidia_history)