import { ReactNode } from "react";

type IProps = {
  text?: string;
  size?: "large" | "medium" | "small";
  children?: ReactNode;
};

export const TextElement = (props: IProps) => {
  const { text, size, children } = props;

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
    <div>
      <div className="textElement" style={{ fontSize: processSize() }}>
        <div>{text}</div>
        {children}
      </div>
    </div>
  );
};
