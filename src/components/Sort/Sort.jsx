import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSort,
  closeSortPopUp,
  toggleAsc,
  togglePopUpVisibility,
} from "../../redux/slices/filterSlice";

const Sort = () => {
  const popUpVsible = useSelector((state) => state.filter.popUpVsible);
  const sortBtns = useSelector((state) => state.filter.sortBtns);
  const nowSort = useSelector((state) => state.filter.nowActiveSort);
  const ascStatus = useSelector((state) => state.filter.ascStatus);

  const sortRef = useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handlerClickOutside = (e) => {
      if (!e.path.includes(sortRef.current)) {
        dispatch(closeSortPopUp(false));
      }
    };

    document.body.addEventListener("click", handlerClickOutside);

    return () => {
      document.body.removeEventListener("click", handlerClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          className={ascStatus ? "" : "rotate"}
          onClick={() => {
            dispatch(toggleAsc());
          }}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            dispatch(togglePopUpVisibility());
          }}
        >
          {sortBtns[nowSort].name}
        </span>
      </div>
      <div className={popUpVsible ? `sort__popup active` : `sort__popup`}>
        <ul>
          {sortBtns.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                dispatch(changeSort(item.id));
              }}
              className={sortBtns[nowSort].id === item.id ? "active" : null}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
