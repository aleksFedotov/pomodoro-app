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
  min-height: 26.6rem;
  width: 100%;
  background-color: var(--color-semi-dark-navy);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  z-index: 30;
`;

export const ContentWrapper = styled.div`
  max-width: 54rem;
  width: 100%;
  min-height: 40rem;
  border-radius: 2.5rem;
  background-color: var(--color-white);
`;
