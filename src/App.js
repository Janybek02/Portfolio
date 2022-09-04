import Header from "./projects/Header/Header";
import "@fontsource/poppins";
import Portfolio from "./projects/Pages/Portfolio";
import Project from "./projects/Projects/Project";
import "../src/styles/media/media.scss"
import {useEffect, useState} from "react";
import Technologies from "./projects/Technologies/Technologies";
function App() {

    const [burger, setBurger] = useState(true)
    const burgerOnclick = () =>{
        setBurger(!burger)
    }
    const bodyO = () =>{
        if (burger === false){
            return document.body.style.overflow = "hidden";
        } else   return document.body.style.overflow = "auto";
    }


    useEffect(()=>{
       bodyO()
    },[burger])
  return (
    <div

        className= { burger ? 'App  ' : "App"}>

        <Header  burger={burger} setBurger={setBurger} burgerOnclick={burgerOnclick}/>
        <Portfolio setBurger={setBurger}/>
        <Project/>
        <Technologies/>


    </div>
  );
}

export default App;
