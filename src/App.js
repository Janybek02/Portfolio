import Header from "./projects/Header/Header";
import "@fontsource/poppins";
import Portfolio from "./projects/Pages/Portfolio";
import Project from "./projects/Projects/Project";
import "../src/styles/media/media.scss"
import {useEffect, useState} from "react";
function App() {

    const [burger, setBurger] = useState(true)
    const burgerOnclick = () =>{
        setBurger(!burger)
    }
    const bodyO = () =>{
        if (burger === true){
            return document.body.style.overflow = "hidden";
        } else return 0
    }
    const bodyR = () =>{
        if (burger === false){
            return document.body.style.overflow = "auto";
        } else return 0
    }
    useEffect(()=>{
      if ( burger === true){
          return bodyO
      } else return  bodyR

    },[ burger])
  return (
    <div

        className= { burger ? 'App  ' : "App"}>

        <Header  burger={burger} setBurger={setBurger} burgerOnclick={burgerOnclick}/>
        <Portfolio setBurger={setBurger}/>
        <Project/>
    </div>
  );
}

export default App;
