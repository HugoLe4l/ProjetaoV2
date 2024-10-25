import "./headerMenuDrop.css";
import header_drop_image from "../../assets/header-drop-image.png";

function HeaderMenuDrop() {

    function Open_PopUp_Login_Register(){
        const PopUp_Login_Register =document.getElementById("DialogPopUp_Login_Register")
        PopUp_Login_Register.showModal()   
        document.body.style.overflow = "hidden"  
    }

    return (
        <div className="MenuUserDrop" >
            <div className="MenuUserDropBox1">
                <div className="box1-text">
                    <p className="text1">Encontre seu espaço <br/>ideal no HealthSpace</p>
                </div>
                <img src={header_drop_image} alt="header_drop_image"/>
            </div>
            <hr/>
           <div className="sub-menu">
                <a href="#" className="sub-menu-link">
                    <p onClick={Open_PopUp_Login_Register}>LOGIN | CADASTRE-SE</p>
                    <span>&gt;</span>
                </a>
                <a href="#" className="sub-menu-link">
                    <p>Anuncie na HealthSpace</p>
                    <span>&gt;</span>
                </a>
                <a href="#" className="sub-menu-link">
                    <p>Quem somos?</p>
                    <span>&gt;</span>
                </a>
           </div>
        </div>

    )
}
export default HeaderMenuDrop