import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom'
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/store" ? `col-${grid}` : "col - 3 "} `}>

                <Link to='/product/:id' className='product-card position-relative shadow'>
                    <div className="product-image px-2 ">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnss8vm9NybpncPQcyICbq2md7hM6VjWgVA&usqp=CAU' alt="product image" />
                    </div>
                    <div className="Product-details mx-1 mt-3">
                        <h6 className="brand">Havel</h6>
                        <h5 className="product-discription">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, corrupti!
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='Price'>$1000.00</p>
                    </div>
                    <div className='action-bar position-absolute'></div>
                    <div className='d-flex flex-column gap-15'>
                        <Link to="/Cart" className='btn text-white fw-bold cardbtn'>
                            Add to card
                        </Link>

                    </div>
                </Link>
            </div>

        </>
    )
}

export default ProductCard