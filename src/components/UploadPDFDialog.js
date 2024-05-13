import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  background-color: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const LeftSection = styled.div`
  width: 30%;
  float: left;
`;

const MainSection = styled.div`
  width: 70%;
  float: right;
`;

const SubGroup = styled.div`
  margin-bottom: 20px;
`;

const SubGroupTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SubGroupList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SubGroupItem = styled.li`
    padding: 12px;
    border: 1px solid #d4d6d9;
  margin-bottom: 5px;
  border-radius: 10px;
`;

const Tile = styled.div`
  width: 30%;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png'); /* Replace 'your_image_url.jpg' with the URL of your image */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 5px;
  display: inline-block;
  text-align: center;
  line-height: 120px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const SearchField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


const UploadPDFDialog = ({ onClose }) => {
    
  const [selectedPDF, setSelectedPDF] = useState('');

  const handlePDFSelect = (pdfName) => {
    setSelectedPDF(pdfName);
  };

  const pdfData = [
    { id: 1, name: 'PDF 1' },
    { id: 2, name: 'PDF 2' },
    { id: 3, name: 'PDF 3' },
    { id: 4, name: 'PDF 4' },
    { id: 5, name: 'PDF 5' },
    { id: 6, name: 'PDF 6' },
    { id: 7, name: 'PDF 7' },
    { id: 8, name: 'PDF 8' },
  ];

  return (
    <DialogContainer>
      <LeftSection>
        <SubGroup>
          <SubGroupTitle>Copilot (All)</SubGroupTitle>
          <SubGroupList>
            <SubGroupItem style={{backgroundColor: "#d4d6d9"}}>PDF</SubGroupItem>
            <SubGroupItem>External Link</SubGroupItem>
            <SubGroupItem>Clip</SubGroupItem>
            <SubGroupItem>Photo</SubGroupItem>
            <SubGroupItem>CNE Video</SubGroupItem>
            <SubGroupItem>Product</SubGroupItem>
          </SubGroupList>
        </SubGroup>
      </LeftSection>
      <MainSection>
        <SearchField type="text" placeholder="Search PDFs" />
        <p style={{margin: '5px', }}>Click on the PDF to select for uploading*</p>
        {pdfData.map(pdf => (
          <Link to={`/edit/pdf/${pdf.id}`} key={pdf.id} target="_blank">
            <Tile onClick={() => handlePDFSelect(pdf.name)}>
              {pdf.name}
            </Tile>
          </Link>
        ))}
      </MainSection>
      <SubmitButton onClick={onClose}>Cancel & Close</SubmitButton>
    </DialogContainer>
  );
};

export default UploadPDFDialog;
