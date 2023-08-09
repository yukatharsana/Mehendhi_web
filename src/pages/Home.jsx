import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import ProductCard from '../coponents/ProductCard';
import Reveiw from '../coponents/Reveiw'
function Home() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="https://www.citimuzik.com/wp-content/uploads/2023/02/page.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/761/006/new_medium/page.jpg?1684415511" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/004/870/055/new_medium/page.jpg?1663239495" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="display-5 mt-5">No.1 Henna Spot In Srilanka</h2>
                    <h4><b>10 years</b> of experience,  <b>20000+</b> clients hennaed, <b>4.9-star</b> customer Reviews.</h4>
                    <div className="d-flex align-items-center justify-content-center w-50 mx-auto mt-5">

                        <Link className="d-block btn mx-4 btn-home-henna">SHOP HENNA</Link>
                        <Link className="d-block btn mx-4 btn-home-henna">BOOKSERVICES</Link>
                        <Link className="d-block btn mx-4 btn-home-henna">HENNA CLASSES</Link>
                    </div>
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
           <Reveiw/>
        </>
    )
}

export default Home;
