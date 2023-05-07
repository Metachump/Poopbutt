from flask import Flask, request, jsonify
from generate_image import generate_image

app = Flask(__name__)

@app.route('/generate_image', methods=['POST'])
def create_image():
    prompt = request.form.get('prompt')
    image = generate_image(prompt)
    return jsonify({'image_url': image})

if __name__ == '__main__':
    app.run(debug=True)