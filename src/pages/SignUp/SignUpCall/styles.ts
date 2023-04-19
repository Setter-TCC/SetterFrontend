import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width:50%;
  padding: 30px 50px;
`;

export const CreateImage = styled.img`

  width: 470px;
  height: 470px;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
`;

export const CallText = styled.p`
  margin-top: 20px;
  max-width: 470px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 39px;
  display: flex;
  text-align: center;
  color: var(--color-primary-grey);
`;
