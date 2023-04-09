import React from 'react'
import "./Mktartibi.css"
function Mktartibi() {
  return (
    <div className='mktartibi'>
        <div className="mktartibi__container">
            <div className="mktartibi__box">
                <div className="mktartibi__box__quti">
                    <div className="mktartib__img">
                        <img src="https://32maktab.uz/pages/assets/images/icons/teacher.png" alt="" />
                    </div>
                    <h1>O'qituvchilar</h1>
                    <button>49</button>
                </div>
            </div>
            <div className="mktartibi__box">
                <div className="mktartibi__box__quti">
                    <div className="mktartib__img">
                        <img src="https://32maktab.uz/pages/assets/images/icons/career.png" alt="" />

                    </div>
                    <h1>O'quvchilar</h1>
                    <button>691</button>
                </div>
            </div>
            <div className="mktartibi__box">
                <div className="mktartibi__box__quti">
                    <div className="mktartib__img">
                    <img src="https://32maktab.uz/pages/assets/images/icons/classroom.png" alt="" />
                    </div>
                    <h1>Sinf xona</h1>
                    <button>40</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Mktartibi