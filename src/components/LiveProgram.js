import React from "react"
import Live from "../Live"
import "./LiveProgram.css"
function LiveProgram() {
    return (
        <>
            <div className="Live">
                <h1>Live Program</h1>
                <p>Get your program with live "instructor led" learning.</p>
            </div>

            <div className="live">
                {
                    Live.map((val) => {
                        return (
                            <>
                                <div className="Live_Card">
                                    <div className="Live_card">

                                        <img src={val.image} alt="..." className="Live_img" />
                                        <div className="Live_text">
                                            <span className="map_text">{val.CouresName}</span><br />
                                            <span className="map_text">{val.Author}</span><br />
                                            <p className="map_text">{val.Price}</p>
                                        </div>
                                    </div>


                                </div>

                            </>
                        )
                    })
                }


            </div>

        </>
    )
}

export default LiveProgram