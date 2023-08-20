import { Routes, Route } from "react-router-dom"
import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import Cards_inner from "./components/cards_inner/cards_inner.jsx"
import Home from "./pages/home/home.jsx"
import Buy from "./components/buy/buy.jsx"
import Servic from "./pages/servis/servic.jsx"
import Bin from "./pages/bin/bin.jsx"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cards_inner/:cardsId" element={<Cards_inner/>} />
        <Route path="/bin" element={<Bin/>}/>
        <Route path="/buy/:buyId" element={<Buy/>}/>
        <Route path="/servic" element={<Servic/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App