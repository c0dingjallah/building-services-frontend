import { useNavigate, Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAdminLogout } from '../hooks/useAdminLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useAdminContext } from '../hooks/useAdminContext'

const Navbar = () => {

    const { logout } = useLogout()
    const { adminlogout } = useAdminLogout()
    const { user } = useAuthContext()
    const { admin } = useAdminContext()
    
    const navigate = useNavigate()
  
    const handleClick = () => {
      logout()
        return(
            navigate('/', { replace: true })
            )
      
    }

    const handleAdmin = () => {
        adminlogout()
          return(
              navigate('/', { replace: true })
              )
        
      }

  return (
    <header>
    <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <Link className="text-body mr-3" to="/AdminLogin">Admin</Link>
                    <Link className="text-body mr-3" to="">Contact</Link>
                    <Link className="text-body mr-3" to="">Help</Link>
                    <Link className="text-body mr-3" to="">FAQs</Link>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                        <div className="dropdown-menu dropdown-menu-right">
                        {admin && (
                                <>
                                <button className="dropdown-item" type="button">{admin.admin.name}</button>
                                <button className="dropdown-item" type="button" onClick={handleAdmin}>Log out</button>
                                </>
                            )}
                            {user && (
                                 <>
                                <button className="dropdown-item" type="button">{user.user.name}</button>
                                <button className="dropdown-item" type="button" onClick={handleClick}>Log out</button>
                                </>
                            )}
                            
                            {!user && (
                                <>
                                
                            <Link to="/Login"><button className="dropdown-item" type="button">Sign in</button></Link>
                            <Link to="/Signup"><button className="dropdown-item" type="button">Sign up</button></Link>
                            </>
                            )}
                            </div>
                    </div>
                    <div className="btn-group mx-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">USD</button>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">EN</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
                <Link to="" className="text-decoration-none">
                    <span className="h1 text-uppercase text-primary bg-dark px-2">Kpui</span>
                    <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Services</span>
                </Link>
            </div>
            <div className="col-lg-4 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+077 000 0000</h5>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, padding: "0 30"}}>
                    <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Menu</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30)', zIndex: 999}}>
                    <div className="navbar-nav w-100">
                        <Link to="/Shop" className="nav-item nav-link">Services</Link>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <Link to="" className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Kpui</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Services</span>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/Shop" className="nav-item nav-link">Shop</Link>
                            {user && (
                                <Link to="/Dashboard" className="nav-item nav-link">Dashboard</Link>
                            )}
                            
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Navbar