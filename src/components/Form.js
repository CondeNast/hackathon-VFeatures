import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  Label,
  UploadAsset,
  SubmitButton,
  ViewLive,
  TextArea,
  Title,
} from "./styles/Form.styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%; /* Adjust the width of the dialog box */
  max-width: 500px; /* Set maximum width if needed */
  background-color: #ebeff5;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const UploadPDFDialog = ({ onClose }) => {
  return (
    <DialogContainer>
      <CloseButton onClick={onClose}>✖️</CloseButton>
      <h2>Upload PDF</h2>
      {/* Add form elements for uploading PDF */}
    </DialogContainer>
  );
};

const Form = ({ contentType }) => {
  const [headline, setHeadline] = useState("This is headline");
  const [dek, setDek] = useState("This is dek");
  const [body, setBody] = useState(
    "This is large body filed This is large body filed This is large body filed This is large body filed This is large body filed"
  );
  const [publishUrl, setPublishUrl] = useState(
    "https://www.jsndjsndk.com/story/articleSlug"
  );
  // const [pdfFile, setPdfFile] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const handlePdfUpload = () => {
    // Logic for handling PDF upload
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save and publish the article
    alert("Article Saved and Published!");
  };

  return (
    <Container>
      <Title>{contentType && contentType.toUpperCase()}</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="headline">Headline:</Label>
          <Input
            type="text"
            id="headline"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dek">Dek:</Label>
          <Input
            type="text"
            id="dek"
            value={dek}
            onChange={(e) => setDek(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body:</Label>
          <TextArea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="publishUrl">Publish URL:</Label>
          <Input
            type="url"
            id="publishUrl"
            value={publishUrl}
            onChange={(e) => setPublishUrl(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          {/* <Label htmlFor="pdfFile">Upload PDF:</Label>
          <Input
          type="file"
          id="pdfFile"
          accept=".pdf"
          onChange={handlePdfUpload}
          required
        /> */}
        </FormGroup>
        <FormGroup>
          <UploadAsset type="button" onClick={handlePdfUpload}>
            Upload an Asset
          </UploadAsset>
          <SubmitButton type="submit">Save and Publish</SubmitButton>
          <Link to={`/allure/${contentType}`} target="_blank">
            <ViewLive type="button">View Live</ViewLive>
          </Link>
        </FormGroup>
        {showDialog && <UploadPDFDialog onClose={handleCloseDialog} />}
      </form>
    </Container>
  );
};

export default Form;
