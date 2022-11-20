import { Link } from "react-router-dom";

const Shop = () => {
 
  return (
    <>

{/* Breadcrumb Start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                    <Link className="breadcrumb-item text-dark" to="/Shop">Shop</Link>
                    <span className="breadcrumb-item active">Shop List</span>
                </nav>
            </div>
        </div>
    </div>
   {/* Breadcrumb End */}


    {/* Shop Start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4">
                {/* Price Start */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="price-all" readOnly />
                            <label className="custom-control-label" >All Price</label>
                            <span className="badge border font-weight-normal">100</span>
                        </div>
                       
                    </form>
                </div>
                {/* Price End */}
                
                {/* Color Start */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by Location</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="color-all" readOnly />
                            <label className="custom-control-label" >All Locations</label>
                            <span className="badge border font-weight-normal">100</span>
                        </div>
                    </form>
                </div>
                {/* Color End */}

                {/* Size Start */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by avaliability</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="size-all" readOnly />
                            <label className="custom-control-label" >All Avaliable</label>
                            <span className="badge border font-weight-normal">100</span>
                        </div>
                       
                    </form>
                </div>
                {/* Size End */}
            </div>
            {/* Shop Sidebar End */}


            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                            </div>
                            <div className="ml-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#">All</Link>
                                    </div>
                                </div>
                                <div className="btn-group ml-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#">All</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden" >
                                <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                <div className="product-action">
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-shopping-cart"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="far fa-heart"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-sync-alt"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-search"></i></Link>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <Link className="h6 text-decoration-none text-truncate" to="">Building Maintenance Deluxe</Link>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$$$$.$$</h5><h6 className="text-muted ml-2"><del>$$$$.$$</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                                <div className="product-action">
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-shopping-cart"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="far fa-heart"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-sync-alt"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-search"></i></Link>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <Link className="h6 text-decoration-none text-truncate" to="">Building Maintenance Intermediate</Link>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$$$$.$$</h5><h6 className="text-muted ml-2"><del>$$$$.$$</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                                <div className="product-action">
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-shopping-cart"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="far fa-heart"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-sync-alt"></i></Link>
                                    <Link className="btn btn-outline-dark btn-square" to="/Detail"><i className="fa fa-search"></i></Link>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <Link className="h6 text-decoration-none text-truncate" to="">Building Maintenance Starter</Link>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$$$$.$$</h5><h6 className="text-muted ml-2"><del>$$$$.$$</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                    <div className="col-12">
                        <nav>
                          <ul className="pagination justify-content-center">
                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
 
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Shop Product End */}
        </div>
    </div>
    {/* Shop End */}

    </>
  )
}

export default Shop