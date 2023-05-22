import styled from 'styled-components';

export const ContainerBackground = styled.div`
 position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Cor cinza com 50% de opacidade */
  z-index: 998; /* Um valor menor que o z-index do drawer */
`;

export const Container = styled.div`
  width: 28em;
  height: 100vh;
  background-color: var(--color-primary-white);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6em;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #046E8F;
  margin-bottom: 2em;

`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
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
    padding-left: 0.5em;
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
    width: 8em;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2em;

`;