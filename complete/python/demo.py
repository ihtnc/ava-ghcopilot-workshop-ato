# Generate a regular expression that checks if a text is a valid URL or not.

import re

def check_url(url):
    regex = r"^(http|https)://[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+"
    if re.search(regex, url):
        return True
    else:
        return False


def main():
    url = input("Enter a URL: ")
    if check_url(url):
        print("Valid URL")
    else:
        print("Invalid URL")

main()  

