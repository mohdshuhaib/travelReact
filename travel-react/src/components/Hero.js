import React from "react";

function Hero(){
    let heroText = 'welcome to kattilangadi'
    let styles = {
        color: 'white',
        fontsize: 30,
    };
    return (
        <div className="hero">
            <h3 style={styles}>{heroText}</h3>
        </div>
    )
}

export default Hero