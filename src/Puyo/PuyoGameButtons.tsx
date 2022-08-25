import { Button } from "../Generic/Button";
import { FlexElement } from "../Generic/FlexElement";
import { TextElement } from "../Generic/TextElement";
import { screenType } from "./PuyoTypes";

type IProps = {
  setScreen: React.Dispatch<React.SetStateAction<screenType>>;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
  fireMessage: (arg0: string, arg1: number) => void;
  pause: boolean;
  muted: boolean;
  fps: number;
  frame: number;
};

export const PuyoGameButtons = (props: IProps) => {
  const {
    setScreen,
    setPause,
    setMuted,
    fireMessage,
    pause,
    muted,
    fps,
    frame,
  } = props;
  return (
    <FlexElement orientation="ROW">
      <Button text="Quit (Q)" onPress={() => setScreen("settings")} />
      <Button
        text={pause ? "Paused!!!" : "Pause (P)"}
        style={{ backgroundColor: pause ? "red" : "darkblue" }}
        onPress={() => {
          fireMessage(!pause ? "Paused" : "Unpaused", frame);
          setPause(!pause);
        }}
      />
      <Button
        text={muted ? "Muted!!!" : "Mute (M)"}
        style={{ backgroundColor: muted ? "red" : "darkblue" }}
        onPress={() => {
          fireMessage(!muted ? "Muted" : "Unmuted", frame);
          setMuted(!muted);
        }}
      />
      <Button
        text={"About"}
        onPress={() => {
          fireMessage("Beans React William Sease 2022", frame);
        }}
      />
      <TextElement
        needsBackGround
        style={{
          backgroundColor: fps < 50 ? "red" : fps < 55 ? "yellow" : "unset",
        }}
        text={fps + " Fps"}
      />
    </FlexElement>
  );
};
