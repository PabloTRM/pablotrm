import React from 'react'
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

const App= () => {
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Contact></Contact>
        </>
    )

}
export default App

