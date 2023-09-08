import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"
import ProductCard from '../components/ProductCard';
import hennail from "../image/hennail.jpeg";
import Sngprod from "../image/Sngprod.png";
import imgsingpro from "../image/imgsingpro.jpeg";
import imgsingpro1 from "../image/imgsingpro.jpeg";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

const SingleProduct = () => {
    const props = { width: 400, height: 250, zoomWidth: 550, img: '' };

    const [OrderedProducts, setorderProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <Breadcrumb title="Product Name" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className=' container-xxl'>
                    <div className='row'>
                        <div className="col-5">
                            <div className="main-product-image ">
                                <div >
                                    <div className='big-img row my-2'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU' class="mb-3" alt="product image" />                                       
                                    </div>
                                    <div className='row'>
                                        <img src={imgsingpro} class="mb-3" alt="" className="col-4 px-2 my-1" />
                                        <img src={imgsingpro1} class="mb-3" alt="" className="col-4 px-2 my-1" />
                                        <img src={imgsingpro1} class="mb-3" alt="" className="col-4 px-2 my-1" />                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-5">
                            <Breadcrumb title={"SHIFASH HENNA/ SHIFASH HENNA CONE"} />
                            <div>
                                <h3 className='single-pro'>HENNA POWDER</h3>
                                <h4><b>PRICE $ 50</b></h4>
                                <div className='cart-col-3 d-flex   gap-15  w-100'>
                                    <div className='single-pro input'>
                                        <input className="form-control" type="number" name="" min={1} max={10} id="" />
                                    </div>
                                    <div className='singlrpro-card'> <Link to="/Cart" className='btn text-white fw-bold cardbtn'>
                                        Add to card
                                    </Link></div>
                                </div>
                                <ul className='singpro-ul'>
                                    <li>Made from Organic fruit for black stain.</li>
                                    <li>Lab tested natural formula approved by Dubai Authorities.</li>
                                    <li>fresh, and safe.</li>
                                </ul>
                                <img src={Sngprod} class="mb-3" alt="" className="col-9 px-2 my-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='discription-wraper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white p-3 rounded'>
                                <p>Jagua has been used for over 2000 years by native indigenous tribes throughout South America and Panama, as a form of temporary all-natural body art. Many indigenous tribes in South America use jagua body art as a part of ceremony and celebrations.

                                    We are the primary supplier in the Middle East and South Asia region to source top quality all natural Jagua Juice from the local indigenous tribes in the Amazon forest. The product is of superior quality and it is the result of in-depth research and testing which has now resulted into an undiluted formula for temporary tattoos.
                                </p>
                                <h5>Why Buy Jagua Gel From Us</h5>
                                <ul>
                                    <li>Primary supplier of Jagua Tattoo Gel in the Middle East and South Asia.</li>
                                    <li>Lab tested natural formula approved by Dubai authorities.</li>
                                    <li>We source our 100% purest quality of USDA certified essential oils from the supplier in the USA who is ranked in the Top 5 list of global suppliers of Essential oils.</li>
                                    <li>100% natural, fresh, and safe.</li>
                                    <li>Same Jagua Tattoo Gel is used for our clients.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='reviews-wraper home-wraper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {OrderedProducts && (
                                        <div>
                                            <Link className="text-dark text-decoration-underline" to=''>Write Link Review</Link>
                                        </div>
                                    )}
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write your Review</h4>
                                    <form acttion="" className='d-flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id='' className='w-100 form-control' cols="40" rows="4" placeholder='Enter your comments'
                                            ></textarea>
                                        </div>
                                        <div className='d-flex justify-content'>
                                            <button className='review-submit btn  float-right ml-2' type="submit">SUBMIT REVIEWS</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Tharsha</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum Link accusantium quos velit minima magni expedita id explicabo amet aperiam vitae iste cum quod dignissimos aliquid, perferendis non veritatis quibusdam labore alias optio quaerat nemo! Ad, quisquam. Vero, reprehenderit officia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct