import { useNavigate, Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"
import { useState } from "react"
import { useOrdersContext } from '../hooks/useOrdersContext'
import { useAuthContext } from '../hooks/useAuthContext'




const Signup = () => {
  const {orders, dispatch} = useOrdersContext()
  const { user } = useAuthContext()
 
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [emailornum, setEmailornum] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading, userObj} = useSignup()
  const [oerror, setOerror] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const delay = async (ms) => new Promise(res => setTimeout(res, ms));
      
    const handleSubmit = async (e) => {
        e.preventDefault();


        await signup(name, emailornum, password)
        //await delay(000);
        

          console.log(userObj)
          if (localStorage.getItem("orderdetails") !== null) {
            const savedOrder = JSON.parse(localStorage.getItem("orderdetails"))
            //console.log("saved order")
            //console.log(savedOrder)
            const upackage = savedOrder.upackage;
            const odate = savedOrder.odate;
            const pnumber = savedOrder.pnumber;
            const user = JSON.parse(localStorage.getItem('user'))
            //console.log("user object")
            //console.log(user)
            const user_id = user.user._id;
            const username = name;
            
            //console.log("user id")
            //console.log(user_id)
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
             //console.log(json.error)
            }
            if (response.ok) {

              setName('')
              setEmailornum('')
              setPassword('')
              setOerror(null)
              setEmptyFields([])
              localStorage.removeItem("orderdetails");
              dispatch({type: 'CREATE_ORDER', payload: json})
                return(
                  navigate('/Dashboard', { replace: true })
                )
             
              }
          }else{
            
            setName('')
            setEmailornum('')
            setPassword('')
            setOerror(null)
            setEmptyFields([])
            
              return(
                navigate('/Shop', { replace: true })
              )           

          }

          
          
          
        
    
      }

  return (
    <section className="vh-100 bg-image" style={{marginBottom: 100}}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6" >
            <div className="card" style={{borderRadius: 15}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
  
                <form onSubmit={handleSubmit}>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example1cg" 
                    className="form-control form-control-lg" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label className="form-label" >Your Name</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example3cg" 
                    className="form-control form-control-lg" 
                    value={emailornum}
                    onChange={(e) => setEmailornum(e.target.value)}
                    />
                    <label className="form-label" >Your Email Or Phone Number</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cg" 
                    className="form-control form-control-lg" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" >Password</label>
                  </div>
  
  
                  <div className="d-flex justify-content-center">
                    <button type="submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{color: 'white'}}>Register</button>
                  </div>
                  </form>
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/Login"
                      className="fw-bold text-body"><u>Login here</u></Link></p>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup