import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; 
  justify-content: center;
  margin-left: 5em;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    color: var(--color-primary-black);
    margin-bottom: 0.5em;
  }

  input {
    width: 28em;
    padding-left: 1em;
    background-color: var(--color-background);
    border-radius: 4px;
    border: 1px solid var(--color-primary-white);
    height: 2.5em;
    margin-bottom: 1.5em;
  }

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 40px;
  background: #046E8F;
  border: none;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: var(--color-primary-white);
  align-self: flex-end;

  &:hover {
    font-weight: 600;
  }
`;