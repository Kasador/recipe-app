import React, { useState, useEffect } from 'react';
import Img from '../Images/test/recipes.png';

const RecipeCard = (props) => {
    const [data, setData] = useState({
        recipes: [],
        isLoaded: false
    });

    const handleInfo = () => {
        if (props.loaded && props.results !== 0) {
            setData({
                recipes: props.info,
                isLoaded: true
            });
        } else if (props.loaded && props.results === 0) {
            setData({
                recipes: [],
                isLoaded: false
            });
        }
    }

    useEffect(() => {
        handleInfo();
    }, [props.results]);

    return (
        <div className="RecipeCard">
            {data.isLoaded ?
            <>{data.recipes.map((recipe) => {
            return (
                <div className="RecipeCardWrapper">
                    <div className="RecipeTopHalf">
                        <img src={Img} alt="test" className="RecipeImages" />
                        <div className="RecipeMainInfo">
                            <h1 className="RecipeTitle">{recipe.hits.recipe.label}</h1>
                            <div className="RecipeInfoBasic">
                                <span className="RecipeTime">Prep Time: 2:00</span>
                                <span className="RecipeCalories">Total Cal: 566</span>
                            </div>
                        </div>
                    </div>
                    <div className="RecipeBottomHalf">
                        <div className="RecipeIngredients">
                            <ul>
                                <li>ingredient name</li>
                                <li>ingredient name</li>
                                <li>ingredient name</li>
                            </ul>
                        </div>
                    </div>
                </div>);
            })}</> : null}
        </div>
    );
}

export default RecipeCard;