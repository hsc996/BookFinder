import { useState, useEffect } from "react";
import "../styles/Carousel.css";

export function Carousel({ onMount }) {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=best+selling+fiction&key=${apiKey}`
          );
          const data = await response.json();
          if (data.items) {
            setBooks(data.items);
          } else {
            setBooks([]);
          }
        } catch (error) {
          console.error("An error occurred while fetching books.", error);
        }
      };
  
      fetchBooks();
    }, []);
  
    if (!books.length) {
      return <p>Loading...</p>;
    }

    return(
        <>
            <h2>Bestsellers</h2>
            <div className="carousel-container">
                <div className="carousel-items">
                    {books.map((book, index) => (
                    <div className="carousel-item" key={book.id || index}>
                        <img
                        src={book.volumeInfo.imageLinks?.thumbnail || "placeholder.jpg"}
                        alt={book.volumeInfo.title || "Book Cover"}
                        />
                        <h4 className="name">{book.volumeInfo.title || "Untitled"}</h4>
                        <h4 className="author">By {book.volumeInfo.authors}</h4>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;