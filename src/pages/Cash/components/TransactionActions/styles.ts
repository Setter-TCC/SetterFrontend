import styled from 'styled-components';

export const ContainerBackground = styled.div`
 position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
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

  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.8em;
    color: var(--color-primary-blue);
    margin-bottom: 2em;
  }
`;
