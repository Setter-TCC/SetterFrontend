import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  margin: 2em 3em;
`;

export const Body = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: var(--color-primary-black);
`;

export const CreatedAccountImage = styled.img`
  width: 55vh;
  height: 55vh;
`;
