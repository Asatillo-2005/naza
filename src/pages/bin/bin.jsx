import "./bin.scss"
import axios from "axios"
import { useEffect, useState, useMemo, useRef } from "react"
import {NavLink as Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import { memo } from "react"
import { Toast } from 'primereact/toast'

import bin2 from "../../assets/img/hero-phone.png"
import bin3 from "../../assets/svg/bin-bin.svg"

function Bin() {

    const toast = useRef(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'DELET', life: 2000 })
    }
    useEffect(() => {
        fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phonee")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [loading])


    function onDelet(id) {
        setLoading(true)
        axios.delete(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phonee/${id}`)
            .then((res) => {
                setLoading(false)
                showSuccess()
            })
    }


    return (
        <section className="section-bin">
            <div className="container">
                <div className="bin-box">
                    <Toast ref={toast} />
                    <div className="bin-content">
                        {
                            data.map((item, index) => {
                                console.log(item.id);
                                return (
                                    <div className="bin-content-items" key={item.id}>
                                        <img className="delet" src={bin3} alt="error" onClick={() => onDelet(item.id)} />
                                        <Link to={`/buy/${item.id}`}>
                                        <img src={item.givedata.img} alt="error" width={"146px"} height={"136px"} />
                                        </Link>
                                        <div className="bin-content-items-about">
                                            <div className="bin-content-items-about-name">{item.givedata.name}</div>
                                            <div className="bin-content-items-about-cost">{item.givedata.quality} T</div>
                                        </div>
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

export default Bin
