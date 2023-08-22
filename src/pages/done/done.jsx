import "./done.scss"
import { useRef,useState,useEffect } from "react"
import { language } from "../../localization/localization"


function Done({lang}) {

    const elDone = useRef()

    useEffect(()=>{
        elDone.current.style.top = "30%"
    },[])

    return (
        <section className="section-done">
            <div className="container">
                <div className="done-box">
                    <div className="done-content" ref={elDone}>
                        <p className="done-content-text">
                         {language[lang].done.number1} №123123, {language[lang].done.number2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Done