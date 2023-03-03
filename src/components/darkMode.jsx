import React/* ,{useState} */ from "react";
import "../css/darkMode.css"

function DarkMode(){

    function toggleDark(){
        const main = document.getElementById("main");
        main.classList.toggle("dark")
        /* const skillButton = document.getElementByClassName("skill__button");
        skillButton.classList.toggle("dark"); */
    }
    /* const [circle, setCircle] = useState(false);
    function handlClickCircle(){
        setCircle(!circle);
    }
       */


    return(
        <>
            <button 
            className="buttonDarkMode" onClick={() => toggleDark()}>
                darkMode
            </button>
            <div className="buttonAnimation">
                <div className={`circle `}
                 /* onClick={handlClickCircle()} */ id="circle"></div>
            </div>
        </>
    )
}
export default DarkMode;