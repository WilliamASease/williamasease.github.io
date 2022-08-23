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
  const [offSet, setOffSet] = useState(99999999);
  useEffect(() => {
    const interval = setInterval(() => {
      setOffSet(offSet < 99999999 ? offSet + 1 : 0);
    }, 25);
    return () => clearInterval(interval);
  });

  return (
    <div
      style={{
        backgroundImage:
          "url(https://williamasease.github.io/public/puyographics/background.jpg)",
        backgroundRepeat: "repeat",
        backgroundPosition: `right ${offSet}px bottom ${offSet}px `,
        height: "100%",
      }}
    >
      <FlexElement orientation="COL" enforceAlign>
        <TextElement text="Pu Yo Pu Yo" size="large" />
      </FlexElement>
    </div>
  );
};
