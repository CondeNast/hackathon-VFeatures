import React, { useState } from "react";
import axios from "axios";
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

const PDFAssetPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summarizedText, setSummarizedText] = useState("");
  const [title, setTitle] = useState("");
  const [dek, setDek] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileKey, setFileKey] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setSummarizedText("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("PDF asset saved successfully");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setFileKey((prevKey) => prevKey + 1);
    setSummarizedText("");
    setDek("");
    setTitle("");
    setAuthor("");
    setFileName("");
    setTags("");
  };

  const handleSummaryChange = (e) => {
    setSummarizedText(e.target.value);
  };

  const handleSummarize = async (e) => {
    e.preventDefault();
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">Description:</Label>
          <Input
            type="text"
            id="dek"
            value={dek}
            onChange={(e) => setDek(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">Author:</Label>
          <Input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">Tags:</Label>
          <Input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </FormGroup>
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
            <TextArea
              id="summary"
              placeholder="Summary here...."
              style={{
                width: "800px",
                height: "200px",
                fontSize: "18px",
                fontFamily: "sans-serif",
              }}
              onChange={handleSummaryChange}
              value={summarizedText}
            />
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
            Save and Publish
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
