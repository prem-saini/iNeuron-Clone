import React from "react"
import "./Hallofram.css"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "../Data"
// import anil from "../Image/anil.jpeg"

function Hallofram() {
    return (
        <>
            {/* <Carousel> */}
            <div className="hall">
                <h1>Hall Of Fram</h1>
            </div>

            <div className="cardd">
                {
                    Data.map((value) => {
                        return (
                            <>
                                <div className="card">
                                    <div className="cart">

                                        <img src={value.image} alt="..." />

                                        <div className="wwe">
                                            <span className="map_text">{value.Name}</span><br />
                                            <span className="map_role">{value.role}</span> <br />
                                            <p className="map_des">{value.des}</p>
                                        </div>

                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>


            {/* </Carousel> */}

        </>
    )
}

export default Hallofram