import React from 'react'
import { Link } from "react-router-dom";
import { FaWind} from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = ({ backgroundColor, buttontxt }) => {
  const navbarStyle = {
    backgroundColor: backgroundColor || 'transparent',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: buttontxt || 'black', 
  };

  return (
<nav className="navbar navbar-expand-lg  d-flex align-items-start px-5" style={navbarStyle}>
  <div className="container-fluid">
    <Link className="navbar-brand d-flex" to="#">
      <div><FaWind size={32}/></div>
        <h3 className='fw-bold me-3 text-white'>Techno</h3>
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-dark"><FaBars/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-5 ">
        <li className="nav-item text-white">
          <Link className="nav-link fw-bold me-3 text-white" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item text-white">
          <Link className="nav-link fw-bold me-3 text-white" to="/Team">Company</Link>
        </li>
        <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle fw-bold me-3 text-white" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false ">Service</Link>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to="#">Service One</Link></li>
      <li><Link className="dropdown-item" to="#">Service Two</Link></li>
      <li><Link className="dropdown-item" to="#">Service Three</Link></li>
      <li><Link className="dropdown-item" to="#">Service Four</Link></li>
      <li><Link className="dropdown-item" to="/Services">Service Details</Link></li>
    </ul>
  </li>
        <li className="nav-item me-3">
          <Link className="nav-link fw-bold me-2 text-white">It Solution</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link fw-bold text-white" to="#">Element</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link fw-bold text-white">Blog</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link fw-bold text-white">Contact</Link>
        </li>
      </ul>
      <button type="button" className="btn btn-secondary fw-bold"style={buttonStyle}>Get A Quote</button>
    </div>
  </div>
</nav>
  )
}

export default Navbar
