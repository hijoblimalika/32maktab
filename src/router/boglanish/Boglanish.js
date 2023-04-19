import React from 'react'
import "./Boglanish.css"
import boglanish from "../../assets/boglanish.jpg"
function Boglanish() {
  return (
    <div className='boglanish'> 
    <div className="boglanish__img">
      <img src={boglanish} alt="" />
    </div>
            <div className="boglanish__container">
              <div className="boglanish__box">
                <br />
                <br />
                  <p>+998(91)344-00-31</p>
                      <br />
                  <p>info@namangan32maktab.com</p>

                  <h1>Namangan viloyati. Namangan shahar Yangi yo'l MFY, 7-Temir yo'l ko'cha</h1>
                        <br />
                        <br />
                        <br />
                  <h2>Dushanba-Shanba 7:00 - 17:00</h2>
                  <h3>Yakshanba: Dam olish</h3>
              </div>
            </div>
    </div>
  )
}

export default Boglanish