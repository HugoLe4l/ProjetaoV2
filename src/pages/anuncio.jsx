import Header2 from "../components/Header2/header2.jsx"
import PopUP_Login_Register from "../components/PopUp_Login_Register/PopUp_Login_Register.jsx"
import Footer from "../components/Footer/footer.jsx"
import Button1 from "../components/Button1/button1.jsx"
import ImageT1 from "../components/ImageT/imageT1.jsx"
import ImageT2 from "../components/ImageT/imageT2.jsx"

import "./css/anuncio.css"

function Anuncio() {
    return (
        <>
            <Header2 />
            <dialog id="DialogPopUp_Login_Register"><PopUP_Login_Register /></dialog>
            <main className="main_anuncio">
                <section className="section_1">
                    <div class="tittle_section_1">
                        <h2>Sala de fisioterapia, ampla, com vários equipamentos.</h2>
                        <div class="title-links">
                            <a href="#"><i class="bi bi-upload"></i>Compartilhar</a>
                            <a href="#"><i class="bi bi-heart"></i>Salvar</a>
                        </div>
                    </div>
                    <div id="box-photos">
                        <div id="box_photo_left">
                            <ImageT1/>
                        </div>
                        <div id="box_photo_right">
                            <ImageT2/>
                            <ImageT2/>
                            <ImageT2/>
                            <ImageT2/>
                        </div>
                    </div>
                </section>

                <section className="section_2">
                    <h3>Sala de Fisioterapia</h3>
                    <p class="local-announcement"><i class="bi bi-geo-alt"></i>Caxangá, Recife. 10km</p>
                    <div class="box-rating">
                        <div class="rating">
                            <i class="bi bi-star-fill"></i>
                            <p>4.80</p>
                        </div>
                        <a href="#">75 comentaríos</a>
                    </div>
                    <hr />
                    <div class="advertiser-perfil">
                        <div class="adveriser-image-perfil"></div>
                        <div class="adveriser-infos">
                            <p class="text-Pertence">Pertence a: <a href="#">Visão Center</a></p>
                            <p class="text-age">1 ano na plataforma</p>
                        </div>
                    </div>
                    <hr />
                    <div class="tags-announcement">
                        <h3>Alguns recursos que o proprietário oferece</h3>
                        <div class="tags-field">
                            <div class="tag">
                                <i class="bi bi-ev-front"></i>
                                <p>Estacionamento incluído</p>
                            </div>
                            <div class="tag">
                                <i class="bi bi-wifi"></i>
                                <p>Recepção</p>
                            </div>
                            <div class="tag">
                                <i class="bi bi-wifi"></i>
                                <p>Banheiro</p>
                            </div>
                            <div class="tag">
                                <i class="bi bi-wifi"></i>
                                <p>Elevador</p>
                            </div>
                            <div class="tag">
                                <i class="bi bi-wifi"></i>
                                <p>Wi-Fi</p>
                            </div>
                            <div class="tag">
                                <i class="bi bi-wifi"></i>
                                <p>Ar-condicionado</p>
                            </div>

                        </div>
                        <a id="btn-mostrar-todas-comodidades" href="#">Mostrar todas as 14 comodidades</a>
                    </div>

                    <div class="box-reservar">
                        <p id="Reserva-valor">R$ 60/h</p>
                        <div class="inputs-field">
                            <div class="inputs-date">
                                <p>Data</p>
                                <input type="date" value="2024-09-14"/>
                            </div>
                            <div class="inputs-time">
                                <p>Horário da Reserva</p>
                                <div class="inputs-box-time">
                                    <input type="time" value="14:30"/>
                                        <p>|</p>
                                        <input type="time" value="14:30"/>
                                        </div>
                                </div>
                            </div>
                            <div id="box_button"></div>
                            <p class="text">Você ainda não será cobrado</p>
                            <div class="box-valor-total">
                                <p id="valor-x-horas">R$60 x 5 horas</p>
                                <p id="total-valor-reserva">R$300</p>
                        </div>
                        <Button1 text="Realizar reservar" link="/finalizaReserva"/>
                        
                    </div>
                    
                </section>
            </main>

            <footer id="Footer"><Footer /></footer>
        </>
    )
}

export default Anuncio