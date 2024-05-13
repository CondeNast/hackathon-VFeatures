import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 50px 20px 50px;
  padding: 28px;
  padding-top: 20px;
  font-family: sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 70%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ViewLive = styled.button`
  background-color: #08995a;
  color: white;
  border: none;
  padding: 10px 20px;
 font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const UploadAsset = styled.button`
  background-color: #508ee6;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;