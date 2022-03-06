import styled from 'styled-components';

export const SettingsHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #e3e1e1;
  padding: 3.4rem 4rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .closeBtn {
    cursor: pointer;
  }
`;
export const SettingsContentWrapper = styled.form`
  padding: 2.4rem 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h4`
  text-transform: uppercase;
`;

export const ApplyBtn = styled.button`
  width: 14rem;
  height: 5.4rem;
  margin-bottom: -2.7rem;
  border: none;
  border-radius: 5rem;
  background-color: var(--color-orange);
  font-weight: inherit;
  font-family: inherit;
  font-size: var(--font-size-heading-s);
  color: var(--color-white);
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #f98d8d;
  }

  &:active {
    transform: scale(0.98);
  }
`;
