import React from "react";

function Cure({player, setPlayerHp, setPlayerMp}){
    function cureHp(){
        player.hp += player.magicAtk;
        setPlayerHp(player.hp);
        player.mp-=player.magicAtk;
        setPlayerMp(player.mp);
    }



    return(
        <div className="Cure">
            <button className="cureButton" onClick={() => cureHp()}>Cure</button>
        </div>
    )
}
export default Cure;