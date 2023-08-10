import React from 'react'
import { Link } from 'react-router-dom'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from './Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bh from "../image/bh.png"
import Reveiw from '../components/Reveiw'
import img1 from "../image/img1.png";
import img2 from "../image/img2.png";
import img3 from "../image/img3.png";
import icon0 from "../image/icon0.png";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";
import d1 from "../image/d1.png";
import d2 from "../image/d2.png";
import book1 from "../image/1book.png";
import book2 from "../image/2book.png";
import book3 from "../image/3book.png";
import book4 from "../image/4book.png";

export const Bookhenna = () => {
  return (
<>

       <meta title="BookHenna" />
       <div className='section'>
   
                        <img src={bh} alt='' className='d-block w-100'/>
                        

        </div> 
        
        <div className="container text-center">
                    
                    <div className="d-flex align-items-center justify-content-center w-50 mx-auto mt-5">                       
                    <a href='#opening' ><button className='d-block btn bbb border-0 btn mx-4 btn-book-henna transform-on-hoverr text-white '>BOOK SERVICES</button>  </a>
                    </div>
                    <h2 className="display-5 mt-5">♥︎ SRILANKA'S FIRST EVER ONLINE HENNA STORE ♥︎</h2>
                    <h4><b>10 years</b> of experience,  <b>20000+</b> clients hennaed, <b>4.8-star</b> customer Reviews.</h4>
        </div>

   <br></br>
   <br></br>

   <section id="about" class="bg">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-3 text-center text-color">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon0} class="mb-3" alt=""/>
                    <h3 class="mb-3">Organic Henna</h3>
                    <p class="text-muted mb-0">Our templates are updated regularly so they don&#39;t break.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center text-color text-font-size">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon1} class="mb-3" alt=""/>
                    <h3 class="mb-3">Service at your Location</h3>
                    <p class="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center text-color">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon2} class="mb-3" alt=""/>
                    <h3 class="mb-3">Customized Designs </h3>
                    <p class="text-muted mb-0">We update dependencies to keep things fresh.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center text-color">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon3} class="mb-3" alt=""/>
                    <h3 class="mb-3">Henna Workshops </h3>
                    <p class="text-muted mb-0">You have to make your websites with love these days!</p>
                </div>
            </div>
        </div>
    </div>
    <br></br><br></br>
    </section>

    <section id="video" class="">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-12 text-center text-color">
            <div class="mx-auto service-box mt-5 text-font-size-bg">
                    <h1 class="mb-3">Watch the Experience</h1>                   
                </div>  
                <div class="embed-responsive embed-responsive-16by9">
                <iframe className='ash'allowfullscreen frameborder="0" width="1000" height="515" src='https://www.youtube.com/embed/vlDzYIIOYmM'></iframe>
                               
                <div className="d-flex align-items-center justify-content-center w-50 mx-auto mt-5 ">                       
                <a href='#opening' ><button className='d-block btn bbb border-0 btn mx-4 btn-book-henna transform-on-hoverr text-white '>BOOKS SERVICES</button>  </a>
                    </div>
           </div>         
            </div>

        </div>
    </div>    
    <br></br><br></br>
    </section> 
 

	<section id="opening"  class="destination-block cards-destination bg-cards"  >
        <div class="container ">
            <div class="heading">
                <h1>CHOOSE YOUR HENNA PACKAGE</h1>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="card border-0 transform-on-hover">
                        <h2 className='bg-darkmade text-center text-white'> STANDARD PACKAGE</h2>
                        <a class="lightbox" href="./image/d1.jpg"><img src={d1}class="card-img-top" alt="kandy"/></a>
                        <div class="card-body">
                        <h6 className='text-left' >Includes</h6>
                            <ul className='text-left'>
                                <li>Custom made designs</li>
                                <li>Knowledge Sharing about Henna</li>
                            </ul>
                            <h6 className='text-left' >Type of Henna - Limited</h6>
                            <p class="text-muted card-text text-left ">Organic Henna (Brown) or Organic Jagua (Black)</p>
                            <br></br><h4  className='price_du'>Price : 200</h4>
                            <h4  className='price_du'>Duration - Whole Day</h4>
                           <Link to='/Booking' className="bbb border-0 btn mx-4 btn-home-henna transform-on-hoverr text-white">BOOK STANDARD PACKAGE</Link>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-6">
                    <div class="card border-0 transform-on-hover">
                    <h2 className='bg-darkmade text-center text-white'> LUXUARY PACKAGE</h2>
                        <a class="lightbox" href="../image/d1.jpg"><img src={d2} class="card-img-top" alt="Trinco" /></a>
                        <div class="card-body">
                            <h6 className='text-left' >Includes</h6>
                            <ul className='text-left'>
                                <li>Custom made designs</li>
                                <li>Knowledge Sharing about Henna</li>
                            </ul>
                            <h6 className='text-left' >Type of Henna - unlimited</h6>
                            <p class="text-muted card-text text-left ">Organic Henna (Brown), Organic Jagua (Black), White Henna, Gold Henna & Silver Henna</p>
                             <h4 className='price_du'>Price : 200</h4>
                            <h4 className='price_du'>Duration - Whole Day</h4>
                            <Link to='/Booking' className="bbb border-0 btn mx-4 btn-home-henna transform-on-hoverr text-white">BOOK LUXUARY PACKAGE</Link>
                        </div>
                    </div>
                </div>

            </div>                
        </div>
    </section>

   <br></br>

    <section class="Henna Types">
    <div class="container">
        <div className=''> <h3 className='col-xs-10 col-sm-12 col-md-12 col-lg-12 text-center typescolor'>.....................................................................................</h3></div>
        <h1 className='text-center '> Available Henna Types </h1> <br/>
        <div class="row g-0">
            <div class="col-md-2 col-lg-6 item zoom-on-hover"><a href="#"><img class="img-fluid image" src={book1} /></a></div>
   
            <div class="col-md-2 col-lg-6 item zoom-on-hover"><a href="#"><img class="img-fluid image" src={book2}/></a></div>

        </div>
        <div class="row g-0">
             

          
            <div class="col-md-4 col-lg-6 item zoom-on-hover"><a href="#"><img class="img-fluid image" src={book3} /></a></div>
            
            <div class="col-md-4 col-lg-6 item zoom-on-hover"><a href="#"><img class="img-fluid image" src={book4}/></a></div>
        </div>
    </div>
</section>
<Reveiw/>


</>
  )
}
