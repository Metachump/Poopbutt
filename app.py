from flask import Flask, render_template, request, jsonify
from generate_image import generate_image
from payment_processing import create_checkout_session

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('optimize_website.html')

@app.route('/generate_image', methods=['POST'])
def generate_image_route():
    prompt = request.form.get('prompt')
    image_url = generate_image(prompt)
    return jsonify({'image_url': image_url})

@app.route('/create_checkout_session', methods=['POST'])
def create_checkout_session_route():
    return create_checkout_session()

if __name__ == '__main__':
    app.run(debug=True)