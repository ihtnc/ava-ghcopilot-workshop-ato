# Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.

def arithmetic(num1, num2, operator):
    try:
        if not isinstance(num1, (int, float)) or not isinstance(num2, (int, float)):
            raise ValueError("Invalid number")
        if operator not in ['+', '-', '*', '/']:
            raise ValueError("Invalid operator")

        if operator == '+':
            return num1 + num2
        elif operator == '-':
            return num1 - num2
        elif operator == '*':
            return num1 * num2
        elif operator == '/':
            if num2 == 0:
                raise ZeroDivisionError("Cannot divide by zero")
            return num1 / num2
    except (ValueError, ZeroDivisionError) as e:
        return str(e)