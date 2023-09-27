import "./cards-item.scss"
import { useRef, useState, useEffect } from "react"
import { NavLink as Link } from "react-router-dom"

import cardsitem1 from "../../assets/svg/cards-item-star.svg"
import Heart from "../../assets/heart.jsx"

function Cardsitem() {

    const [data, setData] = useState([])
    const [color, setColor] = useState("black")
    const [give , setGive] = useState()
    const API = "https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone"

    async function onFetch() {
        const res = await fetch(API)
        const data = await res.json()
        setData(data)
    }

    useEffect(() => {
        onFetch()
    }, [])


    useEffect(()=>{
        data.map((item,index)=>{setGive(item.id)})
    },[onColor])


    function onColor(id){
        if(id == data.id){
            setColor('red')
        }
        else{
            console.log("false");
        }
    }





    return (
        <section className="section-cards-item" >
            <div className="container">
                <div className="cards-item-box">
                    <div className="cards-item-content">
                        <h4 className="cards-item-content-title">Наушники</h4>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="cards-item-content-items" key={item.id} >
                                        <div className="cards-item-content-items-heart" onClick={()=>{
                                            onColor(index)
                                            }} ><Heart item={color} /></div>
                                        <Link to={`cards_inner/${item.id}`} key={item.id}>
                                            <img src={item.img} alt="error" width={"219.608px"} height={"237.451px"} />
                                            <div className="cards-item-content-items-about">
                                                <div className="cards-item-content-items-about-nc">
                                                    <p className="cards-item-content-items-about-nc-name">{item.name}</p>
                                                    <span className="cards-item-content-items-about-nc-cost">{item.quality} ₸</span>
                                                </div>
                                                <div className="cards-item-content-items-about-rating"><img src={cardsitem1} alt="error" />{item.rating}</div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cardsitem