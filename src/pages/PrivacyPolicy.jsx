import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from "../components/Meta"

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"PrivacyPolicy"} />
            <Breadcrumb title="PrivacyPolicy" />
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

export default PrivacyPolicy