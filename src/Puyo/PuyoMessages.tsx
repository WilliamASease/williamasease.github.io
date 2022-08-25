import { timeStamp } from "console";
import { useEffect, useState } from "react";
import { TextElement } from "../Generic/TextElement";

type IProps = {
  messages: string[];
  messageTimeStamp: number[];
  frame: number;
};

function calculatePercentage(frame: number, timeStamp: number) {
  return (frame - timeStamp < 100 ? frame - timeStamp : 100) + "%";
}

export const PuyoMessages = (props: IProps) => {
  const { messages, messageTimeStamp, frame } = props;
  return (
    <div>
      {messages[0] && (
        <TextElement
          style={{
            whiteSpace: "nowrap",
            width: calculatePercentage(frame, messageTimeStamp[0]),
            overflow: "hidden",
          }}
          text={messages[0]}
        />
      )}
      {messages[1] && (
        <TextElement
          style={{
            whiteSpace: "nowrap",
            width: calculatePercentage(frame, messageTimeStamp[1]),
            overflow: "hidden",
          }}
          text={messages[1]}
        />
      )}
      {messages[2] && (
        <TextElement
          style={{
            whiteSpace: "nowrap",
            width: calculatePercentage(frame, messageTimeStamp[2]),
            overflow: "hidden",
          }}
          text={messages[2]}
        />
      )}
      {messages[3] && (
        <TextElement
          style={{
            whiteSpace: "nowrap",
            width: calculatePercentage(frame, messageTimeStamp[3]),
            overflow: "hidden",
          }}
          text={messages[3]}
        />
      )}
    </div>
  );
};
