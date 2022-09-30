import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import HeaderBar from "./components/headerSection/HeaderBar";
import theme from "./utilities/custom-theme";
import AppDummy from "./components/AppDummy";
import AboutUsIndex from "./components/AboutUsIndex/AboutUsIndex";
import BlogIndex from "./components/BlogIndex/BlogIndex";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderBar />
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<AppDummy />} />
        <Route path="/aboutUs" element={<AboutUsIndex />} />
        <Route path="/blogs" element={<BlogIndex/>} />
      </Routes>
    </>
  );
}

export default App;
