import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { useImageDefinitions } from "../data/ImageDefinitions";

export const SiteText = (props: {
  value: string;
  big?: boolean;
  bold?: boolean;
  underline?: boolean;
  indent?: boolean;
  labelFor?: string;
  style?: CSSProperties;
}) => (
  <div
    style={{
      fontWeight: props.bold ? "bold" : "unset",
      textDecoration: props.underline ? "underline" : undefined,
      textIndent: props.indent ? 50 : 0,
      fontSize: props.big ? "larger" : undefined,
      ...props.style,
    }}
  >
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
  const { imageDefinitions } = useImageDefinitions();
  const [isOpen, setIsOpen] = useState(false);

  const [openPercentage, setOpenPercentage] = useState(0);

  useEffect(() => {
    const multipler = Math.sin((openPercentage * Math.PI) / 100) + 1;
    let val =
      isOpen && openPercentage < 100
        ? 1
        : !isOpen && openPercentage > 0
        ? -1
        : 0;
    setTimeout(() => setOpenPercentage((prev) => prev + val * multipler), 4);
  }, [isOpen, openPercentage, setOpenPercentage]);

  return (
    <FlexBox orientation="column" style={{ paddingTop: 5, paddingBottom: 5 }}>
      <FlexBox orientation="row" style={{ width: "100%" }}>
        <div>
          <img
            onClick={() => setIsOpen(!isOpen)}
            alt={imageDefinitions.arrow.relPath}
            style={{
              width: 20,
              height: 20,
              rotate: `${(openPercentage / 100) * 90}deg`,
            }}
            src={`https://williamasease.github.io/build/images/${imageDefinitions.arrow.relPath}`}
          />
        </div>
        <div style={{ marginLeft: 5, position: "relative", flexGrow: 1 }}>
          <div
            style={{ fontWeight: "bold", paddingBottom: 5 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </div>
          <div
            style={{
              height: `${openPercentage}%`,
              overflowY: "hidden",
            }}
          >
            {openPercentage > 0 && children}
          </div>
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

export const InlineLink = (props: { relPath: string; text: string }) => (
  <Anchor link={`https://williamasease.github.io/build/${props.relPath}`}>
    {props.text}
  </Anchor>
);

export const Anchor = (props: { children: ReactNode; link: string }) => {
  const { children, link } = props;
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <div>{children}</div>
      </a>
    </div>
  );
};

export const SiteHorizontalRule = () => <hr style={{ width: "100%" }} />;

export const SiteBody = (props: { children?: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState([0, 0]);
  useEffect(
    () =>
      setDimensions([
        ref.current?.clientHeight ?? 0,
        ref.current?.clientWidth ?? 0,
      ]),
    [ref, ref.current]
  );

  return (
    <div style={{ flexGrow: 1 }} ref={ref}>
      <div
        style={{
          height: dimensions[0],
          position: "absolute",
          overflowY: "scroll",
        }}
      >
        <div style={{ width: (dimensions[1] ?? 0) - 12 }}>
          <div>{dimensions[0] + "" + dimensions[1]}</div>
          {props.children}
        </div>
      </div>
    </div>
  );
};
