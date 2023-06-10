import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4em;
  display: flex;
  align-items: center;
  color: #046E8F;
  margin-bottom: 1em;
  text-align: center;

`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8em;
    line-height: 16px;
    display: flex;
    color: #4E3C3C;
    margin-bottom: 0.5em;
  }

  input {
    width: 23em;
    height: 1.5em;
    border: 1px solid #4E3C3C;
    border-radius: 0.3em;
    padding-left: 1em;
    margin-bottom: 1em;
  }

  select {
    width: 23em;
    height: 1.8em;
    border: 1px solid #4E3C3C;
    border-radius: 0.3em;
    padding-left: 0.5em;
    margin-bottom: 1em;
    background-color: var(--color-primary-white);
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;

  img {
    width: 7em;
    margin-bottom: 1.5em;
  }

  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
