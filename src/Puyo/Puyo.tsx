import { useState } from "react";
import { PuyoFailure } from "./PuyoFailure";
import { PuyoGame } from "./PuyoGame";
import { PuyoSettings } from "./PuyoSettings";
import { difficultyType, screenType, songType } from "./PuyoTypes";

export const Puyo = () => {
  const [screen, setScreen] = useState<screenType>("settings");
  const [difficulty, setDifficulty] = useState<difficultyType>("Medium");
  const [song, setSong] = useState<songType>("Big In Japan");

  return (
    <div
      className="puyo"
      style={{ width: 600, height: 700, backgroundColor: "black" }}
    >
      {screen === "settings" && (
        <PuyoSettings
          setScreen={setScreen}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          song={song}
          setSong={setSong}
        />
      )}
      {screen === "game" && (
        <PuyoGame song={song} setScreen={setScreen} difficulty={difficulty} />
      )}
      {screen === "failure" && <PuyoFailure />}
    </div>
  );
};
