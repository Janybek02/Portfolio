import React from 'react';
import {NavLink} from "react-router-dom";
import {GrInstagram} from "react-icons/gr";
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";
import "../../../styles/header/burger/burger.scss"
import {AiOutlineClose} from "react-icons/ai";
const Burger = ({burgerOnclick,setBurger, burger}) => {
    return (
        <div


            className={burger ? " " : "  aside" }>
            <div
                className= { burger ? 'menu actives' :' menu'}>
                <div
                    className="burger-page">
                    <div className="burger-page-left">


                        <AiOutlineClose className="burger-page-left-icon" onClick={() => setBurger(true)}/>

                        <NavLink onClick={()=>setBurger(true)} className="burger-page-left-link" to={"/"}>Projects</NavLink>
                        <NavLink onClick={()=>setBurger(true)} className="burger-page-left-link" to={"/About"}>About me</NavLink>
                        <NavLink onClick={()=>setBurger(true)} className="burger-page-left-link" to={"/Technologies"}>Technologies</NavLink>
                    </div>

                    <div className="burger-page-right">
                        <a href=""> <GrInstagram className="burger-page-right-icon" /></a>
                        <a href=""><FaTelegramPlane className="burger-page-right-icon"/></a>
                        <a href=""><FaFacebookF className="burger-page-right-icon"/></a>



                    </div>


                </div>
            </div>
        </div>

    );
};

export default Burger;