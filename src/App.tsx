import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container } from './App.styles.ts';

import Feed from './modules/Feed';

import { theme } from './constants/styles';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Feed />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
