import React from "react";
import { ResetCSS } from "./CSS";
import Global from "./contexts/Global";
import Menu from "./components/header";

const App: React.FC = () => {
  return (
    <>
      {/* <ResetCSS /> */}
      {/* <Global /> */}
      <Menu />
    </>
  );
};

export default App;
