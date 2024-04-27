import yfinance as yf
from datetime import datetime, timedelta

def get_stock_price_history(symbol):
    end_date = datetime.now()
    start_date = end_date - timedelta(days=365)
    stock = yf.Ticker(symbol)
    history = stock.history(start=start_date.strftime('%Y-%m-%d'), end=end_date.strftime('%Y-%m-%d'))
    return history

# Test the function with Nvidia stock symbol
nvidia_history = get_stock_price_history('NVDA')
print(nvidia_history)