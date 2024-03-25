import json
from flask import make_response, request, abort
from functools import wraps
from werkzeug.exceptions import BadRequest

# Utility function to format the API response in JSON
def format_json_response(status_code, message, data=None):
    """
    Generates a standardized JSON response for APIs.
    
    Args:
    - status_code (int): The HTTP status code to return.
    - message (str): A message describing the result of the operation.
    - data (dict, optional): The payload to include in the response.

    Returns:
    - A Flask response object with the formatted JSON.
    """
    response = {
        'message': message,
        'data': data
    }
    response = make_response(json.dumps(response), status_code)
    response.headers['Content-Type'] = 'application/json'
    return response


# Decorator function to check for API key in request headers
def require_api_key(api_key):
    """
    Decorator that can be used to protect endpoints by requiring an API key.

    Args:
    - api_key (str): The expected API key for authentication.
    
    Returns:
    - The decorated function if the API key matches, aborts the request otherwise.
    """
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            key = request.headers.get('X-API-KEY')
            if key and key == api_key:
                return f(*args, **kwargs)
            else:
                abort(401)  # Unauthorized
        return decorated_function
    return decorator

# Utility function to validate required query parameters
def validate_query_params(required_params):
    """
    Validates that the required query parameters are included in the request.

    Args:
    - required_params (list): A list of strings representing required parameter names.

    Raises:
    - BadRequest if a required parameter is missing.
    """
    missing_params = [param for param in required_params if param not in request.args]
    if missing_params:
        raise BadRequest(f"Missing required query parameter(s): {', '.join(missing_params)}")

