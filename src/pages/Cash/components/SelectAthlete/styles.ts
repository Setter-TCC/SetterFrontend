import styled from 'styled-components';

interface AthleteProps {
  isSelected: boolean;
}

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  width: 20em;
  height: 3em;
  background: #F2F3F7;
  border-radius: 8px;
  border: none;
  margin-bottom: 1em;

  input {
    border: none;
    background: none;
  }

  img {
    width: 1em;
    height: 1em;
  }
`;

export const AthleteList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20em;
  max-height: 25em;
  overflow-y: scroll;
`;

export const AthleteRow = styled.div<AthleteProps>`
display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8em;
  height: 3em;
  width: 20em;
  padding-left: 1em;
  border-radius: 8px;

  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-primary-blue)' : 'transparent'};
  color: ${({ isSelected }) =>
    isSelected ? 'var(--color-primary-white)' : 'var(--color-primary-grey)'};
  font-weight: ${({ isSelected }) => (isSelected ? '600' : '400')};
  cursor: pointer;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
  }

  &:hover {
    background-color: var(--color-primary-blue);
    color: var(--color-primary-white);
  }
`;


export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  margin-top: 1em;
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 40px;
  background: #046E8F;
  border: none;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  align-items: center;
  text-align: center;
  color: var(--color-primary-white);

  &:hover {
    font-weight: 600;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 40px;
  background: var(--color-primary-white);
  border: 1px solid var(--color-primary-blue);
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: var(--color-primary-blue);

  &:hover {
    font-weight: 600;
  }
`;
