import "./buy.scss"
import { useState, useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink as Link } from "react-router-dom"

import buy1 from "../../assets/svg/buy-bus.svg"
import buy2 from "../../assets/svg/buy-vector.svg"
import buy3 from "../../assets/img/buy-i.png"
import buy4 from "../../assets/svg/bin-bin.svg"
import buy5 from "../../assets/img/hero-phone.png"

function Buy() {

    const [dara, setDara] = useState([])
    const { buyId } = useParams()
    const [value2, setValue] = useState(1)
    const [value3, setValue3] = useState()

    function onPlas() {
        setValue(value2 + 1)
        setValue3(Number(value3) + Number(value3))
    }
    function onMinus() {
        if (value2 == 0) {
            console.log('error');
        }
        else {
            setValue(value2 - 1)
        }
        if (Number(value3) === Number(dara.quality)) {
            console.log("t");
        }
        else {
            setValue3(Number(value3) - Number(dara.quality))
        }
    }


    useEffect(() => {
        fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phonee/${buyId}`)
            .then((res) => res.json())
            .then((data) => {
                setDara(data.givedata)
                setValue3(data.givedata.quality)
            })
    }, [])


    return (
        <section className="section-buy">
            <div className="container">
                <div className="buy-box">
                    <div className="buy-content">
                        <div className="buy-content-item1">
                            <div className="buy-content-item1-items1">
                                <div className="buy-content-items1-item1">
                                    <img src={dara.img} alt="error" width={"146px"} height={"136px"} />
                                    <div className="buy-content-items-about">
                                        <div className="buy-content-items-about-name">{dara.name}</div>
                                        <div className="buy-content-items-about-cost11">{dara.quality}</div>
                                    </div>
                                </div>
                                <div className="buy-content-items1-item2">
                                    <div className="buy-content-items-item2-acor">
                                        <button className="buy-content-items-item2-acor-btn-plas" onClick={onPlas}>+</button>
                                        <div className="buy-content-items-item2-acor-btn-value">{value2}</div>
                                        <button className="buy-content-items-item2-acor-btn-plas" onClick={onMinus}>-</button>
                                    </div>
                                    <div className="buy-content-items-about-cost">{dara.quality}</div>
                                </div>
                            </div>
                            <div className="buy-content-item1-items2">
                                <h3 className="buy-content-item1-items2-title">Доставка</h3>
                                <img src={buy3} alt="error" width={"584px"} height={"173px"} />
                                <div className="buy-content-item1-items2-servis">
                                    <p className="buy-content-item1-items2-servis-bring"> <span className="buy-content-item1-items2-servis-bring-span"><img src={buy1} alt="error" />Доставка курьером</span> <img src={buy2} alt="error" /></p>
                                    <div className="buy-content-item1-items2-servis-cost">499</div>
                                </div>
                            </div>
                        </div>
                        <div className="buy-content-item2">
                            <div className="buy-content-item2-all">ИТОГО <span className="buy-content-item2-all-cost">{value3}</span></div>
                            <Link to={'/servic'}>
                                <button className="buy-content-item2-all-btn">Перейти к оформлению</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Buy