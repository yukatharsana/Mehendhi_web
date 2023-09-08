import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard';
import '../style/shophena.css'


const Shophenna = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <meta title="ShopHenna" />
            <Breadcrumb title="ShopHenna" />
            <div className='store-wraper home-wraper-2 py-5'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">SHOP BY CATEGORIES</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>HENNA HITS</li>
                                        <li>HENNA</li>
                                        <li>NAIL HENNA</li>
                                        <li>HENNA HAIR COLOR</li>
                                        <li>HENNA ACCESERIES</li>
                                        <li></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">FILTER BY</h3>
                                <div>
                                    <h5 className='sub-title'>AVAILABILITY</h5>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            In Stock(1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label">
                                            Out Of Stock(0)
                                        </label>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center justify-content-between w-100'>
                                        <div className="form-floating mb-1">
                                            <input type="number" className="form-control w-75 h-25 " id="floatingInput" placeholder="from" />
                                            <label >From</label>
                                        </div>

                                        <div className="form-floating mb-1">
                                            <input type="number" className="form-control w-75 h-25 " id="floatingInput1" placeholder="To" />
                                            <label >To</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">PRODUCTS</h3>
                                <div>
                                    <div className='product-tags d-flex align-items-center gap-10 flex-wrap'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3 m-1'>
                                            ABHA BLACK HENNA
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3 m-1'>
                                            NAIL HENNA
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3 m-1'>
                                            HENNA BIG CONES
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3 m-1'>
                                            ESSENTION OIL
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3 m-1'>
                                            HENNA POWDER 
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3 m-1'>
                                            HAIR DARKENING HENNA
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='w-100 hero'></div>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center '>
                                    <div className='d-flex align-item-center gap-10'>
                                        <p className='mb-0 d-block' style={{ width: "100px" }}>Sort by</p>
                                        <select name=" " className="form-control form-select" id="">
                                            <option value="manual">Features</option>
                                            <option value="best-selling" selected>Best selling</option>
                                            <option value="title-ascending">Alphabatically,A-Z</option>
                                            <option value="title-decending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price,low to high</option>
                                            <option value="price-ascending">Price,high to law</option>
                                            <option value="price-decending">Date, new to old</option>
                                            <option value="created-ascending">Price,low to high</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="totalproducts mb-0">20 products</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img onClick={() => { setGrid(3) }} src="" className='d-block img-fluid' alt="grid" />
                                            <img onClick={() => { setGrid(4) }} src="" className='d-block img-fluid' alt="grid" />
                                            <img onClick={() => { setGrid(6) }} src="" className='d-block img-fluid' alt="grid" />
                                            <img onClick={() => { setGrid(12) }} src="" className='d-block img-fluid' alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list py-5 mb-5 container w-100'>
                                <div className='w-100 d-flex flex-lg-wrap gap-'>
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Shophenna