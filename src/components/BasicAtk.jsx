import React from "react";

function BasicAtk({player, enemy, setPlayerHp, setEnemyHp}){
    

    function basicAttack(){
        console.log("basic Attack");
        console.log(player.hp + " hp player");
        enemy.hp-=player.atk;
        player.hp-=enemy.atk;
        if(enemy.hp <=0){
            enemy.hp=0;
            console.log(enemy.hp);
            console.log(player.hp);
        }else if(player.hp<=0){
            player.hp=0;
            console.log("Perdiste")
        }else{
            
            console.log("enemy HP: " + enemy.hp);
            console.log("player HP: " + player.hp);
        }
        console.log(player.hp + " es la vida actual")
        setPlayerHp(player.hp);
        setEnemyHp(enemy.hp);
    }
    
    return (
        <div className="basic__atk">
            <button className="button" onClick={()=>basicAttack()}>Basic Attack</button>
        </div>
    );
}
export default BasicAtk;