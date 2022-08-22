import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HeaderBar from './components/headerSection/HeaderBar';
import { StyledEngineProvider } from '@mui/material/styles';
import theme from './utilities/custom-theme';

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <HeaderBar />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
