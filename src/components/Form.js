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
import { toTitleCase } from "./utils/constants";

const Form = ({ contentType }) => {
  const [headline, setHeadline] = useState("A Beginner Pilates Workout You Can Do Right in Your Living Room");
  const [dek, setDek] = useState("You don’t need to visit a studio or hop on a fancy Reformer to give Pilates a try.");
  const [body, setBody] = useState("With a no-equipment, beginner Pilates workout, you can dabble in this popular form of movement right from the comfort of your living room—and we have a pretty awesome routine right here that fits that exact bill. Pilates is a great exercise choice for pretty much everyone, Jill Rothenberg, a Boston-based certified Pilates instructor and founder of Movement with Jill, tells SELF. That’s because there’s a strong emphasis on proper form, mind-body connection, and core stability. All this means you’re intentionally moving in ways that feel good for your body, rather than mindlessly busting out a bunch of reps in ways that may not work for your joints or muscles. Plus, Pilates is a pretty stellar way to get stronger, especially if your goal is to help your muscles work for longer without needing to lift a bunch of heavy weights. Another benefit of Pilates: There are lots of ways to “layer” exercises—meaning, make them easier for folks just getting started, or harder for people wanting more of a challenge. This means Pilates is accessible to a wide range of fitness levels—including, yup, beginners.");
  const [publishUrl, setPublishUrl] = useState(
    "https://www.self.com/story/fitness-in-20s"
  );
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
    alert("Article Published Successfully!");
  };

  const pdfSelected = selectedPDF ? selectedPDF : null;

  return (
    <Container>
      <Title>{contentType && `Create ${toTitleCase(contentType)}`}</Title>
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
            style={{fontFamily: "serif", fontSize: "18px", padding: "12px"}}
            onChange={(e) => setBody(e.target.value)}
            required
          ></TextArea>
        </FormGroup>
        <FormGroup>
          <UploadAsset type="button" onClick={handlePdfUpload}>
              Insert Asset
          </UploadAsset>
          {pdfSelected && (
            <span
              style={{
                color: "blue",
                fontSize: "18px",
                marginLeft: "12px",
                fontWeight: "bold",
              }}
            >
              <Link
                to={`/edit/pdf/${pdfSelected.id}`}
              >{`${pdfSelected.fileName} ✅`}</Link>
            </span>
          )}
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
          <SubmitButton type="submit">Publish</SubmitButton>
          <Link
            to={`/self/preview/${contentType}`}
            target="_blank"
          >
            <ViewLive type="button">Save & Preview</ViewLive>
          </Link>
        </FormGroup>
        {showDialog && <UploadPDFDialog onClose={handleCloseDialog} />}
      </form>
    </Container>
  );
};

export default Form;
