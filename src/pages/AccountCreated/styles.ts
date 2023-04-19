import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width:100vw;
  margin: 30px 50px;
`;

export const Body = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
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
