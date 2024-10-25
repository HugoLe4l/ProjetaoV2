import "../pages/css/finalizaReserva.css"
import Button1 from "../components/Button1/button1"
import Header2 from "../components/Header2/header2"
import Footer from "../components/Footer/footer"
function FinalizarReserva() {
    return (
        <>
            <Header2/>
            <main>
                <div id="box_finalizar_reserva">
                    <section class="section_left_reserva">
                        <div class="tittle_reserva">
                            <i class="bi bi-chevron-left"></i>
                            <h3>Confirmar e pagar</h3>
                        </div>
                        
                        <div class="dados_reserva">
                            <h5>Sua reserva</h5>
                            <div class="box_infos_reserva">
                                <div class="left_box_reserva">
                                    <h6>Data</h6>
                                    <p>27 de Outubro</p>
                                </div>
                                <h4>Editar</h4>
                            </div>
                            <div class="box_infos_reserva">
                                <div class="left_box_reserva">
                                    <h6>Horário</h6>
                                    <p>10:00 até 15:00</p>
                                </div>
                                <h4>Editar</h4>
                            </div>
                            <hr id="hr" />
                        </div>

                    </section>

                    <section class="section_right_reserva">
                        <div class="card_reserva">
                            <div class="reserva_anuncio_dados">
                                <div class="image_reserva"></div>
                                <div class="info_reserva_detalhes">
                                    <h3>Sala de Fisioterapia 06</h3>
                                    <p>Visão Center</p>
                                    <div class="rating-box">
                                        <i class="bi bi-star-fill"></i>
                                        <p class="rating-info">4,80</p>
                                        <p>(240 Avaliações)</p>
                                    </div>
                                </div>
                            </div>
                            <hr id="hr" />
                            <h6>Informações de preço</h6>
                            <div>
                                <div class="row_info_reserva">
                                    <p>R$60,00 x 5 horas</p>
                                    <p>R$300,00</p>
                                </div>
                                <div class="row_info_reserva">
                                    <p>Taxa extra</p>
                                    <p>R$00,00</p>
                                </div>

                            </div>
                            <hr id="hr" />
                            <div class="row_info_reserva">
                                <h6>Total (BRL)</h6>
                                <h6>R$300,00</h6>
                            </div>

                        </div>
                    </section>
                </div>

                <div id="box_button">
                    <Button1 text="Concluir reserva" link="/*"/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default FinalizarReserva