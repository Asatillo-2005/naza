import { useEffect, useState, useMemo, useRef, memo } from "react"
import { NavLink as Link, useParams } from "react-router-dom"
import { Toast } from 'primereact/toast'
import { language } from "../../localization/localization"
import axios from "axios"
import "./bin.scss"


import bin3 from "../../assets/svg/bin-bin.svg"
import bin1 from "../../assets/img/bin-bin1.png"

function Bin({ lang, setChange }) {

    const elModal = useRef()
    const toast = useRef(null)
    const [data1, setData] = useState([])
    const [loading, setLoading] = useState()
    const [value, setValue] = useState(1)
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'DELET', life: 2000 })
    }

    useEffect(() => {
        fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phonee")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [loading])

    function onDelet(id) {
        setLoading(true)
        setChange(true)
        axios.delete(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phonee/${id}`)
            .then((res) => {
                setLoading(false)
                setChange(false)
                showSuccess()
            })
    }

    function onPlas() {
        setValue(value + 1)
    }
    function onMinus() {
        if (value == 1) {
            console.log("false");
        }
        else {
            setValue(value - 1)
        }
    }


    if (data1.length == 0) {
        return (
            <section className="section-open">
                <div className="container">
                    <div className="open-box">
                        <div className="open-container">
                            <img src={bin1} alt="error" />
                            <div className="open-container-text">
                                <p className="open-container-text1">Корзина пуста</p>
                                <p className="open-container-text2">Но это никогда не поздно исправить</p>
                            </div>
                            <Link to={"/"}>
                            <button className="open-container-btn">
                                <p className="open-container-btn-text">В каталог товаров</p>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else {
        console.log("false");
        return (
            <section className="section-bin">
                <div className="container">
                    <div className="bin-box">
                        <Toast ref={toast} />
                        <div className="bin-box-content">
                            <div className="bin-content">
                                {
                                    data1.map((item, index) => {
                                        return (
                                            <div className="bin-content-items" key={item.id}>
                                                <div className="bin-content-items12">
                                                    <img className="delet" src={bin3} alt="error" onClick={() => onDelet(item.id)} />
                                                    <img src={item.givedata.img} alt="error" width={"146px"} height={"136px"} />
                                                    <div className="bin-content-items-about">
                                                        <div className="bin-content-items-about-name">{item.givedata.name}</div>
                                                        <div className="bin-content-items-about-cost">{item.givedata.quality} T</div>
                                                    </div>
                                                </div>
                                                <div className="bin-content-items13">
                                                    <div className="bin-content-items13-btns">
                                                        <button className="bin-content-items13-btns-plas" onClick={onPlas}>+</button>
                                                        <div className="bin-content-items13-btns-plas-value">{value}</div>
                                                        <button className="bin-content-items13-btns-plas" onClick={onMinus}>-</button>
                                                    </div>
                                                    <div className="bin-content-items13-values">1234₸</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="bin-content-total">
                                <div className="bin-content-total-text">
                                    <p className="bin-content-total-text1">{language[lang].buy.total}</p>
                                    <span className="bin-content-total-text-number">₸ 2 927</span>
                                </div>
                                <button className="bin-content-total-btn"><p className="bin-content-total-btn-text">{language[lang].buy.checkout}</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


}

export default Bin
