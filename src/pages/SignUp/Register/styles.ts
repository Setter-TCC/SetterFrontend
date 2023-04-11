import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  width: 50%;
  padding: 50px 0px;
  background-color: var(--color-grey-soft);
`;

export const Body = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Step = styled.h2`
  margin-bottom: 60px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: var(--color-primary-black);
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: var(--color-primary-black);
  margin-bottom: 45px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  width: 450px;
  gap: 8px;
  margin-bottom: 20px;
`;

export const InputTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  color: var(--color-primary-black);
`;

export const Input = styled.input`
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #FFFFFF;
  height: 35px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: row;
  justify-content: flex-end;
`;