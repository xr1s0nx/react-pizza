import React from "react";
import Sort from "../Sort/Sort";
import Categories from "../Categories/Categories";
import PizzaSkeleton from "../PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import { searchContext } from "../../App";

const Menu = () => {


   const [pizzas, loadPizzas] = React.useState([]);
   const [load, loadToggle] = React.useState(false);

   const [nowSort, changeSort] = React.useState(0);
   const [nowCategorie, changeCategorie] = React.useState(0);
   const [categorieName, changeName] = React.useState("Все");
   const [ascStatus, ascToggle] = React.useState(false);

   console.log(ascStatus)

   const changeSortCallback = (id) => {
      changeSort(id);
   };

   const {searchVal} = React.useContext(searchContext);

   const ascToggleClick = () => {
      ascToggle(!ascStatus);
   }

   const changeCategorieCallback = (id, name) => {
      changeCategorie(id);
      changeName(name);
   };

   React.useEffect(() => {
      const sortTypes = ["rating", "price", "title"];
      

      loadToggle(true);
      fetch(
         'https://62f7bd69ab9f1f8e89029709.mockapi.io/pizzas?' + 
         `${`sortBy=${sortTypes[nowSort]}&order=${ascStatus ? `asc` : `desc`}`}${nowCategorie === 0 ? `` : `&category=${nowCategorie}`}${searchVal === '' ? '' : `&search=${searchVal}`}`
      )
         .then((response) => {
            return response.json();
         })
         .then((response) => {
            loadPizzas(response);
            loadToggle(false);
         });
   }, [nowCategorie, nowSort, ascStatus, searchVal]);

   return (
      <div className="container">
         <div className="content__top">
            <Categories changeCategorie={changeCategorieCallback} />
            <Sort ascStatus={ascStatus} ascToggleClick={ascToggleClick} nowSort={nowSort} changeSort={changeSortCallback} />
         </div>
         <h2 className="content__title">{categorieName} пиццы</h2>
         <div className="content__items">
            {load ? (
               <>
                  <PizzaSkeleton />
                  <PizzaSkeleton />
                  <PizzaSkeleton />
                  <PizzaSkeleton />
               </>
            ) : (
               pizzas.length === 0 ?
               <h1 className="pizzas-notFound">Пиццы не найдены</h1>
               :
               pizzas.map((pizza) => {
                  return <PizzaBlock key={pizza.id} {...pizza} />;
               })
            )}
         </div>
      </div>
   );
};

export default Menu;
