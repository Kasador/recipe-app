import React from 'react';
import RecipeSearch from '../Components/RecipeSearch';

const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <RecipeSearch />
                <ul>
                    <li>Home</li>
                    <li>Favorites</li>
                </ul>
            </nav>
        </div> 
    );
}

export default Nav;