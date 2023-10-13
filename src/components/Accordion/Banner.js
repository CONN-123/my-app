

import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
background: url("./Reactimages/hero.png");
  background-size: cover;
  background-position: center;
  text-align: center;
  height:120vh;
  padding: 9%;
  
  
  @media (min-width: 768px) {
    padding: 9%; 
  }
`;


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 40px; 
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: black; 
  font-size: 18px; 
`;

const YourComponent = () => {
  return (
    <Section>
      <ContentWrapper>
        <H2>Payroll and HR solutions</H2>
        <Paragraph>We offer efficient, easy and flexible payroll management solutions <br/>
         customized to suit businesses of different sizes in Zimbabwe..</Paragraph>
      </ContentWrapper>
    </Section>
  );
};

export default YourComponent;
