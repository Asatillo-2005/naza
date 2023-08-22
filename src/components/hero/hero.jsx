import "./hero.scss"

import hero1 from "../../assets/img/hero-phone.png"
import hero2 from "../../assets/svg/hero-phone-text.svg"


function Hero() {
    return (
        <section className="section-hero">
            <div className="container">
                <div className="hero-box">
                    <div className="imges-div"><img src={hero2} alt="error" /> <img className="hero2" src={hero1} alt="error" /></div>
                </div>
            </div>
        </section>
    )
}

export default Hero