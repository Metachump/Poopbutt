import time
from flask import Flask, request

app = Flask(__name__)

@app.before_request
def start_timer():
    request.start_time = time.time()

@app.after_request
def log_request(response):
    elapsed_time = time.time() - request.start_time
    print(f'Request took {elapsed_time} seconds')
    return response

if __name__ == '__main__':
    app.run(debug=True)