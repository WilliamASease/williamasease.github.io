import { ReactNode, useState } from "react";

type FlexBoxProps = {
  orientation: "row" | "column";
  fullHeight?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children: ReactNode;
};

export const FlexBox = (props: FlexBoxProps) => (
  <div
    style={{
      display: "flex",
      height: props.fullHeight ? "100%" : undefined,
      width: props.fullWidth ? "100%" : undefined,
      flexDirection: props.orientation,
      ...props.style,
    }}
  >
    {props.children}
  </div>
);

type WindowShadeProps = {
  children: ReactNode;
  title: string;
};

export const WindowShade = (props: WindowShadeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexBox orientation="column">
      <FlexBox orientation="row">
        <span
          style={{ backgroundColor: "green" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "V" : ">"}
        </span>
        <div>
          <span style={{ backgroundColor: "red" }}>{props.title}</span>
          {isOpen && props.children}
        </div>
      </FlexBox>
    </FlexBox>
  );
};
