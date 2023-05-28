import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 50%;
  padding-top: 2em;
  background-color: var(--color-grey-soft);
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  width: 10em;
  height:3em;
  background: var(--color-primary-white);
  border: 1px solid #046E8F;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: #046E8F;

  &:hover {
    font-weight: 600;
  }
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  width: 10em;
  height:3em;
  background: #046E8F;
  border: none;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: var(--color-primary-white);

  &:hover {
    font-weight: 600;
  }
`;

export const SkipButton = styled.button`
  margin-top: 15px;
  width: 100%;
  background: none;
  border: none;
  color: var(--color-primary-blue);
  text-align: right;

  &:hover {
    color: var(--color-blue-soft);
  }
`;

export const Skip = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 2em;
  flex-direction: row;
  justify-content: space-between;
`;
