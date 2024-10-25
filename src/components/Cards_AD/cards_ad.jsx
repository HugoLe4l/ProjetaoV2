import { Link } from "react-router-dom"
import "./cards_ad.css"

function CardAD (props){
    return(
        <>
            <Link to={"/anuncio"} className="box_card_ad">
                <div className="card_ad_content">
                    <div className="image_card"></div>
                    <div className="infos_card">
                        <h2>Sala de Fisioterapia</h2>
                        <div className="loc_text_ad"><i class="bi bi-geo-alt"></i>Caxánga, Recife. 10km</div>
                        <p className="Dono_Anuncio">Pertence a <Link to={"/*"} className="link_dono">Visão Center</Link></p>
                    </div>
                    <h4>R$ 150/h</h4>
                    <div class="rating-box_CardAD">
                        <i class="bi bi-star-fill"></i>
                        <p class="rating-info">5,0</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default CardAD