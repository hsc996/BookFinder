/* eslint-disable react/prop-types */
import '../styles/BookList.css';

export function BookList({ books }) {
    return (
        <>
            <div id="books-container">
                {books.map((book) => {
                    return (
                        <div className="book-items" key={book.id}>
                            {book.volumeInfo.imageLinks && (
                                <img
                                    className='book'
                                    src={book.volumeInfo.imageLinks.smallThumbnail}
                                    alt={book.volumeInfo.title || "Book thumbnail"}
                                />
                            )}
                            <h4 className="name">{book.volumeInfo.title}</h4>
                            <h4 className="author">By {book.volumeInfo.authors}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
}