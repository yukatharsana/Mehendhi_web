import React from 'react'
import Breadcrumb from '../coponents/Breadcrumb'
import Meta from "../coponents/Meta"

const Shippingpolicy = () => {
    return (
        <>
            <Meta title={"Shippingpolicy"} />
            <Breadcrumb title="Shipping policy" />
            <section className="policy-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shippingpolicy