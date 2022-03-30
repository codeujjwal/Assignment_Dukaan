import React from "react";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
