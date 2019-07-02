import React, { useState } from 'react';
import RecipeSearch from '../Components/RecipeSearch';

function App() {
    const [counter, setCounter] = useState({
        counter: 0
    });

    return (
        <div className="App">
            <RecipeSearch counter={counter.counter} />
        </div>
    );
}

export default App;