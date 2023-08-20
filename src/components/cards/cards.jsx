import "./cards.scss"

import cards1 from "../../assets/img/cards-img1.png"
import cards2 from "../../assets/img/cards-img2.png"
import cards3 from "../../assets/img/cards-img3.png"


function Cards(){
    return(
        <section className="section-cards">
            <div className="container">
                <div className="cards-box">
                 <div className="cards-contentn">
                    <h4 className="cards-title">Чехлы</h4>
                    <div className="cards-content-items">
                        <img src={cards1} alt="error" />
                        <p className="cards-content-item-name">Стеклянные</p>
                    </div>
                    <div className="cards-content-items">
                        <img src={cards2} alt="error" />
                        <p className="cards-content-item-name">Силиконовые</p>
                    </div>
                    <div className="cards-content-items">
                        <img src={cards3} alt="error" />
                        <p className="cards-content-item-name">Кожаные</p>
                    </div>
                 </div>
                </div>
            </div>
        </section>
    )
}

export default Cards