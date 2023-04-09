import React from 'react'
import "./Maktabimizhaqida.css"
import mk from "../../assets/maktab32.jpg"

function Maktabimizhaqida() {
  return (
    <div className='maktabimizhaqida__1'>
      <div className="maktabimizhaqida__container">
        <div className="maktabimizhaqida__box">
              <img src={mk} alt="" />
        </div>
        <div className="maktabimizhaqida__box">
          <div className="mkhaqda__box__text">

          <h1>Bizning 32-maktabimiz haqida qisqacha ma'lumot</h1>
          <p>32-maktabning boshqalarga asosiy foydali tomonlari</p>
          <br />
          <b>Barcha o'qituvchilarning ilmiy darajasi yuqori.</b>
          <br />
          <br />
          <b>Maktabda hamma shart-sharoitlar yaratilgan .</b>
          <br />
          <br />
          <b>Tibbiy yordam, xavfsizlik va boshqa chora tadbirlar hisobga olingan.</b>
          <p>Biz ishonnamizki bu maktabda tahsil olgan inson afsuslanmaydi, Maktab maqsadi bolalarni savodsizlikdan xalos etish, chin ko'ngildan bolalarga ta'lim-tarbiya berishdan iboratdir.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maktabimizhaqida