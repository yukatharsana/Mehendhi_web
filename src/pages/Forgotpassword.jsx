import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"
import { Link } from 'react-router-dom';
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"ForgotPassword"} />
      <Breadcrumb title="Forgot Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className="col-12">
            <div className="auth-card   border border-dark">
              <h3 className='text-center'>Reset Your Password</h3>
              <p className="text-center mb-3">We will send Link email to reset your password</p>
              <form action="" className='d-flex flex-column gap-30 '>
                <div >
                  <input type="email" name="email" placeholder='Email' className='form-control' />
                </div>
                <div>
                  <div className='mt-3 d-flex align-items-center flex-column gap-20'>
                    <button className="button border-0 btn bbtn btn-dark me-md-1 " type="submit">Submit</button>
                    <Link to="/">Cancle</Link>
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

export default Forgotpassword