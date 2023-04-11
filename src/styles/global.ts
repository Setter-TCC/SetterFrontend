import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  *{
    margin:0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body{
    --color-primary-blue: #046E8F;
    --color-primary-red: #AD343E;
    --color-primary-white: #FFFFFF;
    --color-primary-green: #2A9134;
    --color-primary-yellow: #B8AC30;
    --color-primary-orange: #F89C50;
    --color-primary-pink: #F87575;
    --color-grey-dark: #767676;
    --color-primary-grey: #5D5D5D;
    --color-grey-soft: #F3F3F3;
    --color-grey-soft-2: #C6C6C6;
    --color-primary-black: #242424;
    --color-background: #F5F5F5;
    --color-blue-soft: #046e8f99;
  }

  select, button {
    cursor: pointer;
  }
`;
