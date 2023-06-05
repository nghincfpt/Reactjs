import React from "react";
import HeaderCSS from "./Header.module.css";

export const Header = () => {
    return (
        <div className="card">
            <h1>Main Title</h1>
            <button className={HeaderCSS.btn}>View more</button>
        </div>
    );
};