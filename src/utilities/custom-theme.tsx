import { createTheme } from "@mui/material/styles";
import type {} from '@mui/lab/themeAugmentation';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffddc1",
      main: "#ffab91",
      dark: "#c97b63",
      contrastText: "#fafafa",
    },
    background: {
      paper: '#d5d5d5',
      default: '#bdbdbd',
    },
    text: {
      primary: '#000000',
      secondary: '#ffab00',
      disabled: 'rgba(0,0,0,0.35)',
    }
  },
  typography: {
    button: {
      fontWeight: "bold",
    },
  },
});

export default theme;
