import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/Home.jsx";
import Catalog from "./components/Catalog.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Error404 from "./components/Error404.jsx";
function App() {

  return (
      <BrowserRouter>
        <div>We work!!!</div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/*" element={<Error404/>}></Route>

        </Routes>
      </BrowserRouter>
  )
}

export default App
