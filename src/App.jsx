import React from "react";
import { Route } from "react-router-dom";

import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";

import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Navigation />
        <main className="content">
          <Route exact path="/">
            <ProductContextProvider>
              <Products />
            </ProductContextProvider>
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
