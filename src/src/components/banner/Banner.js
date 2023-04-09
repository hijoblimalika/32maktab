import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
 import teva01 from "../../assets/teva01.jpg"
 import teva02 from "../../assets/teva02.jpg"
 import teva03 from "../../assets/teva03.jpg"
 import teva04 from "../../assets/teva04.jpg"
 import teva05 from "../../assets/teva05.jpg"
 import teva06 from "../../assets/teva06.jpg"
 import teva07 from "../../assets/teva07.jpg"
 import teva08 from "../../assets/teva08.jpg"
 import teva09 from "../../assets/teva09.jpg"
 import teva10 from "../../assets/teva10.jpg"
 import teva11 from "../../assets/teva11.jpg"
 import teva12 from "../../assets/teva12.jpg"
 import teva13 from "../../assets/teva13.jpg"
 import teva14 from "../../assets/teva14.jpg" 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
       <SwiperSlide>
<img src={teva04} alt="" />
</SwiperSlide>
<SwiperSlide> 
<img src={teva09} alt="" />
</SwiperSlide>
<SwiperSlide>
<img src={teva08} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva01} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva05} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva06} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva07} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva01} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva02} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva10} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva11} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva12} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva13} alt="" />

</SwiperSlide>
<SwiperSlide>
<img src={teva14} alt="" />

</SwiperSlide>
    </Swiper>
  </>
  )
}

