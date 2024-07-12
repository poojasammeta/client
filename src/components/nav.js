import React from "react";
import { Link, useNavigate } from "react-router-dom";

function nav() {
  return (
    <nav class="navbar">
      <Link to="/" class="navbar-brand"></Link>
      <div class="nav">
        <Link to="/login" class="nav-link"></Link>
        <Link to="/homepage" class="nav-link"></Link>
      </div>
    </nav>
  );
}

export default Navbar;
