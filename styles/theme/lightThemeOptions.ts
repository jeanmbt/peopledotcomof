import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: "#481593" },
    secondary: { main: "#ff0000" },
    contrastThreshold: 2,
  },
});

export  default theme

