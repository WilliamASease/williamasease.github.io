import { useEffect, useState } from "react";
import { Button } from "../Generic/Button";
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
  const { setScreen, difficulty, setDifficulty, song, setSong } = props;

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
        <TextElement text="Beans React" size="large" needsBackGround />
        <TextElement
          text={"Difficulty: " + difficulty}
          size="medium"
          needsBackGround
        />
        <FlexElement orientation="ROW" enforceAlign>
          <Button text={"Easy"} onPress={() => setDifficulty("Easy")} />
          <Button text={"Medium"} onPress={() => setDifficulty("Medium")} />
          <Button text={"Hard"} onPress={() => setDifficulty("Hard")} />
          <Button
            text={"Puyo Must Die!"}
            onPress={() => setDifficulty("Puyo Must Die!")}
          />
        </FlexElement>
        <TextElement text={"Song: " + song} size="medium" needsBackGround />
        <FlexElement orientation="ROW" enforceAlign>
          <Button
            text={"Big In Japan"}
            onPress={() => setSong("Big In Japan")}
          />
          <Button
            text={"Requiem In D"}
            onPress={() => setSong("Requiem In D")}
          />
        </FlexElement>
        <FlexElement orientation="ROW" enforceAlign>
          <Button text={"Gymnopedies"} onPress={() => setSong("Gymnopedies")} />
          <Button
            text={"Laid Back Puyo"}
            onPress={() => setSong("Laid Back Endless Puyo")}
          />
          <Button text={"[Mute]"} onPress={() => setSong("Mute")} />
        </FlexElement>
        <FlexElement orientation="ROW">
          <TextElement text="A = Rotate Left" size="small" needsBackGround />
          <TextElement text="S = Rotate Right" size="small" needsBackGround />
        </FlexElement>
        <TextElement text="Arrow Keys = Move" size="small" needsBackGround />
        <Button text={"Start !!!"} onPress={() => setScreen("game")} />
      </FlexElement>
    </div>
  );
};
