import styled from 'styled-components';

import { motion } from 'framer-motion';

export const BackDropWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalOverlayWrapper = styled(motion.div)`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;

  padding: 2.4rem;
  z-index: 30;
`;

export const ContentWrapper = styled.div`
  margin-top: 15.4rem;
  max-width: 54rem;
  width: 100%;
  border-radius: 2.5rem;
  background-color: var(--color-white);
  @media (max-width: 770px) {
    margin-top: 26.7rem;
  }

  @media (max-width: 480px) {
    margin-top: 2.2rem;
  }
`;
