import { Anchor } from "../../Generic/Anchor";
import { FlexElement } from "../../Generic/FlexElement";

export const References = () => {
  return (
    <FlexElement orientation={"COL"} enforceAlign>
      <FlexElement orientation="ROW">
        <Anchor text={"github"} link={"https://github.com/WilliamASease"} />
        <Anchor
          text={"linkedin"}
          link={
            "https://www.linkedin.com/in/william-sease-907bb219a?trk=people-guest_people_search-card"
          }
        />
        <Anchor
          text={"resume (PDF)"}
          link={"https://williamasease.github.io/seaseResume.pdf"}
        />
        <Anchor text={"email"} link={"mailto:WilliamASease@protonmail.com"} />
      </FlexElement>
    </FlexElement>
  );
};
