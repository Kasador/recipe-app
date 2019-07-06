import React, { useState, useEffect }from 'react';
import Axios from 'axios';
import ResultSearch from './ResultSearch';
import RecipeCard from '../Components/RecipeCard';
import Loading from '../Images/loading.gif';

const RecipeSearch = () => {
    // API data and info
    const AppId = '4ed96582',
        AppKey = '62c3a0bc3f607c7c08a09fbe51007e87';

    let searchItem,
        previousSearch;

    // useState hook for input search value and store get response
    const [search, setSearch] = useState({
        value: '',
        recipes: [],
        save: '',
        isLoaded: false,
        results: 0,
        outOf: 0
    })

    // search data
    const handleUpdateSearchValue = (e) => {
        setSearch({...search, value: e.target.value})
        console.log(search.value);
    }

    // on click search button, query API and get response
    const handleSearchRequest = () => {
        if (search.value === '') {
            alert('The search box is empty!');
        } else {
            setSearch({...search, isLoaded: false, recipes: []});
            searchItem = search.value;
            previousSearch = search.value;
            console.log(searchItem);

            Axios.get('https://api.edamam.com/search?q=' + searchItem + '&app_id=' + AppId + '&app_key=' + AppKey + '&from=0&to=100')
            .then(res => {
                console.log(res.data);

                if (res.data.hits.length === 0) {
                    setSearch({...search, value: '', save: previousSearch, isLoaded: true, results: 0, outOf: 0});
                } else if (res.data.hits.length !== 0) {
                    setSearch({
                        value: '',
                        recipes: res.data,
                        save: previousSearch,
                        isLoaded: true,
                        results: res.data.hits.length,
                        outOf: res.data.count
                    });
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    // on enter key pressed, query search value
    const handleKeyPress = (e) => {
        if(e.keyCode === 13){
            handleSearchRequest();
            // console.log("You've pressed the enter key!");
        }
     }

    useEffect(() => {
        console.log(search.isLoaded);
        if (search.isLoaded) {
            console.log(search.recipes); 
        }
    });

    return (
        <div className="RecipeSearch">
            {/* search box and header picture */}
            <div className="RecipeSearchWrapper">
                <div className="Search">
                    <span className="fa fa-search"></span>
                    <input placeholder="Search recipes..." value={search.value} onChange={handleUpdateSearchValue} onKeyDown={handleKeyPress} />
                    <button className="SearchBtn" onClick={handleSearchRequest}>Search</button>
                </div>
            </div>
            {/* loading */}
            {!search.isLoaded ? 
                <div className="Loading">
                    <img src={Loading} alt="loading" />
                </div> : null}
            {/* results */}
            <ResultSearch 
                food={search.save} 
                loaded={search.isLoaded}
                results={search.results}
                outOf={search.outOf} />
            {/* Recipe cards */}
            <RecipeCard 
                info={search.recipes}
                loaded={search.isLoaded}
                results={search.results} />
        </div>
    );
}

export default RecipeSearch;