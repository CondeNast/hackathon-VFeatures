import React, { useState } from 'react';
import styled from 'styled-components';

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
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
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Upload PDF</h2>
      {/* Add form elements for uploading PDF */}
    </DialogContainer>
  );
};

const YourComponent = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handlePdfUpload = () => {
    // Logic for handling PDF upload
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div>
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
      {showDialog && <UploadPDFDialog onClose={handleCloseDialog} />}
    </div>
  );
};

export default YourComponent;
