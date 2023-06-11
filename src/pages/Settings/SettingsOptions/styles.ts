import styled from 'styled-components';

export const Container = styled.div`
  /* height: 80%; */
  display: flex;
  padding: 4em;
  margin-top: 2em;
  flex-direction: row;
  border: 1px solid #E5E5E5;
  border-radius: 10px;
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SettingsFormBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5em;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;

  label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: var(--color-primay-grey);
  }

  input {
    background: #FFFFFF;
    min-width: 20em;
    height: 2.5em;
    border: 1px solid #5D5D5D;
    border-radius: 5px;
    padding-left: 1em;
  }

  select {
    height: 2.5em;
    min-width: 20em;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #5D5D5D;
    background: var(--color-primary-white);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  margin-top: 3em;
  justify-content: center;


  .restore {
    width: 10em;
    height: 3em;
    background: var(--color-primary-white);
    border: 1px solid var(--color-primary-blue);
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    text-align: center;
    color: var(--color-primary-blue);

    &:hover {
      font-weight: 600;
    }
  }

  .save {
    width: 10em;
    height: 3em;
    background: var(--color-primary-blue);
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
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  padding: 6em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  img {
    margin-bottom: 1em;
    width: 10em;
    height: 10em;
  }
`;

export const NotFoundText = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: var(--color-primary-grey);
`;

export const AddCoachButton = styled.button`
  width: 10em;
  height: 3em;
  background: var(--color-primary-blue);
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
