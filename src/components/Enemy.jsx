import React from "react";
import "../css/bars.css";


function Enemy({enemy, setEnemyHp, setEnemyMp}){

    return (
        <>
            <div className="enemy">
                <h1 id="enemy__name" className="enemy__name">Enemy</h1>
                <div className="bars__container">
                <div className="bar__border" id="" >
                    <div className="bars">
                        <div className="hp__bar" id="enemy__hp__bar" >HP : {enemy.hp} / {enemy.maxHp}</div>
                    </div>
                </div>
                <div className="bar__border" id="" >
                    <div className="bars">
                        <div className="mp__bar" id="enemy__mp__bar" >MP : {enemy.mp} / {enemy.maxMp}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Enemy;