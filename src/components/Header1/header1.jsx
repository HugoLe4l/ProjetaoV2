import { Link } from "react-router-dom";
import "./header1Mobile.css";
import "./header1.css";


import HeaderMenuDrop from "./headerMenuDrop";
import headerLogo from "../../assets/header-logo.png";
import CategoryItem from "../Categories/category_item.jsx"
import 'bootstrap-icons/font/bootstrap-icons.css';

import ScrollBoxCategories from "../Categories/ScrollBoxCategories.jsx"

function Header1() {
    return (
        <div id="header1">
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

            <section id="box_categories">
                <nav id="nav_categories">
                    <ScrollBoxCategories/>
                    <CategoryItem nomeTag="Descobrir"/>
                    <CategoryItem nomeTag="Odontologia"/>
                    <CategoryItem nomeTag="Oftalmologia"/>
                    <CategoryItem nomeTag="Fisiotetapia"/>
                </nav>
            </section>
        </div >

        
    )
}
window.addEventListener("scroll", function () {
    const header = document.getElementById("header1")
    const HeaderSearch = document.querySelector('.HeaderSearch')

    header.classList.toggle("header-height", window.scrollY > 0);
    HeaderSearch.classList.toggle("search-box-scroll-animation", window.scrollY > 0)
})

export default Header1