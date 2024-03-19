# This function constructs an SQL query using user input and executes it against the database.

import sqlite3

def main():
    conn = sqlite3.connect("test.db")
    c = conn.cursor()
    table_name = input("Enter a table name: ")
    c.execute("SELECT * FROM " + table_name)
    print(c.fetchall())
    conn.close()


# Generate a list of all tables in the database
    def get_tables():
        
        

                
