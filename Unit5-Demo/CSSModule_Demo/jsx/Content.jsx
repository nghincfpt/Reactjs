import React from "react";
import ContentCSS from "./Content.module.css";

export const Content = () => {
    return (
        <div className="card">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, rem maxime ratione enim provident vitae voluptatum accusantium repudiandae fugiat in quibusdam neque impedit consequuntur consectetur architecto, cum aliquam ab inventore!
            </p>
            <button className={ContentCSS.btn}>Buy more</button>
        </div>
    );
};