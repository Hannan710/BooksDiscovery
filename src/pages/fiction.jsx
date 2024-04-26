import { useState } from 'react';
import Navbar from '../component/navbar'; 
import Footer from '../component/footer';
import '../component/fiction.css'; 

export default function FictionBooks() { 
    const [books, setBooks] = useState([]); 
    const [showFooter, setShowFooter] = useState(true); // State to control footer visibility

    const fetchBooks = () => { 
        fetch("https://www.googleapis.com/books/v1/volumes?q=subject:children&maxResults=10")
            .then(response => response.json())
            .then(data => {
                setBooks(data.items);

                // Scroll to search results section
                const searchResults = document.querySelector('.search-results-fiction'); 
                if (searchResults) {
                    searchResults.scrollIntoView({ behavior: 'smooth' });
                }

                // Hide footer after fetching books
                setShowFooter(false);
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while fetching data. Please try again later.");
            });
    };

    const handleAlphabeticalFilter = () => {
        const sortedBooks = [...books].sort((a, b) => {
            const titleA = a.volumeInfo.title.toLowerCase();
            const titleB = b.volumeInfo.title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
        setBooks(sortedBooks);
    };

  

    return (
        <>
            <Navbar /> 
            <div className='fiction-background'> 
                <div className='fiction-page'> 
                    <div className='search-bar-fiction'> 
                        <h2>List of <span className="highlighted-fiction">Children</span> Books </h2> 
                        
                        <button className='fiction-btn' onClick={fetchBooks}>Click to Find Children Books</button> 
                        <button className="filter-button" onClick={handleAlphabeticalFilter}> <img src="../images/logo/arrowup.png" height="10px" alt="Arrow" /> A to z</button>
                    </div>
                    <div className="search-results-fiction"> 
                        {books.length === 0 && <p></p>}
                        {books.map((item, index) => (
                            <div key={index} className="search-result-fiction"> 
                                <strong>Title:</strong> {item.volumeInfo.title}<br />
                                <strong>Author(s):</strong> {item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown author"}

                                <br />
                                <strong>Publish Date:</strong> {item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "Unknown date"}

                                <br />
                                <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : "No image available"} alt={item.volumeInfo.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showFooter && <Footer />} {/* Render footer conditionally based on showFooter state */}
        </>
    );
}
