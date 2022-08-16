import "./App.css";
import Header from "./components/Header/Header";
import "./scss/app.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Basket from "./pages/Basket";

function App() {
   return (
      <div>
         <Header />
         <div className="wrapper">
            <div className="content">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/basket" element={<Basket />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
