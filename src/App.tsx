import { useState } from "react";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <HomePage></HomePage>
      <ProjectPage></ProjectPage>
    </>
  );
}

export default App;
