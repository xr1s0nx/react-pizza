import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
   return (
      <>
         <h1 className={classes.title}>
            <span>404</span>
            <br />
            Страница не найдена 😕
         </h1>
         <Link className={classes.button} to={'/'}>На главную</Link>
      </>
   );
};

export default NotFoundBlock;
