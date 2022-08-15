import "./App.css";
import Header from "./components/Header/Header";
import "./scss/app.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Basket from "./pages/Basket";

export const searchContext = React.createContext();

function App() {
   const [searchVal, changeSearchVal] = React.useState("");

   return (
      <div>
         <searchContext.Provider value={{searchVal, changeSearchVal}}>
            <Header />
            <div className="wrapper">
               <div className="content">
                  <Routes>
                     <Route path="/" element={<Home/>} />
                     <Route path="/basket" element={<Basket />} />
                     <Route path="*" element={<NotFound />} />
                  </Routes>
               </div>
            </div>
         </searchContext.Provider>
      </div>
   );
}

export default App;
