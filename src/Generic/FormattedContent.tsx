import { ReactNode } from "react";
import { contentObject } from "../Content/ContentRepository";

type IProps = {
  content: contentObject;
  children?: ReactNode;
  style?: React.CSSProperties;
};

export const FormattedContent = (props: IProps) => {
  const { content, children, style } = props;

  return (
    <div style={style}>
      <div
        className={"textElement needsBackground"}
        style={{ fontSize: "1rem" }}
      >
        <h3>{content.title}</h3>
        {content.body.map((c) => {
          return (
            <div>
              <div style={{ fontWeight: "bold" }}>{c.sup}</div>
              <ul>
                {c.sub.map((s) => (
                  <li>{s}</li>
                ))}
              </ul>
            </div>
          );
        })}
        {children}
      </div>
    </div>
  );
};
