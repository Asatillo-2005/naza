import { useEffect, useState, useRef, createContext } from "react";
import {NavLink as Link, useParams} from "react-router-dom"
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Toast } from 'primereact/toast';
import { language } from "../../localization/localization";
import React from 'react';
import axios from "axios";
import "./cards_inner.scss"

import cards_inner3 from "../../assets/img/cards_inner-11.png"
import cards_inner4 from "../../assets/svg/cards_inner-bin.svg"
import Heart from "../../assets/heart.jsx";

function Cards_inner({lang,setChange}) {

    const toast = useRef(null)
    const [getdata, setGetdata] = useState([])
    const { cardsId } = useParams()
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success',  life: 2000 });
    }
    
    useEffect(() => {
        fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone/${cardsId}`)
            .then((res) => res.json())
            .then((data) => setGetdata(data))
    }, [])

    function onPush(givedata) {
        setChange(true)
        axios.post(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phonee`, {
            givedata
        }).then((res) => {
            showSuccess()
            setChange(false)
        })
    }

    return (
        <section className="section-cards_inner">
            <div className="container">
                <div className="cards_inner-box">
                    <Toast ref={toast} />
                    <div className="cards_inner-content">
                        <div className="cards_inner-content-item">
                            <span className="cards_inner-content-item-heart"><Heart /></span>
                            <span className="cards_inner-content-item-lonio"><img src={cards_inner3} alt="error" /></span>
                            <div className="cards_inner-content-item-bg-imgs">
                                <img src={getdata.bg1} alt="error" />
                            </div>
                            <div className="cards_inner-content-item-about">
                                <p className="cards_inner-content-item-about-name">{getdata.name}</p>
                                <span className="cards_inner-content-item-about-cost">{getdata.quality} ₸</span>
                            </div>
                        </div>
                        <div className="cards_inner-content-item2">
                            <div className="cards_inner-content-item2-options">
                                <Accordion activeIndex={0}>
                                    <AccordionTab header={language[lang].inner.description}>
                                        <div className="m-0">
                                            <p className="cards_inner-content-item2-options">Активное шумоподавление: Нет</p>
                                            <p className="cards_inner-content-item2-options">Вес: 10 гр</p>
                                            <p className="cards_inner-content-item2-options">Влагозащита: Нет</p>
                                            <p className="cards_inner-content-item2-options">Длина кабеля: 1.2 м</p>
                                            <p className="cards_inner-content-item2-options">Комплектация: Наушники</p>
                                            <p className="cards_inner-content-item2-options">Материал корпуса: Пластик, резина</p>
                                            <p className="cards_inner-content-item2-options">Микрофон: Да</p>
                                            <p className="cards_inner-content-item2-options">Назначение: Проводные наушники</p>
                                            <p className="cards_inner-content-item2-options">Ответить/закончить разговор: Да</p>
                                            <p className="cards_inner-content-item2-options">Разъем наушников: Lightning</p>
                                            <p className="cards_inner-content-item2-options">Регулятор громкости: Да</p>
                                            <p className="cards_inner-content-item2-options">Тип крепления: Без крепления</p>
                                            <p className="cards_inner-content-item2-options">Тип наушников: Вкладыши ("таблетки")</p>
                                            <p className="cards_inner-content-item2-options">Тип подключения: Проводное</p>
                                            <p className="cards_inner-content-item2-options">Частотный диапазон: 20 Гц - 20000 Гц</p>
                                            <p className="cards_inner-content-item2-options">Чувствительность: 109 дБ</p>
                                        </div>
                                    </AccordionTab>
                                </Accordion>
                            </div>
                            <div className="cards_inner-content-item2-buy">
                                <Link to={`/buy/${getdata.id}`} >
                                <button className="cards_inner-content-item2-buy1">{language[lang].inner.buy}</button>
                                </Link>
                                <button className="cards_inner-content-item2-bin" onClick={() => {
                                    onPush(getdata)
                                }}><img src={cards_inner4} alt="error" />{language[lang].inner.add}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards_inner