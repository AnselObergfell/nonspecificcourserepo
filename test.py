import yfinance as yf
import datetime

# Define the stock symbols for the top 5 tech companies
companies = ['AAPL', 'MSFT', 'AMZN', 'GOOGL', 'META']

# Define the start and end date for the year
start_date = datetime.datetime(2022, 1, 1)
end_date = datetime.datetime.now()

# Fetch the stock data
data = {company: yf.download(company, start=start_date, end=end_date) for company in companies}

# Display the data for each company
for company, stock_data in data.items():
    stock_data.to_csv("./data/"+company+".csv")