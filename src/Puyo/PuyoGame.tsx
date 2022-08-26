import { PuyoSong } from "./PuyoSong";
import { useCallback, useEffect, useState } from "react";
import {
  boardTypes,
  difficultyType,
  keyStatus,
  screenType,
  songType,
} from "./PuyoTypes";
import { difficultyToNumericDifficulty } from "./PuyoUtils";
import { TextElement } from "../Generic/TextElement";
import { puyoStyleFactory } from "./PuyoStyleFactory";
import { PuyoBoard } from "./PuyoBoard";
import { PuyoScore } from "./PuyoScore";
import { PuyoGameButtons } from "./PuyoGameButtons";
import { PuyoMessages } from "./PuyoMessages";
import { PuyoKeys } from "./PuyoKeys";

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

  const [keys, setKeys] = useState<keyStatus>({
    a: false,
    s: false,
    leftArrow: false,
    rightArrow: false,
    upArrow: false,
    downArrow: false,
    q: false,
    m: false,
    p: false,
  });
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "q") {
      }
      if (e.key === "m") {
        fireMessage(!muted ? "Muted" : "Unmuted", frame);
        setMuted(!muted);
      }
      if (e.key === "p") {
        fireMessage(!pause ? "Paused" : "Unpaused", frame);
        setPause(!pause);
      }
    });
  }, []);

  const [pause, setPause] = useState(false);
  const [muted, setMuted] = useState(false);
  const [frame, setFrame] = useState(0);
  const [gameFrame, setGameFrame] = useState(0);
  const [prevFrame, setPrevFrame] = useState(Date.now());
  const [fps, setFPS] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(frame + 1);
      setGameFrame(gameFrame + (pause ? 0 : 1));
      const snapShot = Date.now();
      setFPS(Math.round(1000 / (snapShot - prevFrame)));
      setPrevFrame(snapShot);
    }, 8);
    return () => clearInterval(interval);
  });

  const [messages, setMessages] = useState<string[]>([]);
  const [messageTimeStamp, setMessageTimeStamps] = useState<number[]>([]);
  const fireMessage = useCallback((message: string, frame: number) => {
    const newMessages = messages;
    const newTimeStamps = messageTimeStamp;
    newMessages.unshift(message);
    newTimeStamps.unshift(frame);
    setMessages([...newMessages.slice(0, 4)]);
    setMessageTimeStamps([...newTimeStamps.slice(0, 4)]);
  }, []);

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
      <PuyoKeys keys={keys} setKeys={setKeys} />
      <PuyoSong song={song} muted={muted} />
      <div style={{ height: 200, position: "absolute" }}>
        <PuyoGameButtons
          setScreen={setScreen}
          setPause={setPause}
          setMuted={setMuted}
          fireMessage={fireMessage}
          pause={pause}
          muted={muted}
          fps={fps}
          frame={frame}
        />
      </div>
      <div style={puyoStyleFactory("gameBoard")}>
        <PuyoBoard />
      </div>
      <div className="puyoBoardScoreInfo" style={puyoStyleFactory("scoreInfo")}>
        <PuyoScore
          frames={gameFrame}
          score={0}
          difficulty={numericDifficulty}
        />
      </div>
      <div className="puyoBoardNextPuyo" style={puyoStyleFactory("nextPuyo")}>
        <TextElement text={keys.a + ""} />
      </div>
      <div style={puyoStyleFactory("dancingMonkey")}>
        <TextElement text="Dancing Monkey!?." />
      </div>
      <div style={puyoStyleFactory("gameMessages")}>
        <PuyoMessages
          messages={messages}
          messageTimeStamp={messageTimeStamp}
          frame={frame}
        />
      </div>
    </div>
  );
};
