import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaFacebookF,  FaTelegramPlane} from "react-icons/fa";
import "../../styles/header/header.scss"
import {GrInstagram} from "react-icons/gr";
import Burger from "./Burger/Burger";

const Header = ({burger, burgerOnclick, setBurger}) => {


    return (
        <>
        <div


            className="header">
            <div className="header-div">
                <div className="header-div-page">
                    <div className="header-div-page-left">
                        <a className="header-div-page-left-logo" href="#">Logo</a>
                    </div>
                    <div className="header-div-page-center">
                        <NavLink className="header-div-page-center-link" to={"/"}>Projects</NavLink>
                        <NavLink className="header-div-page-center-link" to={"/About"}>About me</NavLink>
                        <NavLink className="header-div-page-center-link" to={"/Technologies"}>Technologies</NavLink>
                    </div>
                    <div className="header-div-page-right">
                        <a href=""> <GrInstagram className="header-div-page-right-icon" /></a>
                        <a href=""><FaTelegramPlane className="header-div-page-right-icon"/></a>
                        <a href=""><FaFacebookF className="header-div-page-right-icon"/></a>
                    </div>


                </div>
            </div>
        </div>
            <div onClick={burgerOnclick} className="header-burger">

            </div>
            <span className="menu-Span">
                <Burger burger={burger} setBurger={setBurger} burgerOnclick={burgerOnclick}/>

            </span>
        </>
    );
};

export default Header;