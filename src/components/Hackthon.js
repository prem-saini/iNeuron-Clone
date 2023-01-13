import image from "../Image/image.png"
import image2 from '../Image/image2.png'
import image3 from "../Image/image3.png"
import image4 from '../Image/image4.png'
import image5 from "../Image/image5.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";

function Hackthon() {
    return (
        <>
            <div className="Hackthon">
                <h1 style={{ color: 'blue', padding: '40px' }}>Hackathon's We Conducted</h1>

            </div>
            <div className="hackthon" style={{ padding: '0px' }}>


                <Swiper
                    pagination={{
                        dynamicBullets: true

                    }}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000

                    }}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={image} alt='...' /> </SwiperSlide>
                    <SwiperSlide> <img src={image2} alt='...' /> </SwiperSlide>
                    <SwiperSlide> <img src={image3} alt='...' /> </SwiperSlide>
                    <SwiperSlide> <img src={image4} alt='...' /> </SwiperSlide>
                    <SwiperSlide><img src={image5} alt="..." /></SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}
export default Hackthon