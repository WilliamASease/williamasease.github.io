import { ReactNode, useState } from "react";

export const SiteText = (props: {
  value: string;
  bold?: boolean;
  style?: React.CSSProperties;
}) => (
  <div style={{ fontWeight: props.bold ? "bold" : "unset", ...props.style }}>
    {props.value}
  </div>
);

export const SiteSpacer = () => <div style={{ height: "1rem" }}></div>;

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

export const WindowShade = (props: { children?: ReactNode; title: string }) => {
  const { children = "Empty Windowshade. This is probably a mistake.", title } =
    props;
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
          <div style={{ fontWeight: "bold", marginBottom: 10 }}>{title}</div>
          {isOpen && children}
        </div>
      </FlexBox>
    </FlexBox>
  );
};

export const InlineImage = (props: {
  relPath: string;
  altText: string;
  style?: React.CSSProperties;
}) => (
  <img
    src={`https://williamasease.github.io/build/images/${props.relPath}`}
    alt={props.altText}
    style={{ marginTop: 5, maxWidth: "50%", ...props.style }}
  />
);

export const InlineDownload = (props: { relPath: string; text: string }) => (
  <Anchor
    link={`https://williamasease.github.io/build/downloads/${props.relPath}`}
  >
    {props.text}
  </Anchor>
);

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
