import "./App.css";
import HomePage from "./pages/homePage/homePage";
import Header from "./Components/Header/Header"
import { Divider } from "@mui/material";

function App() {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>;

      <Divider variant="middle"
        sx={{
          width: '90vw',
          border: '2.4px solid',
          borderColor: '#ECF39E',
          position: 'absolute',
          bottom: '17vh',
        }} />
      <div className="contact">
        צרו קשר:
        <br />
        052-5381648
        <br />
        israel@gmail.com
      </div>
    </>
  )
}

export default App;
