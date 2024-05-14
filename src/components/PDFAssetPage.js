import React, { useState } from "react";
// import axios from "axios";
import {
  Container,
  FormGroup,
  Input,
  Label,
  SubmitButton,
  TextArea,
  Title,
  CreateSummaryButton,
} from "./styles/Form.styles";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  margin: 24px;
  height: 100%;
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

const PDFAssetPage = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [summarizedText, setSummarizedText] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileKey, setFileKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (event) => {
    // setSelectedFile(event.target.files[0]);
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("PDF asset saved successfully");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setFileKey((prevKey) => prevKey + 1);
    setSummarizedText("");
    setFileName("");
  };

  const handleSummaryChange = (e) => {
    setSummarizedText(
      'The "Beginner Pilates Workout Plan" is a comprehensive guide designed for individuals new to Pilates exercises.'
    );
  };

  const handleSummarize = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setTimeout(() => {
        const formattedText =
          'The "Beginner Pilates Workout Plan" is a comprehensive guide designed for individuals new to Pilates exercises.';
        setSummarizedText(formattedText);
        setLoading(false);
      }, 3000);
      //   const formData = new FormData();
      //   formData.append("file", selectedFile);
      //   const response = await axios.post(
      //     "http://127.0.0.1:5000/summarize",
      //     formData,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     }
      //   );
      //   const formattedText = response.data.replace(/\. /g, ".\n\n").replace(/\s+/g, " ");
    } catch (error) {
      console.error("Error summarizing text:", error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>PDF Asset</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup style={{ display: "flex", flexDirection: "column" }}>
          <Label htmlFor="dek">Upload PDF:</Label>
          <Input type="file" key={fileKey} onChange={handleFileChange} />
          <CreateSummaryButton
            style={{ marginTop: "12px", width: "200px" }}
            onClick={handleSummarize}
          >
            Summarize using AI ✨
          </CreateSummaryButton>
          <FormGroup>
            <Label style={{ marginTop: "15px" }} htmlFor="dek">
              Summarized Text:
            </Label>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <TextArea
                id="summary"
                placeholder="PDF Summary here..."
                style={{
                  width: "800px",
                  height: "200px",
                  fontSize: "18px",
                  fontFamily: "serif",
                  padding: "12px",
                }}
                onChange={handleSummaryChange}
                value={summarizedText}
              />
            )}
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">File name:</Label>
          <Input
            type="text"
            id="fileName"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <SubmitButton type="submit" onClick={handleSave}>
            Save
          </SubmitButton>
          <SubmitButton style={{ marginLeft: "10px" }} onClick={handleCancel}>
            Clear
          </SubmitButton>
        </FormGroup>
      </form>
    </Container>
  );
};
export default PDFAssetPage;
