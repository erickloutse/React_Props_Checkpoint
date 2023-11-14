import React from "react";
import Player from "./Player";
import Players from "./Players";

const PlayersList = () => {
  return (
    <div className="divi">
      {Players.map((joueur) => (
        <Player key={joueur.id} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;
