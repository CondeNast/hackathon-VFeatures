import { useParams } from "react-router-dom";
import Form from "./Form";

const CreateContentType = () => {
  const { contentType } = useParams();
  return (
    <div>
      <Form contentType={contentType} />
    </div>
  );
};

export default CreateContentType;
