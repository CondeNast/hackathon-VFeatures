import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandName = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const SearchInput = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

export const CreateButton = styled.button`
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  z-index: 1;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    color: black;
  }

  li:hover {
    background-color: #ddd;
  }
`;