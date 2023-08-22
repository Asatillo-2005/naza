import "./contacts.scss"
import { language } from "../../localization/localization"

import con1 from "../../assets/img/contac-img1.png"
import con2 from "../..//assets/svg/con-adrres.svg"
import con4 from "../../assets/svg/con-whatsapp.svg"
import con5 from "../../assets/svg/con-vk.svg"
import con6 from "../../assets/svg/con-instagram.svg"
import con7 from "../../assets/svg/con-telegram.svg"
import con8 from "../../assets/svg/con-phone.svg"


function Contacts({lang}) {
    return (
        <section className="section-contacts">
            <div className="container">
                <div className="contacts-box">
                    <div className="contacts-content">
                        <div className="contacts-content-item1">
                            <div className="contacts-content-item1-div">
                                <h3 className="contacts-content-item1-title">{language[lang].contacts.office}</h3>
                                <img src={con1} alt="error" width={"722px"} height={"424px"} />
                                <div className="contacts-content-item1-adrres">
                                    <img src={con2} alt="error" />
                                    <div className="contacts-content-item1-adrres-texts">
                                        <p className="contacts-content-item1-adrres-texts1">Аксай-3а, 62ф, Алматы, Казахстан</p>
                                        <p className="contacts-content-item1-adrres-texts2">{language[lang].contacts.floor}</p>
                                    </div>
                                </div>
                            </div>
                          <div className="contacts-content-item1-img-div">
                            <img src={con8} alt="error" />
                            <h2 className="contacts-content-item1-number">+7 777 777 77 77</h2>
                          </div>
                        </div>
                        <div className="contacts-content-item2">
                            <img src={con4} alt="errro" width={"97px"} height={"97px"} />
                            <img src={con5} alt="errro" width={"97px"} height={"97px"} />
                            <img src={con6} alt="errro" width={"97px"} height={"97px"} />
                            <img src={con7} alt="errro" width={"97px"} height={"97px"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts