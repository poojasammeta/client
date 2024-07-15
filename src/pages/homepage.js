import React, { useState, useEffect } from "react";
import Recipes from "./recipes";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchDefaultRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const jsonData = await response.json();
        setRecipes(jsonData.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDefaultRecipes();
  }, []);

  const searchRecipes = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const jsonData = await response.json();
      setRecipes(jsonData.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXfoMWI5HDRRVYgSGGXkCmZCzhufIMTJCug&s"
              alt="Logo"
            />
            <h1 className="style">Flavour Hub</h1>
          </div>
          <nav>
            <div className="menu-icon">&#9776;</div>
            <ul className="nav-list">
              <li>
                <a
                  href="https://client-deployment-vulz.onrender.com/login"
                  style={{ color: "maroon" }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">
        <form className="search-box" onSubmit={searchRecipes}>
          <input
            type="text"
            placeholder="Search recipes"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.742 1.147a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </button>
        </form>
        <div className="additional-content">
          <p>
            Find the best recipes for your favorite dishes. Search above or
            browse the recipes below!
          </p>
        </div>
      </div>
      <div>
        <Recipes detail={recipes} />
      </div>
    </div>
  );
};

export default Homepage;
