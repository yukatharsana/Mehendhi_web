import React from 'react'
import BreadCrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"

const Contact = () => {
    return (
        <>d
            <Meta title="{Contact US}" />
            <BreadCrumb title="Contact Us" />
            <div className='contact-wraper py-5 home-wraper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'> 
                        <section>
                                <div>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div>
                                    <input type="email" className='form-control' placeholder='Email-Id' />
                                </div>
                                <div>
                                    <input type="tel" className='form-control' placeholder='Mob-number' />
                                </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact