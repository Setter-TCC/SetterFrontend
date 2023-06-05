import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  margin: 2em 3em;
`;

export const Body = styled.div`
  /* margin-top: 3.5em; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 103%;

  .team-work {
    margin-top: 3.5em;
    width: 30em;
    height: 30em;
  }
`;
