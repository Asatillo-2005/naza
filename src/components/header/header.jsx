import "./header.scss"
import { useEffect, useState, useRef } from "react"
import { language } from "../../localization/localization"
import { NavLink as Link } from "react-router-dom"

import header1 from "../../assets/svg/header-logo.svg"
import header2 from "../../assets/svg/header-phone.svg"
import header3 from "../../assets/svg/header-heart.svg"
import header4 from "../../assets/svg/header-bin.svg"
import header5 from "../../assets/svg/header-vector.svg"
import { memo } from "react"


function Header({lang,change}) {

    const [bin, setBin] = useState()

    useEffect(() => {
        fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phonee")
            .then((res) => res.json())
            .then((data) =>{
                setBin(data.length)
            })
    },[change])

    return (
        <section className="section-header">
            <div className="container">
                <div className="header-box">
                    <header className="header-items">
                        <div className="header-items-item">
                            <Link to={"/"}><img src={header1} alt="error" /></Link>
                            <div className="header-menu">
                                <img src={header2} alt="error" />
                                <p className="header-menu-text">
                                    {language[lang].header.p}
                                    <img src={header5} alt="error" />
                                </p>
                            </div>
                        </div>
                        <div className="header-items-item2">
                            <img src={header3} alt="error" />
                            <Link to={"/bin"}>
                                <img src={header4} alt="error" />
                                <span className="bin-value">{bin}</span>
                            </Link>
                        </div>
                    </header>
                </div>
            </div>
        </section>
    )
}

export default memo(Header)