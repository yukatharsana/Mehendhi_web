import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

const SingleProduct = () => {
    const props = { width: 400, height: 250, zoomWidth: 550,  img: '' };

    const [OrderedProducts, setorderProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <Breadcrumb title="Product Name" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className=' container-xxl'>
                    <div className='row'>
                        <div className="col-6">
                            <div className="main-product-image ">
                                <div >
                                    <div className='row my-2'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HtYu1bo2AORoVJQBW2ccHHJQGx1DRaK7zg&usqp=CAU" alt="" className='col-12' />
                                    </div>
                                    <div className='row'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3g-koulWz3lKK6JYFxsogU5eocbOxAe4H916pv0IXZWWXnrmcd33uGrxVOouPqxiNnw&usqp=CAU" alt="" className="col-4 px-2 my-1"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTD1LbINzFz6gcUVOBscemIaymse5EM7fznj6iSYd4MXzFcYvN0sos6iEsELtBAiG8_Fg&usqp=CAU" alt="" className="col-4 px-2 my-1"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3CoZ0PY39H3gpw5qvvjs6f41_8A_q7qBBg_-PnVM64_GZDIpFSSiuSYPV9ZVKcJQHiM&usqp=CAU" alt="" className="col-4 px-2 my-1"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTD1LbINzFz6gcUVOBscemIaymse5EM7fznj6iSYd4MXzFcYvN0sos6iEsELtBAiG8_Fg&usqp=CAU" alt="" className="col-4 px-2 my-1"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3CoZ0PY39H3gpw5qvvjs6f41_8A_q7qBBg_-PnVM64_GZDIpFSSiuSYPV9ZVKcJQHiM&usqp=CAU" alt="" className="col-4 px-2 my-1"/>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTD1LbINzFz6gcUVOBscemIaymse5EM7fznj6iSYd4MXzFcYvN0sos6iEsELtBAiG8_Fg&usqp=CAU" alt="" className="col-4 px-2 my-1"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-6">
                        <Breadcrumb title={"Jagua Henna/ 12 Jagua Henna Cones"} />
                        <h3>12 JAGUA HENNA Conses (HENGUA FLASH SALE)</h3>
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
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod corrupti vero, minus asperiores consequuntur, saepe reprehenderit rerum unde architecto iure dicta consequatur repellat odit libero adipisci! Laboriosam obcaecati minima nemo laudantium optio atque? Tempora, debitis! Illum fugiat architecto qui maiores?
                                </p>
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