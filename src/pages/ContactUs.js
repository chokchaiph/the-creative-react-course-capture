import React from "react";
//aniation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </StyledTitle>
      <Hide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle></StyledCircle>
          <h2>Send us an message.</h2>
        </StyledSocial>
      </Hide>
      <Hide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle></StyledCircle>
          <h2>Send an email.</h2>
        </StyledSocial>
      </Hide>
      <Hide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle></StyledCircle>
          <h2>Social Media.</h2>
        </StyledSocial>
      </Hide>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  background: #353535;
  width: 2rem;
  height: 2rem;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
