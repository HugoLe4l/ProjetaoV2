import { Link } from "react-router-dom"
import "./css/not_found.css"


function NotFoundPage (){

    return(
        <>
            <div className="main_image">
                <img src="src/assets/construction-helmet-worker.png" alt="" />
                <div className="box_constructin">
                    <h3>Página em construção</h3>
                    <p>Retorne para a<Link className="link_home_constru" to={"/"}>Home</Link></p>
                </div>
            </div>
        </>
    )
   
}

export default NotFoundPage