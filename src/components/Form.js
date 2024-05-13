import React, { useState } from "react";
import { Container, FormGroup, Input, Label, SubmitButton, ViewLive, TextArea, Title } from "./styles/Form.styles";

const Form = ({ contentType }) => {
  const [headline, setHeadline] = useState("This is headline");
  const [dek, setDek] = useState("This is dek");
  const [body, setBody] = useState("This is large body filed");
  const [publishUrl, setPublishUrl] = useState("https://www.jsndjsndk.com/story/articleSlug");
  const [pdfFile, setPdfFile] = useState(null);

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save and publish the article
    alert("Article Saved and Published!");
  };

  const handleViewLive = () => {
    // Replace 'your-url-here' with the URL you want to open
    window.open('http://localhost:3000/allure/story/article-slug', '_blank');
  };

  return (
    <Container>
      <Title>{contentType.toUpperCase()}</Title>
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
          <Label htmlFor="pdfFile">Upload PDF:</Label>
          <Input
            type="file"
            id="pdfFile"
            accept=".pdf"
            onChange={handlePdfUpload}
            required
          />
        </FormGroup>
        <FormGroup>
          <SubmitButton type="submit">Save and Publish</SubmitButton>
          <ViewLive type="button" onClick={handleViewLive}> View Live</ViewLive>
        </FormGroup>
      </form>
    </Container>
  );
};

export default Form;
