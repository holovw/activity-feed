import { createTheme, Theme } from '@mui/material/styles';
import { teal, lightBlue, grey } from '@mui/material/colors';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500],
      light: lightBlue[300],
    },
    secondary: {
      main: teal.A700,
    },
    info: {
      main: grey[400],
      light: grey[200],
      dark: grey[700],
    },
  },
});

export default theme;
