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
import UploadPDFDialog from "./UploadPDFDialog";
import { useSelector } from "react-redux";

const Form = ({ contentType }) => {
  const [headline, setHeadline] = useState("This is headline");
  const [dek, setDek] = useState("This is dek");
  const [body, setBody] = useState(`
          Ligula ullamcorper malesuada proin libero. Sed velit dignissim sodales
          ut eu sem. Viverra adipiscing at in tellus. Quisque non tellus orci ac
          auctor. Eget mi proin sed libero enim sed faucibus. Cras pulvinar
          mattis nunc sed. Facilisis mauris sit amet massa vitae tortor
          condimentum lacinia. Aliquet nibh praesent tristique magna sit amet.
          Curabitur vitae nunc sed velit dignissim sodales ut. Mauris ultrices
          eros in cursus turpis massa tincidunt. Mattis pellentesque id nibh
          tortor id aliquet lectus. Nunc mi ipsum faucibus vitae aliquet nec
          ullamcorper. Risus nec feugiat in fermentum posuere urna. Senectus et
          netus et malesuada. Sed nisi lacus sed viverra tellus. Suscipit tellus
          mauris a diam maecenas sed enim ut. Id neque aliquam vestibulum morbi
          blandit cursus risus at. Metus vulputate eu scelerisque felis. Elit ut
          aliquam purus sit amet luctus venenatis lectus. Bibendum ut tristique
          et egestas quis. Vitae justo eget magna fermentum. Euismod quis
          viverra nibh cras pulvinar mattis nunc sed. Diam donec adipiscing
          tristique risus nec feugiat in fermentum. Turpis egestas sed tempus
          urna. Dictum fusce ut placerat orci nulla. Tincidunt dui ut ornare
          lectus sit amet est placerat. Porttitor leo a diam sollicitudin tempor
          id eu nisl. Nec dui nunc mattis enim ut tellus elementum sagittis
          vitae.`);
  const [publishUrl, setPublishUrl] = useState(
    "http://localhost:8000/allure/article"
  );
  // const [pdfFile, setPdfFile] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const selectedPDF = useSelector((state) => state.pdf.pdfsDoc);

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

  const pdfSelected = selectedPDF ? selectedPDF : null;

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
        <UploadAsset type="button" onClick={handlePdfUpload}>
            Upload an Asset
          </UploadAsset>
          {pdfSelected && <span style={{color: 'blue', fontSize: '18px', marginLeft: '12px', fontWeight: 'bold'}}><Link to={`/Condenast/hackathon-VFeatures/edit/pdf/${pdfSelected.id}`} target="_blank">{`${pdfSelected.fileName} ✅`}</Link></span>}
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
          <SubmitButton type="submit">Save and Publish</SubmitButton>
          <Link to={`/Condenast/hackathon-VFeatures/allure/preview/${contentType}`} target="_blank">
            <ViewLive type="button">Preview</ViewLive>
          </Link>
        </FormGroup>
        {showDialog && <UploadPDFDialog onClose={handleCloseDialog} />}
      </form>
    </Container>
  );
};

export default Form;
