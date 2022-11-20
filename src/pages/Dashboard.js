import { useOrdersContext } from '../hooks/useOrdersContext'
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect }from 'react'

function Dashboard() {
    const {orders, dispatch} = useOrdersContext()
    const {user} = useAuthContext()

    useEffect(() => {

        //console.log("user")
        //console.log(user)
        const fetchOrders = async () => {
          const response = await fetch('/api/order/'+user.user._id, {
            headers: {'Authorization': `Bearer ${user.token}`},
          })
          const json = await response.json()
    
          if (response.ok) {
            //console.log("it works")
            dispatch({type: 'SET_ORDERS', payload: json})
          }else{
            //console.log(response.error)
          }
        }
    
        if (user) {
          fetchOrders()
        }
      }, [])

  return (
    <>
                      <hr />
                <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-red set-icon">
                    <i className="faa fa-envelope-o"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{orders && <span className="center">{orders.length}</span>}New</p>
                    <p className="text-muted">Messages</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                    <i className="fa fa-bars"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{orders && <span className="center">{orders.length}</span>} Tasks</p>
                    <p className="text-muted">Remaining</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue set-icon">
                    <i className="faa fa-bell-o"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{orders && <span className="center">{orders.length}</span>} New</p>
                    <p className="text-muted">Notifications</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-brown set-icon">
                    <i className="fa fa-rocket"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{orders && <span className="center">{orders.length}</span>} Orders</p>
                    <p className="text-muted">Pending</p>
                </div>
             </div>
		     </div>
			</div>
            <hr />   

            <div className="row">
                <div className="col-md-12">
                {/* Advanced Tables */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                             Advanced Tables
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Package</th>
                                            <th>Reservation Date</th>
                                            <th>Phone Number</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody >
                                    {orders && orders.map((order, index) => (
                                    
                                    
                                        <tr className="odd gradeX" key={order._id}>
                                            <td className="center">{index + 1}</td>
                                            <td>{order.username}</td>
                                            <td>{order.upackage}</td>
                                            <td>{order.odate}</td>
                                            <td className="center">{order.pnumber}</td>
                                        </tr>
                                    
                                       
                                        ))}

                                 </tbody>    
                                </table>
                            </div>
                            
                        </div>
                    </div>
                {/*End Advanced Tables */}
                </div>
            </div>
    </>
  );
}

export default Dashboard;

