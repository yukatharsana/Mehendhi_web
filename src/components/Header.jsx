import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUserCircle} from 'react-icons/fa'
import "../style/App.css"
import { BsSearch, BsCart4 } from "react-icons/bs"
import logon from "../image/logon.png";
import '../style/App.css'
import { CiMail } from 'react-icons/ci'
import { AiOutlineFacebook, AiOutlineInstagram,AiOutlineWhatsApp} from "react-icons/ai"
import {HiOutlineInboxIn} from 'react-icons/hi'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
  <>
         <header className="header-top-strip p-1 px-4 shadow-md ">
        <div className='container-xxl'>
          <marquee>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <p className='ok'>
               FREE SHIPPING FOR ORDERS ABOVE 100 USD
              </p>
            </div>
            <div className='col-lg-6 d-flex justify-content-between align-items-center'>
             <div>
             <a href="tel:+254708118414"> CALL US AT +94 (234) 567-890</a>
             </div>
             <div className=' col-lg-6' >
              <Link><AiOutlineFacebook className='fs-4 mx-2' /></Link> 
              <Link><AiOutlineInstagram className='fs-4 mx-2' /></Link> 
              <Link><AiOutlineWhatsApp className='fs-4 mx-2' /></Link> 

             </div>
            </div>
          </div>
          </marquee>
        </div>
      </header> 

      <header className='header-upper px-3 sticky-top'>
        <div className="container-xxl">
          <div className="row">
          <Navbar expand="lg" className="nav-links">
      <Container fluid>
        <Navbar.Brand href="/" className='logop text-center'> <img src={logon} alt='' className='img-fluid logo m-0' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='toggle'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-links "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="/Shophenna"><p className='nav-links'>SHOP HENNA</p></Nav.Link>
            <Nav.Link href="/Bookhenna"><p className='nav-links'>BOOK HENNA</p></Nav.Link>
            <Nav.Link href="/Learnhenna"><p className='nav-links'>LEARN HENNA</p></Nav.Link>
           
  
            <Nav.Link href=" "><p className='nav-links'>
              CONTACT </p>
            </Nav.Link>
          </Nav>
          <div className="col-md-6 col-lg-3 d-flex align-items-center mt-3">
             <div className="input-group mb-3 ">
                <input type="text" className="form-control p-2" placeholder="Search.." aria-label="Search products h2re" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"> <BsSearch className='fs-5' /> </span>
              </div>
             </div>

        </Navbar.Collapse>
        <div className=" col-lg-3 d-flex align-items-center justify-content-around">
            <div className='header-upper-links d-flex align-items-center justify-content-end'>
                <div className='px-3'>
                  <Link className='d-flex iiuser'>
                    <FaRegUserCircle to="/Login" className='iuser' />
                    <p className='ms-2  upon'>My Account</p>
                  </Link>
                </div>
                <div className='px-3'>
                  <Link className='d-flex align-items-center position-relative iicart'>
                    <BsCart4 to="/Cart" className='icart' />
                    <p className='ms-2 upon '>Cart</p>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                      1
                    </span>
                  </Link>
                </div></div>
            </div>
      </Container>
    </Navbar>
           
          </div>
        </div>
      </header>

  </>
  )
}

export default Header