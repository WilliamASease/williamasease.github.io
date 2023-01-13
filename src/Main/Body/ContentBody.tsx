import { useState } from "react";
import { getContent } from "../../Content/ContentRepository";
import { FlexElement } from "../../Generic/FlexElement";
import { FormattedContent } from "../../Generic/FormattedContent";
import { TextElement } from "../../Generic/TextElement";
import { contentType } from "../Main";

type IProps = {
  content: contentType;
};

export const ContentBody = (props: IProps) => {
  const { content } = props;
  const loadedContent = getContent(content);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <FlexElement orientation={"COL"} enforceAlign topPadding={5}>
      {loadedContent && <FormattedContent content={loadedContent} />}
      {content === "photo" && (
        <>
          <TextElement
            style={{ display: imageLoaded ? "none" : "inherit" }}
            text={"loading..."}
            needsBackGround
          />
          <img
            src="https://williamasease.github.io/Portrait.png"
            alt="William A. Sease"
            style={{ borderRadius: 10 }}
            onLoad={() => setImageLoaded(true)}
          />
        </>
      )}
    </FlexElement>
  );
};
