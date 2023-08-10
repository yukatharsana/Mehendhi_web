import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Send login request to the server

    //     alert(email);
    // };

    return (
        <>
            <Meta title={"Login"} />
            <Breadcrumb title="Login" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className='row'>
                    <div className="col-12">
                        <div className="auth-card   border border-dark">
                            <h3 className='text-center'>Login</h3>
                            <form action="" className='d-flex flex-column gap-30 '>
                                <div >
                                    <input type="email" name="email" placeholder='Email' className='form-control' />
                                </div>
                                <div>
                                    <input type="password" name="password" placeholder="password" className='form-control' />
                                </div>
                                <div>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                    <div className='mt-3 d-flex align-items-center justify-content-center gap-20'>
                                        <button className="button border-0 btn bbtn btn-dark me-md-2" type='submit'>Login</button>
                                        <Link to="/signup" className='button signup '>SignUp</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
