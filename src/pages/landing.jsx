import { Link } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const [showWelcome, setShowWelcome] = useState(false);

  function showWelcomeMessage() {
    setShowWelcome(true);
    setTimeout(() => {
      setShowWelcome(false);
    }, 5000); // Hide message after 5 seconds
  }

   // Handle keyboard events for showing welcome message
   function KeyboardPress(event) {
    if (event.key === "Enter") {
      showWelcomeMessage();
    }
  }


  return (
    <>
      {/* <div className="landing-container"> */}
        <nav>
          <div className="beelogo" onClick={showWelcomeMessage} onKeyDown={KeyboardPress}
          tabIndex={0}> 
            <img src="./images/logo/beelogo.png" alt="Image Error" />
          </div>

          <ul>
            
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/guide">Guide</Link>
            </li>
            
            <li>
              <Link to="/novels">novels</Link>
            </li>
            <li>
              <Link to="/child">children book</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <video className="back-video" loop autoPlay muted>
          <source src="\videos\background video.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <h1>Books Discovery</h1>
          <br></br>
          <a href="home">Explore books</a>
        </div>
        {showWelcome && (
          <div className="welcome-message">Welcome to Book Discovery!</div>
        )}
      {/* </div> */}
    </>
  );
}
