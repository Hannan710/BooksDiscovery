import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import '../component/novels.css';

export default function Novels() {
    const [searchResults, setSearchResults] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const fetchNovels = () => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10")
            .then(response => response.json())
            .then(data => {
                setSearchResults(data.items); // Update searchResults with fetched novels
                setIsDataFetched(true);
                // Scroll to search results section
                const searchResultsElem = document.querySelector('.search-results-novels');
                if (searchResultsElem) {
                    searchResultsElem.scrollIntoView({ behavior: 'smooth' });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while fetching data. Please try again later.");
            });
    };

    const handleAlphabeticalFilter = () => {
        const sortedResults = [...searchResults].sort((a, b) => {
            const titleA = a.volumeInfo.title.toLowerCase();
            const titleB = b.volumeInfo.title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
        setSearchResults(sortedResults); // Update searchResults with sorted novels
    };

    useEffect(() => {
        // Scroll to search results section
        if (isDataFetched) {
            const searchResultsElem = document.querySelector('.search-results-novels');
            if (searchResultsElem) {
                searchResultsElem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [isDataFetched]);

    return (
        <>
            <Navbar />
            <div className='novels-background'>
                <div className='novels-page'>
                    <div className='search-bar-novels'>
                        <h2>List of <span className="highlighted-novels">Novel</span> Books </h2>
                        
                        <button className='novels-btn' onClick={fetchNovels}>Click to Find Novel</button>
                        <button className="filter-button" onClick={handleAlphabeticalFilter}> <img src="../images/logo/arrowup.png" height="10px" alt="Arrow" /> A to z</button>
                    </div>
                    {isDataFetched && (
                        <div className="search-results-novels">
                            {searchResults.length === 0 && <p>No novels found</p>}
                            {searchResults.map((item, index) => (
                                <div key={index} className="search-result-novels">
                                    <strong>Title:</strong> {item.volumeInfo && item.volumeInfo.title}<br />
                                    <strong>Author(s):</strong> {item.volumeInfo && item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown author"}
                                    <br />
                                    <strong>Publish Date:</strong> {item.volumeInfo && item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "Unknown date"}
                                    <br />
                                    <img src={item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : "No image available"} alt={item.volumeInfo && item.volumeInfo.title} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
