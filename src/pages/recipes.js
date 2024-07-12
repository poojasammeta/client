import React from "react";
import { NavLink } from "react-router-dom";

const Recipes = ({ detail }) => {
  console.log(detail);
  return (
    <div className="recipe">
      {!detail
        ? ""
        : detail.map((curItem) => {
            return (
              <div className="recipeImg" key={curItem.idMeal}>
                <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                <p className="style1">{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button> View Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Recipes;
