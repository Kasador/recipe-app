import React, { useState }from 'react';
import Axios from 'axios';

const RecipeSearch = () => {
    // const [user, setUser] = useState({
    //     persons: [],
    //     isLoaded: false
    // });
    
    // const Search = () => {
    //     Axios.get('https://api.edamam.com/search?q=chicken&app_id=4ed96582&app_key=62c3a0bc3f607c7c08a09fbe51007e87&from=0&to=3&calories=591-722&health=alcohol-free')
    //     .then(res => {
    //         console.log(res.data);
    //         setUser({
    //             persons: res.data,
    //             isLoaded: true
    //         })
    //     });
    // }

    return (
        <div className="RecipeSearch">
            <div className="search">
                <span className="fa fa-search"></span>
                <input placeholder="Search recipes..." />
            </div>
        </div> 
    );
}

export default RecipeSearch;