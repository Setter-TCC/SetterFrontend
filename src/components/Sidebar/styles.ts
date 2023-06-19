import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 260px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
`;

export const LogoImage = styled.img`
  width: 5em;
  height: 5em;
  margin-bottom: 3em;
`;

export const Logout = styled.div`
  position: absolute;
  bottom: 1%;
  left: 3%;
`;
