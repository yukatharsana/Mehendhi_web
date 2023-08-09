import React from 'react'
import { Link, NavLink,useLocation} from 'react-router-dom';
import { FaRegUserCircle} from 'react-icons/fa'
import "../style/App.css"
import { BsSearch, BsCart4 } from "react-icons/bs"
import logo from "../image/logo.jpg";
import '../style/Header.css'
const Header = () => {
    const location = useLocation();
   
  return (
    <>
      <header className="header-top-strip ">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Free shipping over $100
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:<Link className='text-white' to='tel:+91 782345986723'>+94 380945860954</Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2 ">
        <div className='container-xxl'>
          <div className='row d-flex align-items-center justify-content-between'>
            <div className='col-4'>
              <NavLink to='/home'>
                <img src={logo} width="100px" className='img-fluid rounded-circle logo' alt='logo' />
              </NavLink>
            </div>
            <div className='col-4'>
              <div className="input-group ">
                <input type="text" className="form-control py-2" placeholder="Search products here" aria-label="Search products h2re" aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"> <BsSearch className='fs-5' /> </span>
              </div>
            </div>
            <div className='col-4 right-side-bar'>
              <div className='header-upper-links d-flex align-items-center justify-content-end'>
                <div className='px-3'>
                  <Link className='d-flex'>
                    <FaRegUserCircle to="/Login" className='iuser' />
                    <p className='ms-2 text-light'>MyAccount</p>
                  </Link>
                </div>
                <div className='px-3'>
                  <Link className='d-flex align-items-center position-relative'>
                    <BsCart4 to="/Cart" className='icart' />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                      1
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom ">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='navbar navbar-expand-lg menu-bottom'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0  me-5 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                      <span className="me-2 d-inline-block">Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>                 
                    </div>
                </div>
                <div className='menu-links '>
                  <ul className='w-75 navbar-nav'>
                    <li className={`nav-item  px-3 ${location.pathname === '/home' ? 'navactive' : ''}`}><NavLink className="nav-link text-white" to="/home">Home</NavLink></li>
                    <li className={`nav-item  px-3 ${location.pathname === '/Shophenna' ? 'navactive' : ''}`}><NavLink className="nav-link text-white" to="/Shophenna">Shophena</NavLink></li>
                    <li className={`nav-item  px-3 ${location.pathname === '/' ? 'navactive' : ''}`}><NavLink className="nav-link text-white" to="/">BOOKSERVICE</NavLink></li>
                    <li className={`nav-item  px-3 ${location.pathname === '/' ? 'navactive' : ''}`}><NavLink className="nav-link text-white" to="/">HENNACLASSES</NavLink></li>
                    <li className={`nav-item  px-3 ${location.pathname === '/Contact' ? 'navactive' : ''}`}><NavLink className="nav-link text-white" to="/Contact">Contact</NavLink></li>
                  </ul> 
           </div>

              </div>

            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header