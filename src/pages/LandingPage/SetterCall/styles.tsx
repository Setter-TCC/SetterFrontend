import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left; 
`;

export const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: var(--color-primary-black);
  max-width: 530px;
`;

export const Description = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: var(--color-primary-black);
  max-width: 400px;
`;
