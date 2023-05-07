document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code will go here
});
function generateImageFromText(text) {
    return new Promise((resolve, reject) => {
        generate_image('prompt': text).then(imageUrl => {
            resolve(imageUrl);
        }).catch(error => {
            reject(error);
        });
    });
}

document.getElementById('generate-image-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    generateImageFromText(inputText).then(imageUrl => {
        document.getElementById('generated-image').src = imageUrl;
    }).catch(error => {
        console.error(error);
    });
});