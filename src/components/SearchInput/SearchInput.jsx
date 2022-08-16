import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchVal } from "../../redux/slices/filterSlice";
import classes from "./SearchInput.module.scss";

const SearchInput = () => {

   const searchVal = useSelector(state => state.filter.searchValue)

   const dispatch = useDispatch();

   return (
      <div className={classes.inputBlock}>
         <svg className={classes.iconS} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
            <path fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2" d="M13 4A9 9 0 1 0 13 22A9 9 0 1 0 13 4Z" />
            <path fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M26 26L19.437 19.437" />
         </svg>
         <input
            placeholder={"Поиск пиццы..."}
            value={searchVal}
            onChange={(e) => {
               dispatch(changeSearchVal(e.target.value));
            }}
            type="text"
            className={classes.input}
         />
         {searchVal ? (
            <svg onClick={() => dispatch(changeSearchVal(''))} className={classes.iconD} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
               <path d="M25.707,6.293c-0.195-0.195-1.805-1.805-2-2c-0.391-0.391-1.024-0.391-1.414,0c-0.195,0.195-17.805,17.805-18,18c-0.391,0.391-0.391,1.024,0,1.414c0.279,0.279,1.721,1.721,2,2c0.391,0.391,1.024,0.391,1.414,0c0.195-0.195,17.805-17.805,18-18C26.098,7.317,26.098,6.683,25.707,6.293z" />
               <path d="M23.707,25.707c0.195-0.195,1.805-1.805,2-2c0.391-0.391,0.391-1.024,0-1.414c-0.195-0.195-17.805-17.805-18-18c-0.391-0.391-1.024-0.391-1.414,0c-0.279,0.279-1.721,1.721-2,2c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,17.805,17.805,18,18C22.683,26.098,23.317,26.098,23.707,25.707z" />
            </svg>
         ) : null}
      </div>
   );
};

export default SearchInput;
