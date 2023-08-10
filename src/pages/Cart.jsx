import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"
import { AiFillDelete } from 'react-icons/ai'
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
      <th scope="col" className='col-4 text-lg-start'>Products</th>
      <th scope="col " className='col-2'>Price</th>
      <th scope="col" className='col-4'>Quantity</th>
      <th scope="col" className='col-2'>Total</th>
    </tr>
  </thead>
  <tbody className='table-hover '>
    <tr>
      <td scope="row"> 
      <div className='cart-col-1 d-flex align-items-center  justify-content-center w-75'>
                                    <div className='w-25 me-5'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU" className="rounded w-100" alt=" product img" />
                                    </div>
                                    <div className='w-75 mx-3'>
                                        <p><b>P.Name:</b> Henna</p>
                                        <p><b>Color:</b> marrown</p>
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
                            {/* <div className="cart-header d-flex justify-content-around align-items-center w-100">
                                <h4 className='cart-col-1 col bg-danger text-center'>Product</h4>
                                <h4 className='cart-col-2 bg-info col'>Price</h4>
                                <h4 className='cart-col-3 col bg-warning text-center'>Quantity</h4>
                                <h4 className='cart-col-4 col bg-primary'>Total</h4>
                            </div> */}
                            {/* <div className="cart-data py-3 mb-2 d-flex justify-content-around align-items-center w-100">
                                <div className='cart-col-1 d-flex align-items-center flex-row-reverse justify-content-center '>
                                    <div className='w-25'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU" className="rounded w-100" alt=" product img" />
                                    </div>
                                    <div className='w-75'>
                                        <p><b>P.Name:</b> Henna</p>
                                        <p><b>Color:</b> marrown</p>
                                    </div>
                                </div>
                                <div className='cart-col-2  w-100'>
                                    <h5 className="price">$ 200</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center justify-content-center gap-15  w-100'>
                                    <div>
                                        <input className="form-control" type="number" name="" min={1} max={10} id="" />
                                    </div>
                                    <div> <AiFillDelete className='text-danger' /></div>
                                </div>
                                <div className='cart-col-4  w-100'>
                                    <h5 className="price">$200</h5>
                                </div>
                            </div> */}
                            <hr/>
                        <div className='col-12 py-2'>
                            <div className='d-flex justify-content-between align-items-baseline'>
                                <Link to="/shophenna" className='button-shophenna'> Continue Shopping</Link>
                                <div className='d-flex flex-column align-items-end'>
                                    <h4><b>SubTotal: $ 1000</b></h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to="/Checkout" className='button-checkout'>Checkout</Link>
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