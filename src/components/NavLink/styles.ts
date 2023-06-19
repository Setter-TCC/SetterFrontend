import styled, { css } from 'styled-components';

interface NavBoxProps {
  isSelected: boolean,
  navColor: string,
  navFilter: string
}

export const NavBox = styled.div<NavBoxProps>`
  display: flex;
  flex-direction: row;
  gap: 0.8em;
  justify-content: left;
  align-items: center;
  padding: 1em 2em;
  width: 100%;

  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.navColor};
  }

  img {
    filter: ${props => props.navFilter};
    width: 2em;
    height: 2em;
  }

  &:hover {
    cursor: pointer;
  }

  ${({ isSelected }: NavBoxProps) => !isSelected && css`
  &:hover {
    p {
      font-weight: 700;
    }
  }
  `}


  ${({ isSelected, navColor }: NavBoxProps) => isSelected && css`
    background-color: ${navColor};

    p {
      color: var(--color-primary-white);
    }

    img {
      filter: brightness(0) saturate(100%) invert(95%) sepia(96%) saturate(0%) hue-rotate(90deg) brightness(116%) contrast(100%);
    }
  `}
`;
