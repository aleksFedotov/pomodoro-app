import styled from 'styled-components';

export const Time = styled.h1`
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: ${(props) => (props.fontWeight === '500' ? '-10px' : '-5px')};
  color: var(--color-very-light-blue);
  width: fit-content;
  @media (max-width: 480px) {
    font-size: 8rem;
  }
`;
