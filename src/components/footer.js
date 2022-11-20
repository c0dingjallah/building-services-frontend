import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <>

    {/* Footer Start */}
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">

        <div className="row border-top mx-xl-5 py-4" >
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <Link className="text-primary" to="#">2022</Link>. All Rights Reserved.
                   
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home