import { useState } from "react";
import PropTypes from 'prop-types';


export function SearchBar({ onSearch }){{
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        onSearch(search);
        setSearch("");
    };

    return(
        <div className="search-bar">
            <div className="search-bar>">
                    <input
                    className="user-input"
                    type="text"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
        </div>
    );
}}


SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}


export default SearchBar;