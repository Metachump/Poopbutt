import requests


def generate_image(prompt):
    response = requests.post('https://api.openai.com/v1/images/generations', headers={'Authorization': 'Bearer API_KEY'}, json={'prompt': prompt, 'num_images': 1, 'size':'512x512'})
    if response.status_code == 200:
        image_url = response.json()['data'][0]['url']
        return image_url
    else:
        raise Exception(f'Error generating image: {response.status_code}')