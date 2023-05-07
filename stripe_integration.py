import stripe

stripe.api_key = 'your_stripe_api_key'

checkout_session = stripe.checkout.Session.create(
    payment_method_types=['card'],
    line_items=[{
        'price': 'price_id',
        'quantity': 1
    }],
    mode='payment',
    success_url='https://yourwebsite.com/success',
    cancel_url='https://yourwebsite.com/cancel'
)

print(checkout_session.url)