import React from 'react'
import Breadcrumb from '../coponents/Breadcrumb'
import Meta from "../coponents/Meta"
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <Breadcrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className="col-12">
            <div className="auth-card   border border-dark">
              <h3 className='text-center'>Sign Up</h3>
              <form action="" className='d-flex flex-column gap-30 '>
                <div >
                  <input type="text" name="name" placeholder='First Name' className='form-control' />
                </div>
                <div >
                  <input type="text" name="name" placeholder='Last Name' className='form-control' />
                </div>
                <div >
                  <input type="tel" name="mobile" placeholder='Mobile Number' className='form-control' />
                </div>
                <div >
                  <input type="email" name="email" placeholder='Email' className='form-control' />
                </div>
                
                <div className='mt-1'> 
                  <input type="password" name="password" placeholder="password" className='form-control' />
                </div>
                <div >
                  <div className='mt-3 d-flex align-items-center justify-content-center gap-20'>
                    <Link className='button signup btn bbtn btn-dark'>Submit</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup