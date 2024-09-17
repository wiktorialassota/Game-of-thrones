import { Link } from 'react-router-dom';
import './../styles/navbar.scss';

function Navbar () {
    return (
      <nav className="navbar">
      <h1>Game of Thrones Quotes</h1>
      <Link to="/" className="navbar-link">Home</Link> 
    </nav>       
    );
  };

export default Navbar;