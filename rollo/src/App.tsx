import React from "react";
import { ResetCSS } from "./CSS";
import Global from "./contexts/Global";
import Menu from "./components/header";
import Speeder from "./components/speed";

const App: React.FC = () => {
  return (
    <>
      <ResetCSS />
      <Global />
      <Menu />
      <Speeder />
    </>
  );
};

export default App;
