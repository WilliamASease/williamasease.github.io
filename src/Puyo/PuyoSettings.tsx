import { useEffect, useState } from "react";
import { FlexElement } from "../Generic/FlexElement";
import { TextElement } from "../Generic/TextElement";
import { difficultyType, screenType, songType } from "./PuyoTypes";

type IProps = {
  setScreen: React.Dispatch<React.SetStateAction<screenType>>;
  difficulty: difficultyType;
  setDifficulty: React.Dispatch<React.SetStateAction<difficultyType>>;
  song: songType;
  setSong: React.Dispatch<React.SetStateAction<songType>>;
};

export const PuyoSettings = (props: IProps) => {
  const [offSet, setOffSet] = useState(700);
  useEffect(() => {
    const interval = setInterval(() => {
      setOffSet(offSet > 0 ? offSet - 1 : 700);
    }, 25);
    return () => clearInterval(interval);
  });

  return (
    <>
      <img
        src="https://williamasease.github.io/puyographics/background.jpg"
        style={{
          position: "absolute",
          transform: `translate(${offSet}px, ${offSet}px)`,
        }}
      />
      <FlexElement orientation="COL" enforceAlign>
        <TextElement text="Pu Yo Pu Yo" size="large" />
      </FlexElement>
    </>
  );
};
