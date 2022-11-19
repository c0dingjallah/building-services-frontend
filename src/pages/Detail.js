import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
import { useOrdersContext } from '../hooks/useOrdersContext'

const Detail = () => {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const {dispatch} = useOrdersContext()

    const [upackage, setUpackage] = useState('Deluxe');
    const [odate, setOdate] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [oerror, setOerror] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const order = { upackage, odate, pnumber };
    
        localStorage.setItem('orderdetails', JSON.stringify(order))
        //console.log(localStorage)
        
        if (!user) {
            if (window.confirm('You must login to book Reservation.')) 
            {
                return(
                    navigate('/Login', { replace: true })
                    )
            };
            
          }

          if(user){
            
                const username = user.user.name;
                const user_id = user.user._id;
                //console.log(user)
                const orderObj = {username, upackage, odate, pnumber, user_id}
                
                const response = await fetch('/api/order', {
                  method: 'POST',
                  body: JSON.stringify(orderObj),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                  }
                })
                const json = await response.json()
    
                if (!response.ok) {
                  setOerror(json.error)
                  setEmptyFields(json.emptyFields)
                  alert(oerror+" "+emptyFields)
                }
                if (response.ok) {
                  
                  setUpackage('Deluxe')
                  setOdate('')
                  setPnumber('')
                  setOerror(null)
                  setEmptyFields([])
                  localStorage.removeItem("orderdetails");
                  dispatch({type: 'CREATE_ORDER', payload: json})
                    return(
                      navigate('/Dashboard', { replace: true })
                    )
                  
                }
    
          }
       

       
    
      }
 
  return (
    <>

{/* Breadcrumb Start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                    <Link className="breadcrumb-item text-dark" to="/Shop">Shop</Link>
                    <span className="breadcrumb-item active">Shop Detail</span>
                </nav>
            </div>
        </div>
    </div>
    {/* Breadcrumb End */}


    {/* Shop Detail Start */}
    <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light">
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src="img/product-1.jpg" alt="dsdlksdjlskjdslj" />
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-4.jpg" alt="dsdlksdjlskjdslj" />
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-3.jpg" alt="dsdlksdjlskjdslj" />
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-2.jpg" alt="dsdlksdjlskjdslj" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>Building Maintenence</h3>
                    <form onSubmit={handleSubmit}>
                    <div className="control-group">
                        <label>Select A Package</label>
                        <select className="custom-select" 
                        value={upackage}
                        onChange={(e) => setUpackage(e.target.value)}
                        required>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Starter">Starter</option>
                        </select>
                        <p className="help-block text-danger"></p>
                    </div>
                    <label>Choose Date</label>
                    <div className="control-group">
                        <input type="datetime-local" className="form-control" id="name"
                            required="required" 
                            value={odate}
                            onChange={(e) => setOdate(e.target.value)} />
                        <p className="help-block text-danger"></p>
                    </div>
                    <label>Phone Number</label>
                    <div className="control-group">
                        <input type="text" className="form-control" id="email" placeholder="(231)XXX-XXX-XXXX"  
                            required="required" 
                            value={pnumber}
                            onChange={(e) => setPnumber(e.target.value)}
                             />
                        <p className="help-block text-danger"></p>
                    </div>
                    <button className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                        <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (1)</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            <p>Deluxe Maintenence Service</p>
                            <li className="list-group-item px-0">
                                For large scale industrial providers.
                            </li>
                            <p>Intermediate Maintenance Service</p>
                            <li className="list-group-item px-0">
                                For medium size institutions.
                            </li>
                            <p>Starter Maintenance Service</p>
                            <li className="list-group-item px-0">
                                For small or single commercial buildings.
                            </li>
                        </div>
                        
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for "Product Name"</h4>
                                    <div className="media mb-4">
                                        <img src="img/user.jpg" alt="dsdlksdjlskjdslj" className="img-fluid mr-3 mt-1" style={{width: 45}} />
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Dec 2022</i></small></h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Amazing service, highly recommended!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Shop Detail End */}


    </>
  )
}

export default Detail