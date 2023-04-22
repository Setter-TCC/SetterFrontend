import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 32.5%;
  flex-direction: column;
  align-items: left; 
  margin-top: -1em;
  margin-left: 5em;
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
`;