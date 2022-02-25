import React from "react";
import style from "./card.module.css";
import CardDetails from "./CardDetails";

const Card = () => {
    return (
        <>
        <div className={style.card_container}>
            <CardDetails></CardDetails>
        </div>
        </>
    )
};

export default Card;