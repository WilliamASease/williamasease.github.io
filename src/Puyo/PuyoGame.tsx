import { PuyoSong } from "./PuyoSong";
import { useEffect, useState } from "react";
import { boardTypes, difficultyType, screenType, songType } from "./PuyoTypes";
import { difficultyToNumericDifficulty } from "./PuyoUtils";
import { TextElement } from "../Generic/TextElement";
import { FlexElement } from "../Generic/FlexElement";
import { Button } from "../Generic/Button";

type IProps = {
  setScreen: React.Dispatch<React.SetStateAction<screenType>>;
  difficulty: difficultyType;
  song: songType;
};

export const PuyoGame = (props: IProps) => {
  const { setScreen, difficulty, song } = props;

  const [numericDifficulty, setNumericDifficulty] = useState<number>(
    difficultyToNumericDifficulty(difficulty)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setNumericDifficulty(numericDifficulty + 0.01);
    }, 17);
    return () => clearInterval(interval);
  });

  return (
    <div
      style={{
        backgroundImage:
          "url(https://williamasease.github.io/public/puyographics/background.jpg)",
        backgroundRepeat: "repeat",
        height: "100%",
        padding: 10,
        position: "static",
      }}
    >
      <div style={{ height: 200 }}>
        <FlexElement orientation="ROW">
          <Button text="Quit (Q)" onPress={() => setScreen("settings")} />
          <Button text="Pause (P)" onPress={() => {}} />
          <TextElement text="Puyo Puyo" size="medium" />
        </FlexElement>
      </div>
      <PuyoSong song={song} />
      <div
        style={{
          width: 300,
          height: 500,
          position: "absolute",
          bottom: 125,
          border: "solid black 1px",
          backgroundColor: "white",
        }}
      >
        <TextElement text="This is the game board." />
      </div>
      <div
        style={{
          width: 250,
          height: 300,
          position: "relative",
          top: 25,
          float: "right",
          border: "solid black 1px",
          backgroundColor: "white",
        }}
      >
        <TextElement text="Score information Appears Here." />
      </div>
      <div
        style={{
          width: 250,
          height: 100,
          position: "relative",
          bottom: 100,
          left: 250,
          float: "right",
          border: "solid black 1px",
          backgroundColor: "white",
        }}
      >
        <TextElement text="Next Puyo Appears Here." />
      </div>
      <div
        style={{
          width: 570,
          height: 100,
          position: "absolute",
          bottom: 10,
          border: "solid black 1px",
          backgroundColor: "white",
        }}
      >
        <TextElement text="Game Messages Appear Here." />
      </div>
    </div>
  );
};
