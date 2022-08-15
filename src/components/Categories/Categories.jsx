import React from "react";

const Categories = (props) => {
   const [liMas, MasChange] = React.useState({
      AllNavBtns: [
         { id: 1, text: "Все", active: true },
         { id: 2, text: "Мясные", active: false },
         { id: 3, text: "Вегетарианские", active: false },
         { id: 4, text: "Гриль", active: false },
         { id: 5, text: "Острые", active: false },
         { id: 6, text: "Закрытые", active: false },
      ],
   });

   const liClick = (id) => {
      MasChange({
         ...liMas,
         AllNavBtns: liMas.AllNavBtns.map((item) => {
            item.id === id ? (item.active = true) : (item.active = false);
            return item;
         }),
      });
      let nowSelect = liMas.AllNavBtns.filter((item) => item.id === id)[0].text;
      props.changeCategorie(id-1, nowSelect)
   };

   return (
      <div className="categories">
         <ul>
            {liMas.AllNavBtns.map((li) => (
               <li
                  key={li.id}
                  onClick={() => {
                     liClick(li.id);
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
