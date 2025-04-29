import './Navbar.css';
import { Link } from 'react-router-dom';

function Sidebar () {
    return <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="./AddNewForm"> Add new recipes! </Link>
  </nav>
}

export {Sidebar};