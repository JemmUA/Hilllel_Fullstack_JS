import { useState } from 'react'
import './App.css'
import BannerMain from './components/Banner_main.jsx';
import BannerGeneral from "./components/Banner_general.jsx";

function App() {

  return (
    <>
        <BannerMain></BannerMain>
        <BannerGeneral></BannerGeneral>
    </>
  )
}

export default App
