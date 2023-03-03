import React from "react";
import UseSkills from "./PlayerSkills.jsx"
import BasicAtk from "./BasicAtk.jsx";
import Cure from "./Cure.jsx";
import "../css/playerEnemy.css";
import "../css/bars.css";

function Player({
        player, 
        enemy, 
        skills, 
        setPlayerHp, 
        setPlayerMp, 
        setEnemyHp, 
        setEnemyMp
    }){

    

    return (
            <div className="player">
                <h1 id="player__name" className="player__name">Player</h1>
                <div className="bars__container">
                    <div className="bar__border" id="" >
                        <div className="bars">
                            <div className="hp__bar" id="player__hp__bar" >
                                HP : {player.hp} / {player.maxHp}
                            </div>
                        </div>
                    </div>
                    <div className="bar__border" id="" >
                        <div className="bars">
                            <div className="mp__bar" id="player__mp__bar" >HP :{player.mp} / {player.maxMp}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <BasicAtk 
                    player={player} 
                    enemy={enemy} 
                    setPlayerHp={setPlayerHp} 
                    setPlayerMp={setPlayerMp}
                    setEnemyHp={setEnemyHp} 
                    setEnemyMp={setEnemyMp}
                    />
                    <Cure 
                    player={player}
                    setPlayerHp={setPlayerHp}
                    setPlayerMp={setPlayerMp}
                    />
                    <UseSkills 
                    player={player} 
                    enemy={enemy} 
                    skills={skills} 
                    setPlayerMp={setPlayerMp} 
                    setPlayerHp={setPlayerHp} 
                    setEnemyHp={setEnemyHp}
                    />
                </div>
            </div>
    );
}
export default Player;