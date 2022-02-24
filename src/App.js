import "./App.css";
import React, { useState } from "react";
import FooterC from "./Components/Footer/FooterC";
import NavbarC from "./Components/Navbar/NavbarC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./NavigationPage/Home";
import Contact from "./NavigationPage/Contact";
import MoviesList from "./NavigationPage/MoviesList/MoviesList";
import { moviesData } from "./Constants/Data";
import Details from "./NavigationPage/MoviesList/Details";

function App() {
  const [movies, setMovies] = useState(moviesData);
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarC />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/movieslist/:id" element={<Details movies={movies} />} />
        </Routes>
        <FooterC />
      </BrowserRouter>
    </div>
  );
}

export default App;
