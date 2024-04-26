import { Link } from "react-router-dom";
import "./footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer >
      <div className="footer-box">
        <Link to="/" className="beelogo">
          <img src="./images/logo/beelogo.png" alt="Image Error" />
        </Link>

        <div className="footer-search">
        <h3>ExploreQuest</h3>
          <ul>
            <li>
              <a href="#">Home</a> 
            </li>
            <li>
              <a href="#">Novel</a> 
            </li>
            <li>
              <a href="#">About</a> 
            </li>
            <li>
              <a href="#">Guide</a> 
            </li>
          </ul>
        </div>

        <div className="footer-search">
        <h3>Policy</h3>
          <ul>
            <li>
              <a href="#">User Privacy</a> 
            </li>
            <li>
              <a href="#">Newsletter</a> 
            </li>
            <li>
              <a href="#">Contact</a> 
            </li>
            <li>
              <a href="#">Terms & conditions</a> 
            </li>
          </ul>
        </div>

        
        <div className="sign-up-button">
    <Link to="/contact" className="footer-btn">Contact with us <img src="../images/logo/arrow.png" alt="Arrow" /></Link>
</div>

        
      </div>
    </footer>
  );
}
