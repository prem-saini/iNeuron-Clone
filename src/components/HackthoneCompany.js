import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

function HackthoneCompany() {
    return (
        <>
            <div className="Name_Company">
                <h1 style={{ color: 'blue' }}>Hackathon Companies</h1>

                <div
                    className="Hack"
                    style={{ height: "100px", backgroundColor: "#e2e2", padding: '60px' }}
                >


                    <Swiper
                        spaceBetween={40}
                        slidesPerView={4}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2000
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {" "}
                            <img
                                src={
                                    "https://ineuron.ai/images/landing-page/hackathon/jetbrains.png"
                                }
                                alt="..."
                            />{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <img
                                src={
                                    "https://ineuron.ai/images/landing-page/hackathon/nvidia.png"
                                }
                                alt="..."
                            />{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <img
                                src={"https://ineuron.ai/images/landing-page/hackathon/redis.png"}
                                alt="..."
                            />{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <img
                                src={
                                    " https://ineuron.ai/images/landing-page/hackathon/geekyants.png"
                                }
                                alt="..."
                            />{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <img
                                src={
                                    "https://ineuron.ai/images/landing-page/hackathon/github.png"
                                }
                                alt="..."
                            />{" "}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default HackthoneCompany;
