import re

def check_url(url):
    regex = r"^(http|https)://[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+"
    if re.search(regex, url):
        return True
    else:
        return False
    

# Generate a function that accepts an email address and returns True if the email address is valid, and False otherwise.

def check_email(email):
    regex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    if re.search(regex, email):
        return True
    else:
        return False

# Generate a function that accepts a phone number and returns True if the phone number is valid, and False otherwise.
# It should only accept phone numbers in the format (+61) 456-7890 or 0412345678.

def check_phone(phone):
    regex = r"^\(\+61\) \d{3}-\d{4}$|^\d{10}$"
    if re.search(regex, phone):
        return True
    else:
        return False
    