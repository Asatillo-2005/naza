import "./footer.scss"
import { NavLink as Link } from "react-router-dom"

import footer1 from "../../assets/svg/header-logo.svg"
import footer2 from "../../assets/svg/footer-lang.svg"
import footer3 from "../../assets/svg/footer-web.svg"

function Footer() {
    return (

        <section className="section-footer">
            <div className="container">
                <div className="footer-box">
                    <div className="footer-content">
                        <img src={footer1} alt="error" />
                        <div className="footer-content-items">
                            <div className="footer-content-items-things">
                                <div className="footer-content-items-things-item">
                                    <span className="footer-content-items-things-item-pages">Избранное</span>
                                    <Link to={"/bin"}>
                                    <span className="footer-content-items-things-item-pages">Корзина</span>
                                    </Link>
                                    <span className="footer-content-items-things-item-pages">Контакты</span>
                                </div>
                                <div className="footer-content-items-things-item2">
                                    <span className="footer-content-items-things-item2-servic">Условия сервиса</span>
                                    <div className="footer-content-items-things-item2-launguage">
                                        <img src={footer2} alt="error" />
                                        <span className="footer-content-items-things-item2-launguage-text">Рус</span>
                                        <span className="footer-content-items-things-item2-launguage-text">Eng</span>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-content-items-websites">
                                <img src={footer3} alt="error" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer