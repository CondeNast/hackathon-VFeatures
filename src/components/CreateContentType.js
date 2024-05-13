import { useParams } from "react-router-dom";
import Form from "./Form";

const CreateContentType = ({}) => {
  const { contentType } = useParams();
  return (
    <div>
       {/* <Header isCopilotPage={isCopilotPage}/> */}
      <Form contentType={contentType}/>
  </div>);
};

export default CreateContentType;


// Create a form in JSX react with headline, dek, Body, publish url, PDF upload button, save and publish button. Apply styles for it look prettier and make the form full bleed on the page. At the top of the page also include in h2 tag 'Article'