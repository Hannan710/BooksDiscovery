// import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import '../component/about.css';

export default function About(){
    return(

        <>
        <Navbar/>

        <div className="about-container">
            <h2>About Books Discovery</h2>
        <div className="about-section1">
            <div className="about-aim">
                <h3>Our Aim</h3>
                <p>Our goal is to provide users with one-click access to a wide range of books, while also offering easy access to author and publication information on our website.</p>
            </div>
            <div className="about-vision">
                <h3>Our Vision</h3>
                <p>Our vision is to create a world where every individual has access to knowledge and literature with unparalleled ease, fostering a community of informed and inspired minds.</p>
            </div>
        </div>

        {/* ---------------------------------- */}
        <div className="about-section2">
            <div className="about-book">
            <div className="about-book-img">
                <p>Discover comprehensive book details effortlessly. Simply input the books title, and unlock vital information including the authors name and publication date. Streamline your research process with our intuitive platform.</p>
                <img src="./images/logo/book4.jpg" alt="error img" />
            </div>
            </div>

            <div className="about-novel">
            <div className="about-novel-img">
            <h4>Novel</h4>
            <p>Novels are captivating narratives that transport readers to diverse worlds and delve into the depths of human experience through rich storytelling and compelling characters.</p>
            </div>
            </div> 
            
      

            <div className="about-child">
            <div className="about-child-img">
            <h4>Children Books</h4>
            <p>Children books ignite imagination and curiosity, fostering a love for reading through engaging stories and vibrant illustrations. </p>
            </div>
            </div>

        </div>
    
        </div> {/* {container div} */}
<Footer/>


     
        </>
    )
}