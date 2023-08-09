import logoimg from '../image/1.jpg';
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><img src={logoimg} alt='logo' /><span>SHIFAS</span>MEHENDI</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link to="/PrivacyPolicy"className="" >PRIVACYPOLICY</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/RefoundPolicy" className="" >REFOUNDPOLICY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Shippingpolicy" className="" >SHIPPINGPOLICY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/TermandCondition" className="" >TERM AND CONDITIONS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/PrivacyPolicy" className="" >Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                            <p><i className="fa-solid fa-envelope"></i> waleedishfaq1515@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Last-footer" >© 2023 Copyright:<p>Developed and maintained by <Link to="/" target="_blank">SHIFASH MEHENDHI</Link></p>
            </div>


        </>
    )
}
export default Footer;