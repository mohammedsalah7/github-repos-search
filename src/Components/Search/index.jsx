import React from 'react';
import "./style.css";
const Search = () => {
    return (
        <section className="container-search">
        <form>		    
            <input type="search" placeholder="What are you looking for?"/>		    	
            <button>Search</button>
        </form>
    </section>

    );
}

export default Search;
