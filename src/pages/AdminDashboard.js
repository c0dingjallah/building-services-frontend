import { useOrdersContext } from '../hooks/useOrdersContext'
import { useAdminContext } from "../hooks/useAdminContext"
import { useEffect }from 'react'

function Dashboard() {
    const {orders, dispatch} = useOrdersContext()
    const {admin} = useAdminContext()

    useEffect(() => {

        //console.log("admin")
        ///console.log(admin)
        const fetchOrders = async () => {
          const response = await fetch('/api/order',{
            headers: {'Authorization': `Bearer ${admin.token}`},
          })
          const json = await response.json()
    
          if (response.ok) {
            //console.log("admin works")
            dispatch({type: 'SET_ORDERS', payload: json})
          }else{
            //console.log(response.error)
          }
        }
    
        if (admin) {
          fetchOrders()
        }
      }, [])

  return (
    <>
    <hr />
    <div className="row">
       <div className="col-md-12 col-sm-12 col-xs-12 panel-heading">
              Admin Dashboard
               </div>
                      </div>
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
                    <p className="main-text">{orders && <span className="center">{orders.length}</span>   } Tasks</p>
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

