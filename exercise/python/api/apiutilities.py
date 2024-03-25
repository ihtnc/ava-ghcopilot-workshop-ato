import json
from flask import make_response, request, abort
from functools import wraps
from werkzeug.exceptions import BadRequest

# Utility function to format the API response in JSON
def format_json_response(status_code, message, data=None):

    response = {
        'message': message,
        'data': data
    }
    response = make_response(json.dumps(response), status_code)
    response.headers['Content-Type'] = 'application/json'  # Fix: Replace 'responses' with 'response'
    return response


# Decorator function to check for API key in request headers
def require_api_key(api_key):

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

    missing_params = [param for param in required_params if param not in request.args]
    if missing_params:
        raise BadRequest(f"Missing required query parameter(s): {', '.join(missing_params)}")

