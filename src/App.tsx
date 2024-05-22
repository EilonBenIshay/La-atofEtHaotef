import "./App.css";
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

      </BrowserRouter>
    </>
  )
}

export default App;
