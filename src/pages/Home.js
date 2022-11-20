import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <>
      {/* Carousel Start */} 
    <div className="container-fluid mb-3">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" style={{height: 430}}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: 'cover'}} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: 700}}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Professional Care</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Building Matiainence With State Of The Art Equipment</p>
                                    <Link className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" to="/Detail">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="product-offer mb-30" style={{height: 200}}>
                    <img className="img-fluid" src="img/offer-4.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <Link to="/Detail" className="btn btn-primary">Shop Now</Link>
                    </div>
                </div>
                <div className="product-offer mb-30" style={{height: 200}}>
                    <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <Link to="/Detail" className="btn btn-primary">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Carousel End */}


    {/* Featured Start */}
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
                    <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
                    <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                    <h5 className="font-weight-semi-bold m-0">Professional Handling</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
                    <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Guaranteed Quality</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
                    <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    {/* Featured End */}


   


    


    {/* Offer Start */}
    <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
            <div className="col-md-6">
                <div className="product-offer mb-30" style={{height: 300}}>
                    <img className="img-fluid" src="img/offer-3.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <Link to="/Detail" className="btn btn-primary">Shop Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-offer mb-30" style={{height: 300}}>
                    <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <Link to="/Detail" className="btn btn-primary">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Offer End */}


   


     {/* Vendor Start */}
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel vendor-carousel">
                    <div className="bg-light p-4">
                        <img src="img/vendor-1.jpg" alt="" />
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-2.jpg" alt="" />
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-3.jpg" alt="" />
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-4.jpg" alt="" />
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-5.jpg" alt="" />
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-6.jpg" alt="" />
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-7.jpg" alt="" />
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-8.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Vendor End */}



    </>
  )
}

export default Home