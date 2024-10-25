import { Link } from "react-router-dom";

import "./header2.css";

import HeaderMenuDrop from "../Header1/headerMenuDrop.jsx";
import headerLogo from "../../assets/header-logo.png";

import 'bootstrap-icons/font/bootstrap-icons.css';

function Header2() {
    return (
        <div id="header2">
            <div className="HeaderTop" >
                <Link to={"/"} className="HeaderBoxLeft">
                    <img src={headerLogo}/>
                    <h4>HealthSpace</h4>
                </Link>

                <div className="HeaderboxRight">
                    <p id="text1">Anuncie seu espaço no HealthSpace</p>
                    <i id="icon_idioma" className="bi bi-globe"></i>
                    <div className="UserBox">
                        <i id="icon1" className="bi bi-person-fill"></i>
                        <i id="icon2" className="bi bi-caret-down-fill"></i>
                        <div className="UserBoxMenuDrop">
                            <div className="UserMenuDropContent">
                                <HeaderMenuDrop/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile_menu_box">
                    <i class="bi bi-list"></i>
                </div>
            </div>
            <div className="HeaderSearch">
                <div className="searchBox"> 
                    <input type="search"></input>
                    <i id="btn-search" className="bi bi-search"></i>
                </div>
            </div>
            
        </div >

        
    )
}

export default Header2