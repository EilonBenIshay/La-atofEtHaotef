import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import Header from "./Components/Header/Header"

function App() {
  return (
    <>
      <Header></Header>
<HomePage></HomePage>;
    </>
  )
}

export default App;
