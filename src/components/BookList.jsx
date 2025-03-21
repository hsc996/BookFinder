/* eslint-disable react/prop-types */
import '../styles/BookList.css';

export function BookList({ books }) {
    return (
        <>
            <div id="books-container">
            {books.map((book) => {
                    const bookLink = book.volumeInfo.canonicalVolumeLink || `https://books.google.com/books?id=${book.id}`;
                    return (
                        <div className="book-items" key={book.id}>
                            <a href={bookLink} target="_blank" rel="noopener noreferrer">
                                {book.volumeInfo.imageLinks && (
                                    <img
                                        className='book'
                                        src={book.volumeInfo.imageLinks.smallThumbnail}
                                        alt={book.volumeInfo.title || "Book thumbnail"}
                                    />
                                )}
                                {book.volumeInfo.averageRating ? (
                                <div className="stars">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i} className={i < book.volumeInfo.averageRating ? "star filled" : "star"}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-rating">No rating available</p>
                            )}
                            <h4 className="name">{book.volumeInfo.title}</h4>
                            <h4 className="author">By {book.volumeInfo.authors}</h4>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
}