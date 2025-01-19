import { useEffect, useState } from "react";
import { BookList } from "./BookList.jsx";
import { Header } from "./Header.jsx";
import '../styles/SearchPage.css';

export function SearchPage(){
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const handleSearch = (searchTerm) => {
        setQuery(searchTerm);
    }
    
    useEffect(() => {
        const fetchBooks = async () => {
            if (!query) return;

            try {
                const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
                const data = await response.json();
                if (data.items) {
                    setBooks(data.items);
                } else {
                    setBooks([]);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();

    }, [query]);

    return(
        <>
            <div className="search-bar">
                <Header onSearch={handleSearch} />
                <div className="search-results">
                    <BookList books={books}/>
                </div>
            </div>
        </>
    );
};


export default SearchPage;


