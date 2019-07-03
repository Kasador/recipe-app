import React, { useState }from 'react';
import Axios from 'axios';

const RecipeSearch = () => {
    // API data and info
    const AppId = '4ed96582',
        AppKey = '62c3a0bc3f607c7c08a09fbe51007e87';

    let searchItem;

    // useState hook for input search value and store get response
    const [search, setSearch] = useState({
        value: '',
        recipes: [],
        isLoaded: false
    })

    // search data
    const handlerUpdateSearchValue = (e) => {
        setSearch({...search, value: e.target.value})
        console.log(search);
    }

    // on click search button, query API and get response
    const handleSearchRequest = () => {
        if (search.value === '') {
            alert('The search box is empty!');
        } else {
            searchItem = search.value;
            console.log(searchItem);

            Axios.get('https://api.edamam.com/search?q=' + searchItem + '&app_id=' + AppId + '&app_key=' + AppKey + '&from=0&to=100')
            .then(res => {
                console.log(res.data);
                console.log(res.data.hits.length);

                if (res.data.hits.length === 0) {
                    alert('No results found...');
                } else if (res.data.hits.length !== 0) {
                    alert('Found ' + res.data.hits.length + ' results out of ' + res.data.count + ' total recipes.');

                    setSearch({
                        value: '',
                        recipes: res.data,
                        isLoaded: true
                    })
                }
            });
        }
    }

    return (
        <div className="RecipeSearch">
            <div className="Search">
                <span className="fa fa-search"></span>
                <input placeholder="Search recipes..." value={search.value} onChange={handlerUpdateSearchValue} />
                <button className="SearchBtn" onClick={handleSearchRequest}>Search</button>
            </div>
        </div> 
    );
}

export default RecipeSearch;