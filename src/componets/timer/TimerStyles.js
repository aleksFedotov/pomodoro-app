import styled from 'styled-components';

export const TimerWrapper = styled.div`
  max-width: 41rem;
  min-height: 41rem;
  width: 100%;
  margin-top: 4.5rem;
`;

export const OuterCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 5rem 5rem 10rem 0rem hsla(235, 45%, 13%, 1),
    -5rem -5rem 10rem 0rem hsla(234, 40%, 25%, 1);
  background: linear-gradient(
    135deg,
    var(--color-gradient-dark),
    var(--color-gradient-light)
  );
  padding: 2.2rem;
`;

export const InnerCircle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-very-dark-blue);
  border-radius: 50%;
  padding: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const ControlBtn = styled.button`
  position: absolute;
  bottom: 9rem;

  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 1rem;
  text-transform: uppercase;
  color: inherit;

  &:hover {
    color: var(--color-${(props) => props.themeColor});
  }
`;
