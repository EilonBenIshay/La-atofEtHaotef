import "./App.css";
import { Divider } from "@mui/material";
import { routes, route } from "../src/router/routes";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const RoutesList = routes.map((route: route) => {
    return (
      <Route key={route.path} path={route.path} element={<route.component />} />
    );
  });

  return (
    <>   
        <BrowserRouter>
        <Header></Header>
        <Routes>{RoutesList}</Routes>
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
      </BrowserRouter>
    </>
  )
}

export default App;
