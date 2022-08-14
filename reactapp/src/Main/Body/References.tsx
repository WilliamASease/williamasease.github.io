import { Anchor } from "../../Generic/Anchor";
import { FlexElement } from "../../Generic/FlexElement";
import { TextElement } from "../../Generic/TextElement";

export const References = () => {
  return (
    <FlexElement orientation={"COL"} enforceAlign>
      <FlexElement orientation="ROW">
        <Anchor text={"github"} link={""} />
        <Anchor text={"linkedin"} link={""} />
        <Anchor
          text={"resume (PDF)"}
          link={"../../../public/seaseResume.pdf"}
        />
      </FlexElement>
    </FlexElement>
  );
};
