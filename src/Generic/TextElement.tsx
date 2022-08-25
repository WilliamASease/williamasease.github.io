import { ReactNode } from "react";

type IProps = {
  text?: string;
  size?: "large" | "medium" | "small";
  needsBackGround?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties;
};

export const TextElement = (props: IProps) => {
  const { text, size, children, needsBackGround, style } = props;

  const processSize = () => {
    switch (size) {
      case "large":
        return "4rem";
      case "medium":
        return "2rem";
      case "small":
        return "1rem";
      default:
        return "1rem";
    }
  };
  return (
    <div style={style}>
      <div
        className={"textElement" + (needsBackGround ? " needsBackground" : "")}
        style={{ fontSize: processSize() }}
      >
        <div>{text}</div>
        {children}
      </div>
    </div>
  );
};
