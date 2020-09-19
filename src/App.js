import React from "react";

import "./App.css";
import MainHandler from "./components/main/MainHandler";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <MainHandler>
      <Routes />
    </MainHandler>
  );
};

export default App;
