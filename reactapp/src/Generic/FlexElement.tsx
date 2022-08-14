import { ReactNode } from "react";

type IProps = {
  orientation: "COL" | "ROW";
  enforceAlign?: boolean;
  children: ReactNode;
};

export const FlexElement = (props: IProps) => {
  const { orientation, enforceAlign, children } = props;
  return (
    <div
      className={
        (orientation === "COL" ? "flexColumn" : "flexRow") +
        (enforceAlign ? " enforceAlign" : "")
      }
    >
      {children}
    </div>
  );
};
