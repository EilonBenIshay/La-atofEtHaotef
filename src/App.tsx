import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/homePage/homePage";

function App() {
  const [count, setCount] = useState(100000);

  return <HomePage></HomePage>;
}

export default App;
