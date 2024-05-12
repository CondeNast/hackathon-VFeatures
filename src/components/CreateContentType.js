import { useParams } from "react-router-dom";

const CreateContentType = () => {
  const { contentType } = useParams();
  return <div>{contentType}</div>;
};

export default CreateContentType;
