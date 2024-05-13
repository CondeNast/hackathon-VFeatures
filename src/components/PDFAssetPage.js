import React, { useState } from 'react';
import axios from 'axios';

const PDFAssetPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summarizedText, setSummarizedText] = useState('');
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleSummarize = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      const response = await axios.post('http://127.0.0.1:5000/summarize', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSummarizedText(response.data);
    } catch (error) {
      console.error('Error summarizing text:', error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={handleSummarize}>Summarize</button>
      <div>
        <h2>Summarized Text:</h2>
        <p>{summarizedText}</p>
      </div>
    </div>
  );
};
export default PDFAssetPage;