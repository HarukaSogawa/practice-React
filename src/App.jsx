import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I am fine!</ColorfulMessage>
      <button onClick={onClickButton}>button</button>
    </>
  );
};

export default App;
