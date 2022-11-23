import React from "react";

import helloMessage from "../lib/hello.txt";
import Header from "../components/Header.jsx";

export default App = () => {
  return (
    <div>
      <Header />
      <p>{helloMessage}</p>
    </div>
  );
};
