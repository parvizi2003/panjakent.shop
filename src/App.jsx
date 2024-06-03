import React, { useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./components/restaurant/Restaurant";

export default function App() {
  const [restaurant, setRestaurant] = useState();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              state={{ restaurant: restaurant, setRestaurant: setRestaurant }}
            />
          }
        />
        <Route
          path="/restaurants/:id"
          element={<Restaurant restaurant={restaurant} />}
        />
      </Routes>
    </>
  );
}
