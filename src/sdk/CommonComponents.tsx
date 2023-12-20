import { ReactNode } from "react";

type IProps = {
  orientation: "row" | "column";
  style?: React.CSSProperties;
  children: ReactNode;
};

export const FlexBox = (props: IProps) => (
  <div
    style={{
      display: "flex",
      height: "100%",
      width: "100%",
      flexDirection: props.orientation,
      ...props.style,
    }}
  >
    {props.children}
  </div>
);
