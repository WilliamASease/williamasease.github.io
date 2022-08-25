import { TextElement } from "../Generic/TextElement";

type IProps = {
  frames: number;
  score: number;
  difficulty: number;
};

export const PuyoScore = (props: IProps) => {
  const { frames, score, difficulty } = props;
  return (
    <div>
      <TextElement text="Time:" />
      <TextElement text={Math.round(frames / 100) + " Time"} needsBackGround />
      <TextElement text="Score:" />
      <TextElement text={score + " pts"} needsBackGround />
      <TextElement text="Difficulty:" />
      <TextElement text={difficulty + ""} needsBackGround />
    </div>
  );
};
