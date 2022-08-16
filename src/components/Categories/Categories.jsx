import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive, changeSearchVal } from "../../redux/slices/filterSlice";

const Categories = () => {

   const navBtns = useSelector((state) => state.filter.navBtns);
   const dispatch = useDispatch();

   return (
      <div className="categories">
         <ul>
            {navBtns.map((li) => (
               <li
                  key={li.id}
                  onClick={() => {
                     dispatch(changeActive(li.id))
                     dispatch(changeSearchVal(''))
                  }}
                  className={li.active ? "active" : null}
               >
                  {li.text}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;
