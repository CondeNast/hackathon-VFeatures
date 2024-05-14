import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  FormGroup,
  Input,
  Label,
  SubmitButton,
  Title,
} from "./styles/Form.styles";

const PDFAssetPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summarizedText, setSummarizedText] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("PDF asset created successfully!");
  };

  const handleSummarize = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const response = await axios.post(
        "http://127.0.0.1:5000/summarize",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSummarizedText(response.data);
    } catch (error) {
      console.error("Error summarizing text:", error);
    }
  };

  return (
    <Container>
      <Title>PDF Asset</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title:</Label>
          <Input
            type="text"
            id="title"
            value="Introduction to Machine Learning"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">Description:</Label>
          <Input
            type="text"
            id="title"
            value="A comprehensive guide to understanding the basics of machine learning algorithms and techniques."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">Author:</Label>
          <Input type="text" id="author" value="John Smith" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">Tags:</Label>
          <Input
            type="text"
            id="tags"
            value="Machine Learning Data Science Artificial Intelligence"
          />
        </FormGroup>
        <FormGroup style={{ display: "flex", flexDirection: "column" }}>
          <Label htmlFor="dek">Upload PDF:</Label>
          <Input type="file" onChange={handleFileChange} />
          <SubmitButton
            style={{ marginTop: "12px", width: "200px" }}
            onClick={handleSummarize}
          >
            Summarize using AI ✨
          </SubmitButton>
          {summarizedText && (
            <div>
              <h2>Summarized Text:</h2>
              <p>{summarizedText}</p>
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">File name:</Label>
          <Input
            type="text"
            id="fileName"
            value="Introduction_to_Machine_Learning.pdf"
          />
        </FormGroup>
      </form>
    </Container>
  );
};
export default PDFAssetPage;
