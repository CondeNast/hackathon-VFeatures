import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPDF } from "./utils/pdfSlice";
import { PDFJsonObject } from "./utils/constants";

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: #171717;
  color: white;
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
  cursor: pointer;

  &:hover {
    background-color: #d4d6d9;
    color: black;
    font-size: 18px;
    font-weight: bold
  }
`;

const Tile = styled.div`
  width: auto;
  height: 40px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 15px;
  left: 0;
  display: flex;
  place-content: space-between;
  line-height: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: black;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const SearchField = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #d4d6d9;
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
    opacity: 0.8;
  }
`;

const PdfTitle = styled.div`
  font-size: 18px;
`;

const UploadPDFDialog = ({ onClose }) => {
  const dispatch = useDispatch();

  const handlePDFSelect = (pdfMetaData) => {
    dispatch(addPDF(pdfMetaData));
    onClose();
  };

  const pdfData = PDFJsonObject;

  return (
    <DialogContainer>
      <LeftSection>
        <SubGroup>
          <SubGroupTitle>Copilot (All)</SubGroupTitle>
          <SubGroupList>
            <SubGroupItem style={{backgroundColor: "#d4d6d9", color: 'black', fontWeight: "bold"}}>PDF</SubGroupItem>
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
        <p style={{ marginLeft: "10px", marginTop: "5px" }}>
          Click on the PDF to select for uploading*
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {pdfData.map((pdf) => (
            <Tile onClick={() => handlePDFSelect(pdf)} key={pdf.id}>
              {/* <Link
                to={`/edit/pdf/${pdf.id}`}
                style={{ textDecoration: "none" }}
              > */}
                <PdfTitle>📄 {pdf.Title} </PdfTitle>
              {/* </Link> */}
              <p style={{color: 'grey', fontSize: '12px'}}>Size: {pdf.Size} | Published Date: {pdf.PublicationDate}</p>
            </Tile>
          ))}
        </div>
        <div style={{ justifyContent: "right" }}>
          <SubmitButton onClick={onClose}> ❌ Cancel & Close</SubmitButton>
        </div>
      </MainSection>
    </DialogContainer>
  );
};

export default UploadPDFDialog;
