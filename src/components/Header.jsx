import '../styles/Header.css'
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

export function Header({ onSearch }){
    return(
        <div className="container">
            <div className="header">
                <div className="header-content">
                    <h2 className="header-title">Discover your next read.</h2>
                    <p className="blurb">Welcome to Bibliophile, your go-to platform for discovering books! Explore a vast collection of titles, from timeless classics to the latest bestsellers, with our powerful search tool. Enjoy detailed descriptions, user reviews, and personalised recommendations to help you connect with stories that resonate. Join our community of book lovers today and embark on your next literary adventure!</p>
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
}