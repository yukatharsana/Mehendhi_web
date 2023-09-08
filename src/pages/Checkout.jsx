import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import '../style/checkout.css';

const Checkout = () => {
  return (
    <>
      <div className='checkout-wrapper py-5 home-wrapper-2 '>
        <div className='container-xxl w-75'>
          <div className='row'>
            <div className="col-6 px-1">
              <div className="checkout-left-data">
                <h3 className="website-name">Shifha Mehendhi</h3>
                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link className='text-dark total-price' to="/Cart">Cart</Link></li>
                    &nbsp;/
                    <li class="breadcrumb-item total-price active" aria-current="page">Information</li>
                    &nbsp;/
                    <li class="breadcrumb-item total-price active">Shipping</li>
                    &nbsp;/
                    <li class="breadcrumb-item total-price active" aria-current="page">Payment</li>
                  </ol>
                </nav>
                <h4 className="title"> Contact Information</h4>
                <p className="user-details">Tharsha jeeva(Tharsha@gmail.com)</p>
              </div>

              <form className='checkout-form d-flex gap-15 flex-wrap justify-content-between'>
                <div className='w-100'>
                  <div className='flex-grow-1 my-2'>
                    <input type="text" placeholder='Enter your country' className='form-control' />
                  </div>
                </div>
                <div className='flex-grow-1 my-2'>
                  <input type="text" placeholder='First Name' className='form-control' />
                </div>
                <div className='flex-grow-1 my-2'>
                  <input type="text" placeholder="Last Name" className='form-control' />
                </div>
                <div className='w-100 my-2'>
                  <input type="text" placeholder="Address" className='form-control' />
                </div>
                <div className='w-100 my-2'>
                  <input type="text" placeholder="Apartment, suite, etc." className='form-control' />
                </div>
                <div className='d-flex my-2 flex-grow-1'>
                  <div className='flex-grow-2'>
                    <input type="text" placeholder="City" className='form-control' />
                  </div>
                  <div className='flex-grow-1'>
                    <select name="" className='form-control form-select' id="">
                      <option value="" selected disabled>Select state</option>
                    </select>
                  </div>
                  <div className='flex-grow-2'>
                    <input type="text" placeholder='Zipcode' className='form-control' />
                  </div>
                </div>

                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/Cart" className='text-cart'><BiArrowBack className='me-2 '/>Back to Card</Link>
                    <Link to="/" className="button-checkout mt-2">Continue to shipping</Link>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-5 mx-auto rigth-container'>
             
              <div className='border-bottom py-4'>
                <div className="d-flex gap-10 align-align-items-center">
                  <div className='w-75 d-flex gap-10'>
                    <div className='w-25 position-relative'>
                      <span style={{ top: "-10px", right: "2px" }} className='badge bg-secondary text-white rounded-circle p-1.2 position-absolute'>
                        1
                      </span>
                      <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU" alt="" />
                    </div>
                    <div>
                      <h5 className='check-title'>Henna Powder</h5>
                      <p>This henna powder is 100% natural product</p>
                    </div>
                  </div>
                  <div className='check0ut-prc flex-grow gap'>
                    <h5>$100</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='border-bottom py-4'>
                <div className="d-flex gap-10 align-align-items-center">
                  <div className='w-75 d-flex gap-10'>
                    <div className='w-25 position-relative'>
                      <span style={{ top: "-10px", right: "2px" }} className='badge bg-secondary text-white rounded-circle p-1.2 position-absolute'>
                        1
                      </span>
                      <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU" alt="" />
                    </div>
                    <div>
                      <h5 className='check-title'>Henna Powder</h5>
                      <p>This henna powder is 100% natural product</p>
                    </div>
                  </div>
                  <div className='check0ut-prc flex-grow gap'>
                    <h5>$100</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='border-bottom py-4'>
                <div className="d-flex gap-10 align-align-items-center">
                  <div className='w-75 d-flex gap-10'>
                    <div className='w-25 position-relative'>
                      <span style={{ top: "-10px", right: "2px" }} className='badge bg-secondary text-white rounded-circle p-1.2 position-absolute'>
                        1
                      </span>
                      <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU" alt="" />
                    </div>
                    <div>
                      <h5 className='check-title'>Henna Powder</h5>
                      <p>This henna powder is 100% natural product</p>
                    </div>
                  </div>
                  <div className='check0ut-prc flex-grow gap'>
                    <h5>$100</h5>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className='border-bottom py-4'>
                <div className="d-flex gap-10 align-align-items-center">
                  <div className='w-75 d-flex gap-10'>
                    <div className='w-25 position-relative'>
                      <span style={{ top: "-10px", right: "2px" }} className='badge bg-secondary text-white rounded-circle p-1.2 position-absolute'>
                        1
                      </span>
                      <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU" alt="" />
                    </div>
                    <div>
                      <h5 className='check-title'>Henna Powder</h5>
                      <p>This henna powder is 100% natural product</p>
                    </div>
                  </div>
                  <div className='check0ut-prc flex-grow gap'>
                    <h5>$100</h5>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className='border-bottom py-4'>
                <div className="d-flex gap-10 align-align-items-center">
                  <div className='w-75 d-flex gap-10'>
                    <div className='w-25 position-relative'>
                      <span style={{ top: "-10px", right: "2px" }} className='badge bg-secondary text-white rounded-circle p-1.2 position-absolute'>
                        1
                      </span>
                      <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU" alt="" />
                    </div>
                    <div>
                      <h5 className='check-title'>Henna Powder</h5>
                      <p>This henna powder is 100% natural product</p>
                    </div>
                  </div>
                  <div className='checkout-prc flex-grow gap'>
                    <h5>$100</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='checkoutblns border-bottom py-4'>
                <div className=' d-flex justify-content-between align-items-center'>
                  <h5>Sub Total</h5>
                  <h5>$500</h5>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 className=' mb-0'>Shipping</h5>
                  <h5 className='mb-0'>$200</h5>
                </div>
              </div>
              <div className='check-granttotal d-flex justify-content-between align-items-center border-bottom py-4'>
                <h4><b>Total</b></h4>
                <h5><b>$700</b></h5>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout