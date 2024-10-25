import "./footer.css"

function Footer (){
    return(
        <>
            <hr />
            <section class="footer_cotent">
                
                <div class="footer-cotent-left">
                    <p>© 2024 HealthSpace, Inc.</p>
                    <ul>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Termos</a></li>
                    </ul>
                </div>

                <div class="footer-cotent-right">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                </div>

            </section>
        </>
    )
}

export default Footer