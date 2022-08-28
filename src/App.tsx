import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HeaderBar from './components/headerSection/HeaderBar';
import theme from './utilities/custom-theme';
import AppDummy from './components/AppDummy';

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
        <HeaderBar />
    </ThemeProvider>
  );
}

export default App;
