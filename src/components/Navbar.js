import React from "react"
import "./Navbar.css"
import logo from "../Image/logo.png"
import first from "../Image/first.png"

function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="navbar">
                    <img src={logo} alt="..." style={{ width: '100px', height: '50px', padding: '5px' }} />
                </div>
                <div className="navbar_mid">
                    <span>

                        {/* <i><img src={search} alt="..." style={{ width: '15px', marginLeft: '10px' }} /></i> */}
                        <input type="text" placeholder="Search Here" className="search_input" /> </span>

                </div>
                <div className="navbar_right">
                    <button className="navbar_btn">Is Required</button>
                    <button className="navbar_btn">Login</button>
                </div>

            </div>
            <div className="Navbar_Middle">
                <ul className="navbar_ul">
                    <li>Courses</li>
                    <li>One Neuron</li>
                    <li>Neuro Lab</li>
                    <li>Job Portal</li>
                    <li>Intership Portal</li>
                    <li>Became an Affiliate</li>
                    <li>Hall of Fame</li>
                    <li>Company</li>

                </ul>
            </div>
            <div className="Navbar_last">

                <img src={first} alt="..." style={{ width: '100%' }} />

            </div>

        </>
    )
}

export default Navbar