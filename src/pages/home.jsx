import { useState } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import '../component/home.css';

export default function Home() {
    const [searchResults, setSearchResults] = useState([]);

    const searchBooks = async () => {
        const searchQuery = document.getElementById("searchInput").value.trim();
        if (searchQuery === "") {
            alert("Please enter a book title to search.");
            return;
        }

        const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setSearchResults(data.docs);

             // Scroll to search results section
             const resultsSection = document.querySelector(".search-results");
             if (resultsSection) {
                 resultsSection.scrollIntoView({ behavior: "smooth" });
             }

        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while fetching data. Please try again later.");
        }
    };

    const handleSearchKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchBooks();
        }
    };

    const handleAlphabeticalFilter = () => {
        const sortedResults = [...searchResults].sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
        setSearchResults(sortedResults);
    };

    return (
        <>
            <Navbar />
            <div className='home-background'>
                <div className='home-page'>
                    <div className='search-bar'>
                        <h2>Search for a <span className="highlighted">Book</span> </h2>
                        <input type="text" id="searchInput" placeholder="Enter book title" onKeyDown={handleSearchKeyDown} />
                        <button onClick={searchBooks}>Search</button>
                        <button className="filter-button" onClick={handleAlphabeticalFilter}> <img src="../images/logo/arrowup.png" height="10px" alt="Arrow" /> A to z</button>
                        
                    </div>
                </div>
            </div>
            <div className="search-results">
                {/* {searchResults.length === 0 && <p>No results found</p>} */}
                {searchResults.map((book, index) => (
                    <div key={index} className="search-result">
                        <strong>Title:</strong> {book.title}<br />
                        <strong>Author(s):</strong> {book.author_name ? book.author_name.join(", ") : "Unknown author"}

                        <br />
                        <strong>Published Date:</strong> {book.publish_date ? book.publish_date[0] : "Unknown date"}


                        <br />
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="Book Cover" />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
