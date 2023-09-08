
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"
import { AiFillDelete } from 'react-icons/ai'
import hennail from "../image/hennail.jpeg";
import { Link } from 'react-router-dom'
import '../style/cart.css'

const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <Breadcrumb title="Cart" />
            <section className="cart-wrapper home-wrapper-2 py-5 w-100">
                <div className='container-xxl w-100'>
                    <div className="row ">
                        <div className="col-12 w-100">
                            <table class="table table-borderless table-responsive-md">
                                <thead>
                                    <tr className='text-center'>
                                        <th scope="col" className='col-4 text-lg-start'>PRODUCTS</th>
                                        <th scope="col " className='col-2'>PRICE</th>
                                        <th scope="col" className='col-4'>QUANTITY</th>
                                        <th scope="col" className='col-2'>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody className='table-hover '>
                                    <tr>
                                        <td scope="row">
                                            <div className='cart-col-1 d-flex align-items-center  justify-content-center w-75'>
                                                <div className='w-25 me-3'>
                                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU' class="mb-3 rounded w-100 " alt="product image" />
                                                    
                                                </div>
                                                <div className='w-75 mx-3'>
                                                    <p><b>P.Name:</b> Henna</p>
                                                    <p><b>Color:</b> Black</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center'>$ 200</td>
                                        <td><div className='cart-col-3 d-flex align-items-center justify-content-center gap-15  w-100'>
                                            <div>
                                                <input className="form-control" type="number" name="" min={1} max={10} id="" />
                                            </div>
                                            <div> <AiFillDelete className='text-danger ms-4' /></div>
                                        </div></td>
                                        <td className='text-center'>$200</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                            <div className='col-12 py-2'>
                                <div className='d-flex justify-content-between align-items-baseline'>
                                    <Link to="/shophenna" className='butcheckout'> Continue Shopping</Link>
                                    <div className='d-flex flex-column align-items-end'>
                                        <h4><b>SubTotal: $ 1000</b></h4>
                                        <p>Taxes and shipping calculated at checkout</p>
                                        <Link to="/Checkout" className='butcheckout'>Checkout</Link>
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

export default Cart