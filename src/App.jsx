// noinspection ES6CheckImport

import React from 'react'
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Notfound from "./components/notFound/Notfound";

function Cv() {
    return <>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Contact></Contact>
        <Navigation></Navigation>
    </>;
}

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={Cv()}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )

}
export default App

