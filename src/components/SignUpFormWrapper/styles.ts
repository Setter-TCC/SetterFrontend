import styled from 'styled-components';

interface InputWrapperProps {
  backgroundColor: string,
}

export const Body = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Step = styled.h2`
  margin-bottom: 1em;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: var(--color-primary-black);
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: var(--color-primary-black);
  margin-bottom: 1.5em;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  width: 450px;
  margin-bottom: 20px;

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
    background: ${props => props.backgroundColor};
    border-radius: 4px;
    border: 1px solid var(--color-primary-white);
    height: 2.5em;
    margin-bottom: 1.5em;
  }

  select {
    height: 2.5em;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--color-primary-white);
    background: var(--color-primary-white);
  }
`;

export const InputTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  color: var(--color-primary-black);
`;
