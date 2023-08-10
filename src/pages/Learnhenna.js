import React from 'react'
import bh from "../image/bh.png"
import icon4 from "../image/icon4.png";
import icon5 from "../image/icon5.png";
import icon6 from "../image/icon6.png";
import icon7 from "../image/icon7.png";
import { Link } from 'react-router-dom'
import d1 from "../image/d1.png";
import d2 from "../image/d2.png";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Reveiwlearn from '../components/Reviewlearn';
import cer from "../image/cert.png"
import mix from "../image/henmix.jpeg";
import art from "../image/hende.jpeg"
import nail from "../image/hennail.jpeg"

const Learnhenna = () => {
  return (
  <>
  <meta title="LearnHenna" />
  <div className='section'> 
   <img src={bh} alt='' className='d-block w-100'/>
  </div> 

  <div className="container text-center">
                   <h2 className="display-5 mt-5">REGISTER NOW</h2>
                    <h5>ONLINE AND IN-PERSON CLASSES AVAILABLE.</h5>                
                <div class='row'>
                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    <a href='tel:+94775591150' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna transform-on-hoverr text-white '>CALL</button>  </a>
                    </div>

                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    <a href='#regforclass' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna transform-on-hoverr text-white '>ENROLL</button>  </a>
                    </div>

                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    <a href='https://wa.me/c/94775591150' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna transform-on-hoverr text-white '>WHATSAPP</button>  </a>
                    </div>            
                </div>                   
  </div> <br /> <br /> <br />

  <section id="aboutlearn" class="bgaboutlearn">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-3 text-center text-color">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon4} class="mb-3" alt=""/>
                    <h3 class="mb-3">1000+ STUDENTS</h3>
                    <p class="text-muted mb-0">More than 1000+ Students Worldwide trained by Shifa</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center text-color text-font-size">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon5} class="mb-3" alt=""/>
                    <h3 class="mb-3">WORK WITH US</h3>
                    <p class="text-muted mb-0">Opportunity to work on our big projects and get paid</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center text-color">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon6} class="mb-3" alt=""/>
                    <h3 class="mb-3">BUILD BUSINESS</h3>
                    <p class="text-muted mb-0">Mentor and guidance to build your own brand</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center text-color">
                <div class="mx-auto service-box mt-5 text-font-size"><img src={icon7} class="mb-3" alt=""/>
                    <h3 class="mb-3">BECOME AN EXPERT</h3>
                    <p class="text-muted mb-0">Get to know more about Art of Mehendhi</p>
                </div>
            </div>
        </div>
    </div>
    <br></br><br></br>
    </section>

    <div className="container text-center">
                   <h2 className="display-5 mt-5">REGISTER NOW</h2>
                    <h5>ONLINE AND IN-PERSON CLASSES AVAILABLE.</h5>                
                <div class='row'>
                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    </div>            
                </div>                   
  </div>
  
  <section id="opening"  class="destination-block  learn-block cards-destination bgaboutlearn"  >
        <div class="container ">
            <div class="heading">
                <h1>HENNA COURSES</h1>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 ">
                        <a class="lightbox" href="./image/d1.jpg"><img src={mix}class="card-img-top" alt="kandy"/></a>
                        <div class="card-body">
                            <h6 className='text-left' >ORGANIC HENNA MIXOLOGY COURSE</h6>
                            <p class="text-muted card-text text-left ">Course Fee: AED 800</p>
                            <Link to='/Hennamix' className="viewing"><p className="viewing" >VIEW MORE DETAILS <BsArrowRightCircleFill className='fs-6 mx-2' /></p></Link>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 ">
                        <a class="lightbox" href="../image/d1.jpg"><img src={art} class="card-img-top" alt="Trinco" /></a>
                        <div class="card-body ">
                            <h6 className='text-left' >ORGANIC HENNA MIXOLOGY COURSE</h6>
                            <p class="text-muted card-text text-left ">Course Fee: AED 800</p>
                            <Link to='/Hennaart' className="viewing"><p className="viewing" >VIEW MORE DETAILS <BsArrowRightCircleFill className='fs-6 mx-2' /></p></Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0">
                        <a class="lightbox" href="../image/d1.jpg"><img src={nail} class="card-img-top" alt="Trinco" /></a>
                        <div class="card-body">
                            <h6 className='text-left' >ORGANIC HENNA MIXOLOGY COURSE</h6>
                            <p class="text-muted card-text text-left ">Course Fee: AED 800</p>
                            <Link to='/Hennanail' className="viewing"><p className="viewing" >VIEW MORE DETAILS <BsArrowRightCircleFill className='fs-6 mx-2' /></p></Link>
                        </div>
                    </div>
                </div>

            </div>                
        </div>
    </section>
  
    <div className="container text-center">
                   <h2 className="display-5 mt-5">LEARN NOW, PAY LATER</h2>
                    <h5>Split in 4 monthly installments with KOKO.</h5>                
                <div class='row'>
                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    </div>            
                </div>                   
  </div>
  
  <div className='section parent'> 
   <img src={cer} alt='' className='d-block w-100'/>
   <div class="text center"><h4 className='pic-txt text-center'>1000+</h4>
     <p className='par-txt text-center'>CERTIFIED STUDENTS</p></div>
  </div> 




  <div className="container text-center">
                   <h2 className="display-5 mt-5">REGISTER NOW</h2>
                    <h5>ONLINE AND IN-PERSON CLASSES AVAILABLE.</h5>                
                <div class='row'>
                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    <a href='tel:+94775591150' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna transform-on-hoverr text-white '>CALL</button>  </a>
                    </div>

                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    <a href='#regforclass' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna transform-on-hoverr text-white '>ENROLL</button>  </a>
                    </div>

                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    <a href='https://wa.me/c/94775591150' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna transform-on-hoverr text-white '>WHATSAPP</button>  </a>
                    </div>            
                </div>                   
  </div> <br /> <br /> <br />

<Reveiwlearn />

<div className="container text-center">
                   <h2 className="display-5 mt-5">FLEXIBLE CLASS SCHEDULE</h2>
                    <h5> <SlCalender className='fs-6 mx-2 cal' />Weekdays - Day time classes</h5>   
                    <h5> <SlCalender className='fs-6 mx-2 cal' />Weekdays – Evening Classes (for working ladies)</h5>   
                    <h5> <SlCalender className='fs-6 mx-2 cal' />Weekend Classes</h5>                
                <div class='row'>
                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-5">  
                    </div>            
                </div>                   
  </div>

  <section class="position-relative py-4 py-xl-5 bgaboutlearn" id='regforclass'>
    <div class="container position-relative ">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-12 ">
                <div class="card mb-5 bgaboutlearn">
                    <div class="card-body p-sm-5">
                        <h2 class="text-center mb-4">REGISTER YOUR INTEREST BY FILLING THE FORM BELOW</h2>
                        <form method="post" class="needs-validation " novalidate>
                            <div class="mb-3"><label for="validationTooltip01">First Name<span className='redcolor'>*</span></label>
                            <input id="validationTooltip01" class="form-control" type="text" name="name" placeholder="Name" required/></div>

                            <div class="mb-3"><label for="validationTooltipemail">Email<span className='redcolor'>*</span></label>
                            <input id="validationTooltipemail" class="form-control" type="email" name="email" placeholder="Email" required/>
                            <div class="invalid-tooltip">Enter a Valid Email address</div>    
                            </div>

                            <div class="mb-3"><label for="validationTooltipphone">Phone Number (WHATSAPP preferred)<span className='redcolor'>*</span></label>
                            <input id="validationTooltipphone" class="form-control" type="phone" name="phone" placeholder="Phone Number" required/>
                            <div class="invalid-tooltip">Enter a Valid Number   
                            </div>
                            </div>

                            <div class="mb-3"><label for="validationTooltipdateex">Expecting Enrollement<span className='redcolor'>*</span></label>
                            <input id="validationTooltipdateex" class="form-control" type="Date" name="phone" placeholder="" required/></div>

                            <div class="mb-3"><label for="validationTooltipcourse">Select Course<span className='redcolor'>*</span></label><br/>
                            <select class="custom-select w-100  multiple custom-select-lg mb-3" id='validationTooltipcourse' required>
                              <option selected className=''>Select..</option>
                              <option value="1">ORGANIC HENNA MIXOLOGY COURSE</option>
                              <option value="2">HENNA DESIGNING COURSE</option>
                              <option value="3">NAIL HENNA MIXOLOGY CLASS</option>
                             </select></div>
                            <div class="mb-3"><label for="validationTooltipmessege">Message</label>
                            <textarea id="message-2" class="form-control" name="message" rows="6" placeholder="Message"></textarea></div>
                            <div><button class="btn btn-pr d-block w-100" type="submit">REGISTER NOW</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  </>
  )
}

export default Learnhenna