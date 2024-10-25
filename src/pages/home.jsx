//Css
import "./css/home.css"

//Components
import Header1 from "../components/Header1/header1.jsx"
import PopUP_Login_Register from "../components/PopUp_Login_Register/PopUp_Login_Register.jsx"
import CardAD from "../components/Cards_AD/cards_ad.jsx"
import Footer from "../components/Footer/footer.jsx"

function Home (){
    return(
        <>
            <Header1/>
            <dialog id="DialogPopUp_Login_Register">
                <PopUP_Login_Register/>
            </dialog>
            <section id="box_cards_announcement">
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
                <CardAD/>
            </section>
            <footer id="Footer">
                <Footer/>
            </footer>
        </>
    )
}

export default Home