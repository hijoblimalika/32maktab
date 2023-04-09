import React from 'react'
import "./Yangiliklar.css"
import navruz from "../../assets/mart8.jpg"
import navruz2 from "../../assets/mart21.jpg"

import {FcCalendar} from "react-icons/fc"
function Yangiliklar() {
  return (
    <div className='yangiliklar'>
            <h1 className='yangiliklar__logo'>Yangiliklar</h1>
        <div className="yangiliklar__container">
            <div className="yangiliklar__box">
                <div className="yangiliklar__img">

                <img src={navruz2} alt="" />
                </div>
                <div className="yangiliklar__text">
                    <div className="yangiliklar__icon">

                        <FcCalendar/>
                        <p>21.03.2023</p>
                    </div>
                    <h1>Navruz bayrami</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus. Obcaecati magnam doloribus est reprehenderit quas in similique dignissimos officia molestiae, atque natus optio dolorum dolor tempora illo, id temporibus ipsum at alias officiis fugit! Recusandae reiciendis, quia </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus. Obcaecati magnam doloribus est reprehenderit quas in similique dignissimos officia molestiae, atque natus optio dolorum dolor tempora illo, id temporibus ipsum at alias officiis fugit! Recusandae reiciendis, quia </p>
                </div>
            </div>
            
            <br />

            <div className="yangiliklar__box">
                <div className="yangilikbox">

                <div className="yangiliklar__img">
                    <img src={navruz} alt="" />
                </div>
                <div className="yangiliklar__text">
            <div className="yangiliklar__icon">
            <FcCalendar/>
            <p>8.03.2023</p>
            </div>
                <h1>8- mart xalqaro xotin qizlar bayrami</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus. Obcaecati magnam doloribus est reprehenderit quas in similique dignissimos officia molestiae, atque natus optio dolorum dolor tempora illo, id temporibus ipsum at alias officiis fugit! Recusandae reiciendis, quia accusantium est dolor voluptatibus debitis sapiente odit ipsam molestiae eum vero </p>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Yangiliklar