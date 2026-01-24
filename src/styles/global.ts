import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --fs-title-xl: 3rem;
    --fs-title-l: 2rem;
    --fs-title-m: 1.5rem;
    --fs-title-s: 1.25rem;
    --fs-title-xs: 1.125rem;

    --fs-text-l: 1.25rem;
    --fs-text-m: 1rem;
    --fs-text-s: 0.875rem;
    --fs-text-xs: 0.75rem;
    
    --ff-sans-roboto: 'Roboto', sans-serif;
    --ff-sans-baloo: 'Baloo 2', sans-serif;
    --fw-extrabold: 'bolder';
    --fw-bold: 'bold';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff-sans-roboto);
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: var(--fs-title-xl);
    line-height: 130%;
    color: ${(props) => props.theme['--base-title']};
  }
`;
