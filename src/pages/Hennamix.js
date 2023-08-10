import React from 'react'
import bh from "../image/bh.png"
import firstmix from "../image/firstmix.png"
import secondmix from "../image/secondmix.png"
import { SlCalender } from 'react-icons/sl';
import { BiSolidTimeFive} from 'react-icons/bi';
import { MdEventAvailable} from 'react-icons/md';
import art from "../image/hende.jpeg"
import nail from "../image/hennail.jpeg"
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import cer from "../image/cert.png"
import Reveiwlearn from '../components/Reviewlearn';


function Hennamix() {
  return (
    <>

     <meta title="Henna Mixology" />
     
   <div class="container-fluid py-2 bgcaro">
    <div class="row align-items-center">
        <div class="col-auto">
            <a class="h1" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" role="button" >        
            </a>
        </div>
        <div class="col">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active " data-bs-interval="10000">
                        <div class="row align-items-center">
                            <div class="col-lg-6 py-2">
                                <h1 className='caro-h1'>NATURAL HENNA MIXOLOGY COURSE</h1>
                                <p className='caro-p'><SlCalender className='fs-6 mx-2 cal-caro' /> Duration - 2 days (1.5 hours per day) </p>
                                <p className='caro-p'><BiSolidTimeFive className='fs-6 mx-2 cal-caro' /> Flexible timing (Daytime | Evening | Weekends)</p>
                                <p className='caro-p'><MdEventAvailable className='fs-6 mx-2 cal-caro' /> Online & Physical classes are available</p>
                                <h3 className='caro-h3'>Course Fee: <span>AED 800</span></h3>
                              
                            </div>
                            <div class="col-lg-6 py-2">
                                <img class="d-block img-fluid img-caro" src={firstmix} alt="First slide"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="row align-items-center">
                            <div class="col-lg-6 py-2">
                            <h1 className='caro-h1'>NATURAL HENNA MIXOLOGY COURSE</h1>
                                <p className='caro-p'><SlCalender className='fs-6 mx-2 cal-caro' /> Duration - 2 days (1.5 hours per day) </p>
                                <p className='caro-p'><BiSolidTimeFive className='fs-6 mx-2 cal-caro' />  Flexible timing (Daytime | Evening | Weekends)</p>
                                <p className='caro-p'><MdEventAvailable className='fs-6 mx-2 cal-caro' />  Online & Physical classes are available</p>
                                <h3 className='caro-h3'>Course Fee: <span>AED 800</span></h3>
                                
                            </div>
                            <div class="col-lg-6 py-2">
                                <img class="d-block img-fluid img-caro" src={secondmix} alt="2nd slide"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-auto">
            <a class="h1"  data-bs-target="#carouselExampleInterval" data-bs-slide="next" role="button" >
                
            </a>
        </div>
    </div>

    <div className="container text-center">
                   <h2 className="display-5 mt-4">REGISTER NOW</h2>              
                <div class='row'>
                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-1">  
                    <a href='tel:+94775591150' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna-mix transform-on-hoverr text-white '>CALL</button>  </a>
                    </div>

                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-1">  
                    <a href='#regforclass' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna-mix transform-on-hoverr text-white '>ENROLL</button>  </a>
                    </div>

                    <div className="col-sm-6 col-lg-4 d-flex align-items-center justify-content-center w-10 mx-auto mt-1">  
                    <a href='https://wa.me/c/94775591150' ><button className='d-block btn bbb border-0 btn mx-0 btn-learn-henna-mix transform-on-hoverr text-white '>WHATSAPP</button>  </a>
                    </div>            
                </div>                   
  


    </div><br/><br />
     </div>

<section className='bg-details'>
<div class="container ">
    <div class="row">
        <div class="col-md-12">
         <p> 
             Would you like to learn our secrets of making silky smooth, 
            dark staining Organic henna paste. Our henna products are lab 
            tested by certified authorities and we will teach you all the secrets behind it. 
            It’s everything you need to know to get started – don’t miss it! <br /><br />

            Safa, the founder of Dubai Henna, has taught more than 300+ students worldwide 
            and she is happy to help you work towards your henna dreams! <br /><br />

            All required materials will be provided by us.

         </p>

         <h1>WHAT WILL YOU LEARN?</h1>

         <h3>INTRODUCTION TO HENNA</h3>
           <ul>
            <li>History of Ancient Henna</li>
            <li>Benefits – Medicinal & Therapeutic</li>
            <li>Uses – Traditional & Modern</li>
          </ul>


         <h3>MASTERING MIXOLOGY</h3>
          <ul>
            <li>Sourcing Quality Henna Powder</li>
            <li>Chemistry of Henna</li>
            <li>Recipes for creating the perfect henna paste</li>
            <li>Troubleshoot henna consistency, staining power, and other possible issues</li>
            <li>Sift and strain henna paste</li>
          </ul>

         <h3>PERFECTING YOUR HENNA CONES</h3>
           <ul>
             <li>Roll your own cellophane cones professionally</li>
             <li>Fill your henna cone without making a huge mess</li>
             <li>How to store your henna</li>
          </ul>

         <h3>THE SECRETS TO DARK STAINS</h3>
            <ul>
              <li>Protecting Stain Integrity</li>
             <li>Must Know Aftercare Information</li>
           </ul>

         <h1>WHAT WILL YOU GET?</h1>
           <ul>
            <li>Certificate of Completion</li>
            <li>Opportunity to work with us on events</li>
          </ul>

</div>
</div>
</div>
</section>
    

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
    
  <section id="opening"  class="destination-block  learn-block cards-destination bgaboutlearn"  >
        <div class="container ">
            <div class="heading">
                <h1>HENNA COURSES</h1>
            </div>
            <div class="row">               
                <div class="col-md-6 col-lg-6">
                    <div class="card border-0 ">
                        <a class="lightbox" href="../image/d1.jpg"><img src={art} class="card-img-top" alt="Trinco" /></a>
                        <div class="card-body ">
                            <h6 className='text-left' >ORGANIC HENNA MIXOLOGY COURSE</h6>
                            <p class="text-muted card-text text-left ">Course Fee: AED 800</p>
                            <Link to='/Hennaart' className="viewing"><p className="viewing" >VIEW MORE DETAILS <BsArrowRightCircleFill className='fs-6 mx-2' /></p></Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
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

    <div className='section parent'> 
   <img src={cer} alt='' className='d-block w-100'/>
   <div class="text center"><h4 className='pic-txt text-center'>1000+</h4>
     <p className='par-txt text-center'>CERTIFIED STUDENTS</p></div>
  </div>   
    
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

export default Hennamix