import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Shop from './pages/Shop'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import Navbar from './components/Navbar'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
             <Route 
              path="/Shop" 
              element={<Shop />} 
            />
            <Route 
              path="/Detail" 
              element={<Detail />} 
            />
            <Route 
              path="/Login" 
              element={<Login />} 
            />
            <Route 
              path="/Signup" 
              element={<Signup />} 
            />
            <Route 
              path="/Dashboard" 
              element={<Dashboard />} 
            />
            <Route 
              path="/AdminDashboard" 
              element={<AdminDashboard />} 
            />
            <Route 
              path="/AdminLogin" 
              element={<AdminLogin />} 
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

