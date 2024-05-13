import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Section = styled.div`
  margin: 20px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  border-radius: 10px;
`;

const AdSection = styled(Section)`
    width: 100%;
    height: 100px;
    background-color: #ffc107;
  align-self: center;
`;

const HeadlineSection = styled(Section)`
  background-color: #007bff;
  color: #fff;
  width: 50%;
  left: 0;
  height: 50px;
`;

const ContentSection = styled(Section)`
  background-color: #28a745;
  color: #fff;
  width: 50%;
  height: 500px;
  align-self: flex-start;
`;

const RecircSection = styled(Section)`
  background-color: #17a2b8;
  color: #fff;
  right: 0;
  top: 50%;
  width: 30%;
  height: 300px;
  position: absolute;
`;

const MainPage = () => {
    const { type } = useParams();

    return (
        <MainContainer>
            <AdSection>
                Ad Section
            </AdSection>
            <HeadlineSection>
                Headline Section: {type}
            </HeadlineSection>
            <ContentSection>
                Content Section
            </ContentSection>
            <RecircSection />
            
        </MainContainer>
    );
};

export default MainPage;