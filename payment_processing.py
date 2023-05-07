import stripe
from flask import Flask, request, jsonify

stripe.api_key = 'your_stripe_api_key'

app = Flask(__name__)

@app.route('/create_checkout_session', methods=['POST'])
def create_checkout_session():
    line_items = request.json.get('line_items')
    success_url = request.json.get('success_url')
    cancel_url = request.json.get('cancel_url')

    try:
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=line_items,
            mode='payment',
            success_url=success_url,
            cancel_url=cancel_url
        )
        return jsonify({'id': session.id})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)