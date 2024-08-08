import React from "react";

function Header(){
    let time = new Date();
    let hours = time.getHours();
    let mode = "";
    if (hours > 20) {
      mode = "nightMode";
    } else if (hours < 20) {
      mode = "dayMode";
    }
    return(
        <header className={`display-flex ${mode}`}>
            <div className="logo">Logo</div>
            <ul className="nav display-flex">
                <li><a href="https://www.google.co.in/">Home</a></li>
                <li><a href="https://www.google.co.in/">About</a></li>
                <li><a href="https://www.google.co.in/">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header