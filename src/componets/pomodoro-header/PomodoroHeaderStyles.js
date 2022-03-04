import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  max-width: 37.3rem;
  width: 100%;
  padding: 0.8rem;
  border-radius: 3.2rem;
  background-color: var(--color-very-dark-blue);
  margin-top: 4.7rem;
`;

export const BtnWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const TimerTypeBtn = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  border-radius: 3.2rem;
  max-width: 12rem;
  width: 100%;
  opacity: ${(props) => (props.isSelected ? '1' : '0.4')};
  height: 4.8rem;
  color: ${(props) =>
    props.isSelected
      ? 'var(--color-very-dark-blue)'
      : 'var(--color-very-light-blue)'};
  font-size: var(--font-size-body);
  font-weight: inherit;
  z-index: ${(props) => (props.isSelected ? '20' : '5')};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const Selector = styled.div`
  position: absolute;
  left: ${(props) => props.position};
  z-index: 10;
  border-radius: 3.2rem;
  max-width: 12rem;
  width: 100%;
  height: 4.8rem;
  background-color: var(--color-${(props) => props.colorTheme});
  transform: translateX(-${(props) => props.position});
  transition: all 0.3s ease;
`;
