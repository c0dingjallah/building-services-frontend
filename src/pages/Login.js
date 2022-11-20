import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"
import { useState } from "react"

const Login = () => {
  const navigate = useNavigate();

  const [emailornum, setEmailornum] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin()
    
    const handleSubmit = async (e) => {
        e.preventDefault();


        await login(emailornum, password)

        if(error === null){
          return(
            navigate('/Shop', { replace: true })
            )
        }
    
      }


  return (
    <section className="vh-100 gradient-custom" style={{marginBottom: 100}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase" style={{color: 'white'}}>Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <form onSubmit={handleSubmit}>
              <div className="form-outline form-white mb-4">
                <input type="text" id="typeEmailX" 
                className="form-control form-control-lg" 
                value={emailornum}
                onChange={(e) => setEmailornum(e.target.value)}
                />
                <label className="form-label" style={{float: 'left'}} >Email or Phone Number</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" 
                className="form-control form-control-lg" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" style={{float: 'left'}} >Password</label>
              </div>


              <button className="btn btn-outline-light btn-lg px-5" style={{float: 'right'}} >Login</button>
              </form>
             

            </div>

            <div>
              <p className="mb-0">Don't have an account? <Link to="/Signup" className="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login