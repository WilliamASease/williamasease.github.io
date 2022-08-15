import { ReactNode } from "react";

type IProps = {
  orientation: "COL" | "ROW";
  enforceAlign?: boolean;
  children: ReactNode;
  topPadding?: number;
  border?: boolean;
};

export const FlexElement = (props: IProps) => {
  const { orientation, enforceAlign, children, topPadding } = props;
  const padding = topPadding ? topPadding : 0;
  return (
    <div
      className={
        (orientation === "COL" ? "flexColumn" : "flexRow") +
        (enforceAlign ? " enforceAlign" : "")
      }
      style={{ paddingTop: padding, flexWrap: "wrap" }}
    >
      {children}
    </div>
  );
};
