import React from "react";
import "../css/darkMode.css"

function DarkMode(){

    function toggleDark(){
        const main = document.getElementById("main");
        main.classList.toggle("dark")
        /* const skillButton = document.getElementsByClassName("skill__button");
        skillButton.classList.toggle("dark"); */
    }
    /* function toggleAnimation () {
        let animationButton = document.getElementsByID("circle");
        animationButton.classList.toggle("move")
    }
    const animationButton = document.getElementsByID("circle");
    animationButton.addEventListener("click", toggleAnimation);
 */
    return(
        <>
            <button className="buttonDarkMode" onClick={() => toggleDark()}>
                darkMode
            </button>
            <div className="buttonAnimation">
                <div className="circle" id="circle"></div>
            </div>
        </>
    )
}
export default DarkMode;