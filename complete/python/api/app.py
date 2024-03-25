from flask import Flask
import complete.python.api.apiutilities as apiutilities

app = Flask(__name__)

@app.route('/')
def home():
    return apiutilities.format_json_response(200, 'Success', {'message': 'Hello, world!'})

if __name__ == '__main__':
    app.run(debug=True)