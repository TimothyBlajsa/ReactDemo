import React from 'react';
import style from './App.css';

const Links = () => {
    return(
        <>
        <footer className={style.footer}>
            <div className={style.footer_link}>
                <a href='https://github.com/TimothyBlajsa/ReactDemo'>Investigate the source code!</a>
            </div>

            <div className={style.footer_link}>
                <a href='https://youtu.be/5aUeSV-beLc'>Check out the YouTube Video!</a>
            </div>
        </footer>
        </>
    )
};

export default Links;