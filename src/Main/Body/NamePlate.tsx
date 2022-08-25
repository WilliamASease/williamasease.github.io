import { FlexElement } from "../../Generic/FlexElement";
import { TextElement } from "../../Generic/TextElement";

export const NamePlate = () => {
  return (
    <FlexElement orientation={"COL"} enforceAlign>
      <TextElement text="William A. Sease" size="large" needsBackGround />
    </FlexElement>
  );
};
