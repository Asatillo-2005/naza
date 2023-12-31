import "./footer.scss"
import { NavLink as Link } from "react-router-dom"
import { language } from "../../localization/localization"
import { useState , useRef } from "react"

import footer1 from "../../assets/svg/header-logo.svg"
import footer2 from "../../assets/svg/footer-lang.svg"
import footer3 from "../../assets/svg/footer-web.svg"

function Footer({ lang, setLang }) {

    const elColor = useRef()
    const elColor2 = useRef()


    return (
        <section className="section-footer">
            <div className="container">
                <div className="footer-box">
                    <div className="footer-content">
                        <Link to={"/"}>
                        <img src={footer1} alt="error" />
                        </Link>
                        <div className="footer-content-items">
                            <div className="footer-content-items-things">
                                <div className="footer-content-items-things-item">
                                    <span className="footer-content-items-things-item-pages">{language[lang].footer.favorite}</span>
                                    <Link to={"/bin"}>
                                        <span className="footer-content-items-things-item-pages">{language[lang].footer.basket}</span>
                                    </Link>
                                    <Link to={"/contacts"}>
                                    <span className="footer-content-items-things-item-pages">{language[lang].footer.contacts}</span>
                                    </Link>
                                </div>
                                <div className="footer-content-items-things-item2">
                                    <span className="footer-content-items-things-item2-servic">{language[lang].footer.service}</span>
                                    <div className="footer-content-items-things-item2-launguage">
                                        <img src={footer2} alt="error" />
                                        <div className="footer-content-items-things-item2-launguage-text" ref={elColor} onClick={() => {  
                                        setLang("ru")
                                        elColor.current.style.color = "#FFA542"
                                        elColor2.current.style.color = "black"
                                     }}>Рус</div>
                                        <div className="footer-content-items-things-item2-launguage-text" ref={elColor2} onClick={() => { 
                                            setLang("en") 
                                            elColor2.current.style.color = "#FFA542"
                                            elColor.current.style.color = "black"
                                            }}>Eng</div>
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