import React from "react";

import Header from "../components/Header.jsx";

export default App = () => {
  const message = "About webpack.";

  return (
    <div>
      <Header />
      <p>{message}</p>
    </div>
  );
};
