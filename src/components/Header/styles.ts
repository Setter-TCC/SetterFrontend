import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: auto;
  gap: 13px;
`;

export const LogoName = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: var(--color-primary-blue);
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: auto;
`;
