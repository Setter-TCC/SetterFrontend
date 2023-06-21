import styled from 'styled-components';


export const ContainerBackground = styled.div`
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GenerateCashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin-top: 2em;

  img {
    width: 20em;
    height: 20em;
  }
`;

export const NotFoundText = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: var(--color-primary-grey);
`;

export const GenerateCashButton = styled.button`
  width: 10em;
  height: 3em;
  background: var(--color-primary-blue);
  border: none;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  align-items: center;
  text-align: center;
  color: var(--color-primary-white);

  &:hover {
    font-weight: 600;
  }
`;