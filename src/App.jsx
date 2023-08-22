import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import Cards_inner from "./pages/cards_inner/cards_inner.jsx"
import Home from "./pages/home/home.jsx"
import Buy from "./pages/buy/buy.jsx"
import Servic from "./pages/servis/servic.jsx"
import Bin from "./pages/bin/bin.jsx"
import Done from "./pages/done/done.jsx"
import Contacts from "./pages/contacts/contacts.jsx"

function App() {

  const[lang , setLang]= useState("en")
  const[change,setChange]= useState()

  return (
    <>
      <Header  lang={lang} change={change} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cards_inner/:cardsId" element={<Cards_inner lang={lang} setChange={setChange}/>} />
        <Route path="/bin" element={<Bin setChange={setChange} lang={lang}/>}/>
        <Route path="/buy/:buyId" element={<Buy lang={lang}/>}/>
        <Route path="/servic" element={<Servic lang={lang}/>}/>
        <Route path="/done" element={<Done lang={lang}/>}/>
        <Route path="/contacts"element={<Contacts lang={lang}/>}/>
      </Routes>
      <Footer  lang={lang} setLang={setLang} />
    </>
  )
}

export default App