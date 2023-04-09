import React from 'react'
import "./Elektrondarslik.css"
import sinf1 from  "../../assets/1sinf.mp4"
import sinf2 from  "../../assets/2sinf.mp4"
import sinf3 from  "../../assets/3sinf.mp4"
import sinf4 from  "../../assets/4sinf.mp4"
import sinf5 from  "../../assets/5sinf.mp4"
import sinf6 from  "../../assets/6sinf.mp4"
import sinf7 from  "../../assets/7sinf.mp4"
import sinf8 from  "../../assets/8sinf.mp4"
import sinf9 from  "../../assets/9sinf.mp4"
import sinf10 from  "../../assets/10sinf.mp4"
import sinf11 from  "../../assets/11sinf.mp4"
function Elektrondarslik() {
  return (
    <div className='elektron'>
        <div className="elektron__container">
            <div className="elektron__box">
                <video src={sinf1}controls></video>
             

                <p>1-sinflar uchun</p>
            </div>
            <div className="elektron__box">
                <video src={sinf2}controls></video>
                <p>2-sinflar uchun</p>
            </div>
            <div className="elektron__box">
                <video src={sinf3}controls></video>
            <p>3-sinflar uchun</p>
            </div>
           
        </div>
        <div className="elektron__container">
            <div className="elektron__box">
                <video src={sinf4}controls></video>
            <p>4-sinflar uchun</p>
            </div>
            <div className="elektron__box">
                <video src={sinf5}controls></video>
            <p>5-sinflar uchun</p>
            </div>
            <div className="elektron__box">
                <video src={sinf6}controls></video>
                <p>6-sinflar uchun</p>
            </div>
           
        </div>
        <div className="elektron__container">
            <div className="elektron__box">
                <video src={sinf7}controls></video>
                <p>7-sinflar uchun</p>
            </div>
            <div className="elektron__box">
                <video src={sinf8}controls></video>
                <p>8-sinflar uchun</p>
            </div>
            <div className="elektron__box">
                <video src={sinf9}controls></video>
                <p>9-sinflar uchun</p>
            </div>
           
        </div>
        <div className="elektron__container">
            <div className="elektron__box">
                <video src={sinf10}controls></video>
                <p>10-sinflar uchun</p>
            </div>
            <div className="elektron__box">
                <video src={sinf11}controls></video>
                <p>11-sinflar uchun</p>
            </div>
          
           
        </div>
    </div>
  )
}

export default Elektrondarslik