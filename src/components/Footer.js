import React from "react"
import "./Footer.css"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="Footer">
                    <div className="Footer_left">
                        <img src="https://ineuron.ai/images/ineuron-logo-white.png" alt="..." />
                        <hr style={{ width: '70%', backgroundColor: 'orange', height: '2px', }} />
                        <h2 style={{ color: 'white' }}>Address</h2>
                        <p style={{ color: 'white' }}>17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli, Bengaluru, Karnataka 562129.</p>
                        <h2 style={{ color: 'white' }}>E-Mail</h2>
                        <p style={{ color: 'white' }}>Email us: contact@ineuron.ai</p>

                        <img src="https://ineuron.ai/images/iso-9001-2015.svg" alt="..." />
                        <p className="Para">ISO 9001</p>

                    </div>
                    <div className="Footer_Middle">
                        <h2 style={{ color: 'white' }}>Company</h2>
                        <hr style={{ width: '50%', backgroundColor: 'orange', height: '2px', }} />
                        <div className="doo">
                            <ul className="Footer_ul">
                                <li style={{ color: 'white', padding: '5px' }}>About us</li>
                                <li style={{ color: 'white', padding: '5px' }}>Community</li>
                                <li style={{ color: 'white', padding: '5px' }}>Contact us</li>
                                <li style={{ color: 'white', padding: '5px' }}>Job guarantee</li>
                                <li style={{ color: 'white', padding: '5px' }}>Job assistance</li>
                            </ul>

                            <ul>
                                <li style={{ color: 'white', padding: '5px' }}>FAQ's</li>
                                <li style={{ color: 'white', padding: '5px' }}>Hack-A-Thon</li>
                                <li style={{ color: 'white', padding: '5px' }}>Privacy policy</li>
                                <li style={{ color: 'white', padding: '5px' }}>Terms and conditions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer_right">

                        <h2 style={{ color: 'white' }}>Products</h2>
                        <hr style={{ width: '50%', backgroundColor: 'orange', height: '2px', }} />

                        <ul>
                            <li style={{ color: 'white', padding: '5px' }}> Neuro Lab</li>
                            <li style={{ color: 'white', padding: '5px' }}>Job Portal</li>
                            <li style={{ color: 'white', padding: '5px' }}>Internship portal</li>
                            <li style={{ color: 'white', padding: '5px' }}>Become an affiliate</li>
                            <li style={{ color: 'white', padding: '5px' }}>Hall of fame</li>

                        </ul>






                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer 