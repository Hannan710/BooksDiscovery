import { Link } from "react-router-dom";
import './navbar.css'; // Import the CSS file

// Define Navbar component
function Navbar() {
  return (
    <>
      <div className="nav-component">
      <Link to="/" className="beelogo">
        <img src="./images/logo/beelogo.png" alt="Image Error" />
      </Link>
        <ul>
            
            <li>
              <Link to="/home">Home</Link>
            </li>
            
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/novels">novels</Link>
            </li>
            <li>
              <Link to="/child">children book</Link>
            </li>
          </ul>

      </div>
    </>
  );
}

// Export Navbar component
export default Navbar;
