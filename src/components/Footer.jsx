import logon from '../image/logon.png';
function Footer(){
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><img src={logon} alt='logo'/><span>SHIFAS </span>MEHENDI</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">SHOP HENA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">HENNA CLASSES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">BOOK APPOINMENT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i>+94775591150</p>
                            <p><i class="fa-solid fa-envelope"></i> shifasmehendhi@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Colombo, Sri Lank</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Last-footer" >© 2023 Copyright:<p>Developed and maintained by <a href="/" target="_blank">IIT_TEAM_14</a></p>
            </div>
            
            
        </>
    )
}
export default Footer;