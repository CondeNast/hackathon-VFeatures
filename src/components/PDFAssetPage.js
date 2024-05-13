import React, { useState } from 'react';
import axios from 'axios';

const PDFAssetPage = () => {

    const [inputText, setInputText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');

  const handleInputChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    setInputText(formData);
  };

  // console.log("summarizedText", summarizedText)

  const handleSummarize = async () => {
    try {
      const response = await axios.post('http://localhost:5000/summarize', inputText,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      console.log("response", response)
      setSummarizedText(response.data);
    } catch (error) {
      console.error('Error summarizing text:', error);
    }
  };
    return (
        <div>
          <input
            type="file"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text to summarize..."
            rows={10}
            cols={50}
          />
          <button onClick={handleSummarize}>Summarize</button>
          <div>
            <h2>Summarized Text:</h2>
            {/* {summarizedText!=='' && <p>{summarizedText}</p>} */}
          </div>
        </div>
      );
}

export default PDFAssetPage;