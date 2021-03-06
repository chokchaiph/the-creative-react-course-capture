import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  @media (max-width: 1300px) {
    padding: 0;
    text-align: center;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
