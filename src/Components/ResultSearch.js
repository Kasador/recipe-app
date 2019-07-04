import React from 'react';

const ResultSearch = (props) => {
    const styles = {
        color: 'gray'
    }

    return (
        <div className="ResultSearch">
            <div className="ResultsText">
                {props.loaded ? <h1>showing {props.results} results for <span style={styles}>{props.food}</span> out of {props.outOf}.</h1> : null }
            </div>
        </div>
    );
}

export default ResultSearch;