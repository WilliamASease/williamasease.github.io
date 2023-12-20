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

export const WindowShade = (props: { children: ReactNode; title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexBox orientation="column" style={{ marginTop: 5 }}>
      <FlexBox orientation="row">
        <div style={{}} onClick={() => setIsOpen(!isOpen)}>
          <div
            style={{
              border: "solid black 1px",
              width: 20,
              height: 20,
            }}
          >
            <img
              style={{ width: 20, height: 20 }}
              src={`https://williamasease.github.io/build/images/${
                isOpen ? `minus` : `plus`
              }.png`}
            />
          </div>
        </div>
        <div style={{ marginLeft: 5 }}>
          <div style={{ fontWeight: "bold", marginBottom: 5 }}>
            {props.title}
          </div>
          {isOpen && props.children}
        </div>
      </FlexBox>
    </FlexBox>
  );
};

export const Anchor = (props: { children: ReactNode; link: string }) => {
  const { children, link } = props;
  return (
    <div>
      <a href={link} target="_blank">
        <div>{children}</div>
      </a>
    </div>
  );
};
