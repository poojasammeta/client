import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipeinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await response.json();
        if (jsonData.meals) {
          setInfo(jsonData.meals[0]);
        } else {
          setInfo(null);
        }
      } catch (error) {
        console.error("Error fetching recipe info:", error);
        setInfo(null);
      }
    };

    getInfo();
  }, [mealid]);

  if (!info) {
    return <div>Data Not Found</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (info[`strIngredient${i}`]) {
      ingredients.push(
        `${info[`strIngredient${i}`]} - ${info[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  return (
    <div className="recipeInfo">
      <img src={info.strMealThumb} alt={info.strMeal} />
      <div className="info">
        <h1>Recipe Details</h1>
        <h2> Name : {info.strMeal}</h2>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
  );
};

export default Recipeinfo;
