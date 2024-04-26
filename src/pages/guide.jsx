/* eslint-disable react/no-unescaped-entities */
import Navbar from "../component/navbar";
import '../component/guide.css';
import Footer from "../component/footer";


export default function Guide(){


    

    return(
        <>
        <Navbar/>

        <div className="guide-container">
            <div className="guide-book">
                <h2>Welc<span>o</span>me to Gu<span>i</span>de B<span>oo</span>k</h2>
                
            </div>
       
      

            <div className="frontpage">
            <p><span>- </span>Front Page</p>
                <img src="./images/logo/frontpage.png" alt="error img" height="100%" width="70%" />
            </div>

            <div className="homepage">
            <p><span>- </span>Home Page</p>
            <span className="homepagep">Search for books effortlessly by "Typing" the title in the search bar to unveil key details including the title, author, and publication date. </span>
                <img src="./images/logo/homepage.png" alt="error img" height="100%" width="70%" />
            </div>

            <div className="aboutpage">
            <p><span>- </span>About Page</p>
            <span className="aboutpagep">Welcome to our About page, where we aim to provide insight into our mission, values, and team. Discover the story behind our brand, learn about our dedication to customer satisfaction, and meet the individuals driving our vision forward. </span>
                <img src="./images/logo/aboutpage.png" alt="error img" height="100%" width="70%" />
            </div>

            <div className="novelpage">
            <p><span>- </span>Novel Page</p>
            <span className="novelpagep">The NovelPage is your gateway to a world of literary exploration and discovery. Dive into the realm of fiction as you peruse a curated selection of captivating novels across genres. Whether you're seeking tales of romance, mystery, adventure, or fantasy, NovelPage offers a diverse collection to satisfy every reader's appetite. </span>
                <img src="./images/logo/novel page.png" alt="error img" height="100%" width="70%" />
            </div>

            <div className="childpage">
            <p><span>- </span>Novel Page</p>
            <span className="childpagep">The NovelPage is your gateway to a world of literary exploration and discovery. Dive into the realm of fiction as you peruse a curated selection of captivating novels across genres. Whether you're seeking tales of romance, mystery, adventure, or fantasy, NovelPage offers a diverse collection to satisfy every reader's appetite. </span>
                <img src="./images/logo/childpage.png" alt="error img" height="100%" width="70%" />
            </div>
        </div>

        <div className="guide-video">
            
        <video className="guide-video-video" loop autoPlay>
        <source src="/videos/fp.mp4"></source>
        </video>
       </div>

        <Footer/>
        </>
    )
}