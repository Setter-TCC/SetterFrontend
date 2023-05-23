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
  height: 100%;
  background-color: var(--color-primary-white);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 1em;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
`;

export const AddButton = styled.button`
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
`;
