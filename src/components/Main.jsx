import React, {useState, useEffect}  from "react";
import Player from "./Player.jsx";
import Enemy from "./Enemy.jsx";

import {player, enemy, skills} from "../data/playerEnemyData.js";

import "../css/main.css";
import "../css/playerEnemy.css";

function Main(){
    
    const [playerHp, setPlayerHp] = useState(player.hp);
    const [playerMp, setPlayerMp] = useState(player.mp);
    useEffect(() => {
        document.getElementById("player__hp__bar").style.width = `${(playerHp / player.maxHp) * 100}%`;
        document.getElementById("player__mp__bar").style.width = `${(playerMp / player.maxMp)* 100}%`;
    }, [playerHp, playerMp]);

    
    const [enemyHp, setEnemyHp] = useState(enemy.hp); 
    const [enemyMp, setEnemyMp] = useState(enemy.mp);
    useEffect(() => {
        document.getElementById("enemy__hp__bar").style.width = `${(enemyHp / enemy.maxHp) * 100}%`;
        document.getElementById("enemy__mp__bar").style.width = `${(enemyMp / enemy.maxMp)*100}%`;
    }, [enemyHp, enemyMp ])

    return(
        <main className="main" id="main">
            <Player 
            player={player} 
            skills={skills} 
            enemy={enemy} 
            setPlayerHp={setPlayerHp} 
            setPlayerMp={setPlayerMp} 
            setEnemyHp={setEnemyHp} 
            setEnemyMp={setEnemyMp}/>
            <Enemy enemy={enemy} 
            setEnemyHp={setEnemyHp} 
            setEnemyMp={setEnemyMp}/>
        </main>
    );
}
export default Main;