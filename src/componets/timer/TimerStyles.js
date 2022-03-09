import styled from 'styled-components';

export const TimerWrapper = styled.div`
  max-width: 41rem;
  height: 41rem;
  width: 100%;
  margin: 4.6rem 0 6.2rem;

  @media (max-width: 830px) {
    margin: 10.8rem 0 14.3rem;
  }

  @media (max-width: 480px) {
    max-width: 30rem;

    height: 30rem;
    margin: 4.8rem 0 7.8rem;
  }
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

  @media (max-width: 480px) {
    padding: 1.6rem;
  }
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
  color: var(--color-white);
  z-index: 5;

  @media (max-width: 480px) {
    padding: 1.6rem;
  }
`;

export const ControlBtn = styled.button`
  position: absolute;
  bottom: 7rem;

  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 2rem;
  text-transform: uppercase;
  font-family: inherit;
  color: inherit;
  font-size: var(--font-size-heading-s);
  line-height: var(--line-height-header-m);
  letter-spacing: var(--letter-spacing-heading-l);
  margin-right: -1.5rem;

  &:hover {
    color: var(--color-${(props) => props.themeColor});
  }

  @media (max-width: 480px) {
    bottom: 4rem;

    font-size: var(-font-size-body);
    letter-spacing: 13.13px;
    margin-right: -13.13px;
  }
`;
