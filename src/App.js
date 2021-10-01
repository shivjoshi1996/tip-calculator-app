import { ThemeProvider } from 'styled-components';
import Page from './components/Page';

const theme = {
  colors: {
    primary: 'hsl(172, 67%, 45%)',
    darkCyan: 'hsl(183, 100%, 15%)',
    darkGrayCyan: 'hsl(186, 14%, 43%)',
    darkGrayCyan2: 'hsl(184, 14%, 56%)',
    lightGrayCyan: 'hsl(185, 41%, 84%)',
    lightGrayCyan2: 'hsl(189, 41%, 97%)',
    white: 'hsl(0, 0%, 100%)',
  },
  font: {
    main: `'Space Mono', monospace`,
  },
};

function App({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Page>{children}</Page>
      </ThemeProvider>
    </>
  );
}

export default App;
