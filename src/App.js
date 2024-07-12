import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Homepage from "./pages/homepage";
import Recipeinfo from "./pages/recipeinfo";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" component={Register} />
          <Route
            exact
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Homepage />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route path="/:mealid" element={<Recipeinfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
