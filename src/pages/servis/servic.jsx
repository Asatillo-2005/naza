import "./servic.scss"
import { NavLink as Link, useParams } from "react-router-dom"
import { language } from "../../localization/localization"

import servic1 from "../../assets/img/cost-servis.png"
import servic2 from "../../assets/svg/servis-vector.svg"
import servic3 from "../../assets/svg/servis-cod.svg"
import servic4 from "../../assets/svg/servis-visa.svg"

function Servic({lang}) {

    return (
        <section className="section-servic">
            <div className="container">
                <div className="servic-box">
                    <div className="servic-container">
                        <div className="servic-container-item1">
                            <div className="servic-container-item1-iframe">
                                <div className="servic-container-item1-iframe-cost"><h3 className="servic-container-item1-iframe-cost-name">{language[lang].sevic.courier}</h3>  <span className="servic-container-item1-iframe-cost-all">499 ₸</span> </div>
                                <img src={servic1} alt="error" />
                            </div>
                            <div className="servic-container-item1-inputs">
                                <div className="servic-container-item1-inputs-adres"><img src={servic2} alt="error" /> <p className="servic-container-item1-inputs-adres-name">{language[lang].sevic.address}</p> </div>
                                <form className="servic-container-item1-inputs-items">
                                    <div className="servic-container-item1-inputs-items-shose" vocab="Город">weee</div>
                                    <input className="servic-container-item1-inputs-items-shose" type="text" placeholder={language[lang].sevic.street} />
                                    <div className="servic-container-item1-inputs-items-input">
                                        <input className="servic-container-item1-inputs-items-input-home" type="text" placeholder={language[lang].sevic.house} />
                                        <input className="servic-container-item1-inputs-items-input-home" type="text" placeholder={language[lang].sevic.approach} />
                                    </div>
                                    <input className="servic-container-item1-inputs-items-kvatira" type="text" placeholder={language[lang].sevic.apartment} />
                                </form>
                            </div>
                        </div>
                        <div className="servic-container-item2">
                            <div className="servic-container-item2-div">
                                <div className="servic-container-item2-items1">
                                    <h4 className="servic-container-item2-items1-title">{language[lang].sevic.yorder}</h4>
                                    <div className="servic-container-item2-items1-text">
                                        <div className="servic-container-item2-items1-text-div">
                                            <p className="servic-container-item2-items1-text1">{language[lang].sevic.headphone} Apple BYZ S852I</p>
                                            <span className="servic-container-item2-items1-text11-span">₸ 2 927</span>
                                        </div>
                                        <div className="servic-container-item2-items1-text-div">
                                            <p className="servic-container-item2-items1-text1">{language[lang].sevic.delivery}</p>
                                            <span className="servic-container-item2-items1-text11-span">₸ 2 927</span>
                                        </div>
                                        <div className="servic-container-item2-items1-text-div">
                                            <p className="servic-container-item2-items1-text1">{language[lang].sevic.paid}</p>
                                            <span className="servic-container-item2-items1-text11-span">₸ 2 927</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="servic-container-item2-items2">
                                    <h4 className="servic-container-item2-items2-title">{language.ru.sevic.pmethod}</h4>
                                    <div className="servic-container-item2-items2-cards"><img src={servic4} alt="error" /> <p className="servic-container-item2-items2-cards-name">{language[lang].sevic.invoicefor} kaspi.kz</p> </div>
                                    <div className="servic-container-item2-items2-cards-input"><img src={servic3} alt="error" /> <input className="servic-container-item2-items2-cards-input21" type="text" placeholder={language[lang].sevic.code} /></div>
                                </div>
                            </div>
                            <div className="servic-container-item2-items3">
                                <div className="servic-container-item2-items3-div">
                                    <h3 className="servic-container-item2-items3-title">{language[lang].sevic.number}</h3>
                                    <input className="servic-container-item2-items3-input" type="text" placeholder="+7 ___ ___ __ __" />
                                </div>
                                <Link to={"/done"}>
                                    <button className="servic-container-item2-btn">{language[lang].sevic.finish}</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servic