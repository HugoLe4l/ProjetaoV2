import "./PopUp_Login_Register.css"
import headerLogo from "../../assets/header-logo.png";
import googleLogo from "../../assets/googleLogo.png"

function PopUP_Login_Register (){
    function Close_PopUp_Login_Register(){
        const PopUp_Login_Register =document.getElementById("DialogPopUp_Login_Register")
        PopUp_Login_Register.close()
        document.body.style.overflow = "auto"
    }
  
    function GoRegisterPopUp (){
        const PopUp_Content = document.querySelector(".PopUp_Content")
        const PopUp_Content_Login = document.querySelector(".PopUp_Content_Login")
        const PopUp_Content_Register = document.querySelector(".PopUp_Content_Register")
        PopUp_Content.style.flexDirection = "row-reverse";
        PopUp_Content_Login.style.transform = "scale(0.5)"; 
        PopUp_Content_Register.style.transform = "scale(1)";
    }
    function GoLoginPopUp (){
        const PopUp_Content = document.querySelector(".PopUp_Content")
        const PopUp_Content_Login = document.querySelector(".PopUp_Content_Login")
        const PopUp_Content_Register = document.querySelector(".PopUp_Content_Register")
        PopUp_Content.style.flexDirection = "row";
        PopUp_Content_Login.style.transform = "scale(1)";
        PopUp_Content_Register.style.transform = "scale(0.5)";
    }
    return (
        <div className="PopUp_Content">
            <div className="PopUp_Content_Geral PopUp_Content_Login">
                <i onClick={Close_PopUp_Login_Register} id="close_btn" class="bi bi-x-lg"></i>
                <img id="header_logo" src={headerLogo}/>
                <h2>Bemvindo(a) ao HealthSpace</h2>
                <form className="form_Login_Register">
                    <div className="inputs_box">
                        <div className="input_Login_Register">
                            <label>Email</label>
                            <input type="text" required></input>
                        </div>
                        <div className="input_Login_Register">
                            <label>Senha</label>
                            <input type="password" required></input>
                        </div>
                    </div>
                    <p id="link_recuperar_senha">Esqueceu sua senha?</p>
                    <button className="btn_entrar" type="submit">Entrar</button>
                </form>
                <p>Ou</p>
                <div id="Google_Login_Register"><img src={googleLogo}/>Continuar com o Google</div>
                <p id="link_Login_e_Register">Não tem conta?<strong id="link_register_popUp" onClick={GoRegisterPopUp}>Registre-se</strong></p>
            </div>
            <div className="PopUp_Content_Geral PopUp_Content_Register">
                <i onClick={Close_PopUp_Login_Register} id="close_btn" class="bi bi-x-lg"></i>
                <img id="header_logo" src={headerLogo}/>
                <h2>Bemvindo(a) ao HealthSpace</h2>
                <form className="form_Login_Register">
                    <div className="inputs_box">
                        <div className="input_Login_Register">
                            <label>Email</label>
                            <input type="text" required></input>
                        </div>
                        <div className="input_Login_Register">
                            <label>Senha</label>
                            <input type="password" required></input>
                        </div>
                        <div className="input_Login_Register">
                            <label>Data de Nascimento</label>
                            <input type="date" required></input>
                        </div>
                    </div>
                    <p id="link_recuperar_senha">Esqueceu sua senha?</p>
                    <button className="btn_entrar" type="submit">Entrar</button>
                </form>
                <p>Ou</p>
                <div id="Google_Login_Register"><img src={googleLogo}/>Continuar com o Google</div>
                <p id="link_Login_e_Register">Ja possui conta?<strong id="link_login_popUp" onClick={GoLoginPopUp}>Login</strong></p>
            </div>
        </div>
    )
}
export default PopUP_Login_Register