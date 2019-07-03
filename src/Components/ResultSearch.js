import React from 'react';

const ResultSearch = (props) => {
    return (
        <div className="ResultSearch">
            {props.loaded ? <h1>You just searched {props.food}.</h1> : null }
        </div>
    );
}

export default ResultSearch;