import React, { useState } from 'react';

export const TextToImageComponent = () => {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateImage = async () => {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: inputText })
    });

    const data = await response.json();
    setGeneratedImage(data.image);
  };

  return (
    <div className='text-to-image'>
      <input type='text' value={inputText} onChange={handleInputChange} />
      <button onClick={generateImage}>Generate Image</button>
      {generatedImage && <img src={generatedImage} alt='Generated design' />}
    </div>
  );
};