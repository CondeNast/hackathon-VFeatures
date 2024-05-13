import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  BrandName,
  CreateButton,
  UploadButton,
  Dropdown,
  HeaderWrapper,
  SearchInput,
} from "./styles/Header.styles";
import { contentTypes } from "./utils/constants";
import { Link } from "react-router-dom";

const Header = ({isCopilotPage}) => {
  const type = useParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderWrapper>
      <div>
        <BrandName>Allure</BrandName>
      </div>
      {true && <div>
        {/* <SearchInput type="text" placeholder="Search" /> */}
        <Link to={`/edit/pdf`} target="_blank">
          <UploadButton onClick={toggleDropdown}>Upload PDF ⬆️ </UploadButton> 
        </Link>
        <CreateButton onClick={toggleDropdown}>Create</CreateButton>
        {isDropdownOpen && (
          <Dropdown>
            <ul>
              {contentTypes.map((contentType) => (
                <li key={contentType} style={{ margin: '5px 0' }}>
                <Link
                  to={`/create/${contentType.toLowerCase()}`}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '18px',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    display: 'block',
                    transition: 'background 0.3s ease',
                    width: '100%',
                    height: '100%'
                  }}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {contentType}
                </Link>
              </li>
              ))}
            </ul>
          </Dropdown>
        )}
      </div>}
    </HeaderWrapper>
  );
};

export default Header;
