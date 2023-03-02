import React from "react";
import "../css/playerSkill.css";

function UseSkills({player, enemy, skills, setPlayerHp, setPlayerMp, setEnemyHp}){

    function skillHandle(id){
        switch(id){
            case 0:
                console.log("usaste :" + skills.name);
                console.log(enemy.hp);
                enemy.hp-=player.atk;
                player.hp-=enemy.atk;
                player.mp-=skills[0].mpCost;
                console.log(skills[0].mpCost + " este es el mpCost");
                if(enemy.hp <=0){
                    enemy.hp=0;
                    console.log("ganaste");
                }else {
                    console.log(`Generaste un dañe de ${player.atk} y al enemigo le quedan ${enemy.hp} de HP`);
                }
                setPlayerHp(player.hp);
                setPlayerMp(player.mp);
                setEnemyHp(enemy.hp);
                break;
            case 1:
                console.log("Skill 2");
                break;
            case 2:
                console.log("Skill 3");
                break;
            default:
                console.log("Skill 4");
                break;
        }
    }
    
    return(
        <div className="skills">
        {skills.map((skill)=>(
                <button className="skill__button" key={skill.id} onClick={() => skillHandle(skill.id)}>
                    <h2>{skill.name}</h2>
                        <p className="skill__p" >ATK : {skill.atk}</p>
                        <p className="skill__p">MPCost : {skill.mpCost}</p>    
                        <div className="skill__p">{skill.drainBlood ? <p className="skill__p">Especial effect Drain {skill.drainBlood} of enemy Blood : </p> : null}{skill.drainBlood || ""}</div>
                </button>
        ))}
    </div>
    )
}
export default UseSkills;