import React from 'react';
import style from './card.module.css';
import logo from './logo.svg';

const CardDetails = () => {
    return (
        
        <>
          <div className={style.card_title}>
            <p className={style.card_title_text}>Our Card</p>
          </div>
          <div className={style.card_content}>
            <p className={style.card_content_text}> This is the content for this particular demonstration card
            </p>
            <img src={logo} alt="sample text"></img>
          </div>
        </>
    )
};
export default CardDetails;