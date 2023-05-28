import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-left: 3em;
  width:50%;
`;

export const CreateImage = styled.img`
  width: 25em;
  height: 25em;
  margin-bottom: 2em;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;
`;

export const CallText = styled.p`
  max-width: 470px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 39px;
  display: flex;
  text-align: center;
  color: var(--color-primary-grey);
`;
