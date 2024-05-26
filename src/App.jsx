import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Home from "./components/home/Home";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Navbar />
    </>
  );
}
