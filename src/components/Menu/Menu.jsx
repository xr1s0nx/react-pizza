import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPizzas, toggleLoad } from "../../redux/slices/pizzasSlice";
import Sort from "../Sort/Sort";
import Categories from "../Categories/Categories";
import PizzaSkeleton from "../PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import { changeActive } from "../../redux/slices/filterSlice";
import qs from "qs";
import * as axios from "axios";
import { useNavigate } from "react-router-dom";
import { setTotalCount, setTotalPrice } from "../../redux/slices/cartSlice";

const Menu = () => {
  const nowFilter = useSelector((state) => state.filter.nowActiveFilter);
  const pizzas = useSelector((state) => state.pizzas.pizzas);
  const categorieName = useSelector((state) => state.filter.categorieName);
  const load = useSelector((state) => state.pizzas.load);
  const nowActiveSort = useSelector((state) => state.filter.nowActiveSort);
  const ascStatus = useSelector((state) => state.filter.ascStatus);
  const searchVal = useSelector((state) => state.filter.searchValue);
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  React.useEffect(() => {
    const sortTypes = ["rating", "price", "title"];
    const sortType = sortTypes[nowActiveSort];
    const order = ascStatus ? "asc" : "desc";
    const filter = nowFilter === 0 ? "" : `&category=${nowFilter}`;

    if (searchVal !== "") {
      dispatch(changeActive(0));
    }
    dispatch(toggleLoad(true));
    axios
      .get(
        `https://62f7bd69ab9f1f8e89029709.mockapi.io/pizzas?sortBy=${sortType}&order=${
          order + filter + `&${searchVal === "" ? "" : "search=" + searchVal}`
        }`
      )
      .then((response) => {
        dispatch(setPizzas(response.data));
        dispatch(toggleLoad(false));
      });
  }, [nowFilter, dispatch, nowActiveSort, ascStatus, searchVal]);

  React.useEffect(() => {
    const sortTypes = ["rating", "price", "title"];

    const queryString = qs.stringify({
      sortType: sortTypes[nowActiveSort],
      nowFilter,
      ascStatus,
    });
    navigate(`?${queryString}`);
  }, [nowFilter, dispatch, nowActiveSort, ascStatus, searchVal, navigate]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />

        <Sort />
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
        ) : pizzas.length === 0 ? (
          <h1 className="pizzas-notFound">Пиццы не найдены</h1>
        ) : (
          pizzas.map((pizza) => {
            return <PizzaBlock key={pizza.id} {...pizza} />;
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
