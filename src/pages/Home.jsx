import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import ProductCard from '../components/ProductCard';
import Reveiw from '../components/Reveiw'
import ko from "../image/ko.png"; 
import ko1 from "../image/ko1.png"
import ko2 from "../image/ko2.png"
import ko3 from "../image/ko3.png"
import Carousel from 'react-bootstrap/Carousel';
import ex from "../image/ex.png"
import logon from "../image/logon.png";
import img1 from "../image/img1.png";
import img2 from "../image/img2.png";
import img3 from "../image/img3.png";


function Home() {
    return (
        <>

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={ko} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5  className='home-h5'>The Best in Town</h5>

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="500">
      <img src={ko3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='home-h5'>Do All at one Place</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={ko1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='home-h5'>Shipping  Worldwide</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  
                <div className="container text-center">
                    <h2 className="display-5 mt-5">♥︎ SRILANKA'S FIRST EVER ONLINE HENNA STORE ♥︎</h2>
                    <h4><b>10 years</b> of experience,  <b>20000+</b> clients hennaed, <b>4.8-star</b> customer Reviews.</h4>
                    <div className="d-flex align-items-center justify-content-center w-50 mx-auto mt-5">

                        <Link className="d-block btn mx-4 btn-home-henna">SHOP HENNA</Link>
                        <Link className="d-block btn mx-4 btn-home-henna">BOOKSERVICES</Link>
                        <Link className="d-block btn mx-4 btn-home-henna">HENNA CLASSES</Link>
                    </div>
                </div>
            
            <section className='marque-wrapper mt-5 py-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className='d-flex '>
                                    <div className='service d-flex align-items-center justify-content-between shadow-lg bg-gradient'>
                                        <div className='d-flex align-items-center gap-4 mx-2 homebanner'>
                                            <img className='service-img' src={require('../image/service1.png')} alt="services" />
                                            <div>
                                                <h6>FreeShipping</h6>
                                                <p className='mb-0'>From All orders over $100</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-5 mx-2 homebanner '>
                                            <img className='service-img' src={require('../image/service4.png')} alt="services " />
                                            <div>
                                                <h6>Affortable Price</h6>
                                                <p className='mb-0'>Get factory Default Price</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-5 mx-2 homebanner '>
                                            <img className='service-img' src={require('../image/service2.png')} alt="services" />
                                            <div>
                                                <h6>Support 24/7</h6>
                                                <p className='mb-0'>Shop with an export</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-5 mx-2 homebanner' >
                                            <img className='service-img' src={require('../image/service3.png')} alt="services" />
                                            <div>
                                                <h6>Secure Payment</h6>
                                                <p className='mb-0'>100% Protected payment</p>
                                            </div>
                                        </div>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='popular-wraper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Featured Collection</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />   
                    </div>
                </div>
            </section>

            <section class="destination-block cards-destination">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card border-3 transform-on-hover hovereffect">
                    <Link to='/bookhenna'> <img src={img1} class="card-img-top" alt=""/></Link>
                        </div>
                </div>
                
                <div class="col-md-6 col-lg-4">
                    <div class="card border-3 transform-on-hover hovereffect">
                    <Link to='/shophenna'><img src={img2} class="card-img-top" alt="" /></Link>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-4">
                    <div class="card border-3 transform-on-hover hovereffect">
                    <Link to='/learnhenna'><img src={img3} class="card-img-top"alt=""/></Link>
                    </div>
                </div>
            </div>                
        </div>
    </section>
           <Reveiw/>
        </>
    )
}


export default Home;

