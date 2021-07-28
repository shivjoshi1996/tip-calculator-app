import { createGlobalStyle } from 'styled-components';
import Page from './components/Page';

const GlobalStyles = createGlobalStyle`
  html {
    --color-primary: hsl(172, 67%, 45%);

    --color-dark-cyan: hsl(183, 100%, 15%);
    --color-dark-grayish-cyan: hsl(186, 14%, 43%);
    --color-dark-grayish-cyan-2: hsl(184, 14%, 56%);
    --color-light-grayish-cyan: hsl(185, 41%, 84%);
    --color-light-grayish-cyan-2: hsl(189, 41%, 97%);
    --color-white: (0, 0%, 100%);
  }
`;

function App({ children }) {
  return (
    <>
      <GlobalStyles />
      <Page>{children}</Page>
    </>
  );
}

export default App;
