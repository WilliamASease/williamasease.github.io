import { FlexElement } from "../../Generic/FlexElement";
import { contentType } from "../Main";

type IProps = {
  content: contentType;
};

export const ContentBody = (props: IProps) => {
  const { content } = props;
  return (
    <FlexElement orientation={"COL"} enforceAlign topPadding={5}>
      {content}
    </FlexElement>
  );
};
