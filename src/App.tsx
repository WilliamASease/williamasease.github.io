import "./App.css";
import { Anchor, FlexBox, WindowShade } from "./sdk/CommonComponents";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <FlexBox
      orientation="column"
      style={{ backgroundColor: "lightgrey", alignItems: "center" }}
      fullHeight
      fullWidth
    >
      <FlexBox
        orientation="column"
        style={{
          width: isMobile ? "100%" : 1000,
          backgroundColor: "white",
          paddingLeft: 5,
          paddingRight: 5,
        }}
        fullHeight
      >
        <div>William A. Sease's Personal Site</div>
        <WindowShade title="The Important Links">
          <Anchor link="https://www.linkedin.com/in/william-sease-907bb219a?trk=people-guest_people_search-card">
            Linkedin
          </Anchor>
          <Anchor link="mailto:WilliamASease@protonmail.com">Email</Anchor>
          <Anchor link="https://github.com/WilliamASease">Github</Anchor>
          <Anchor link="https://williamasease.github.io/seaseResume.pdf">
            Resume (PDF)
          </Anchor>
        </WindowShade>
        <WindowShade title="File Photo">
          <img
            src="https://williamasease.github.io/build/images/was.png"
            alt="William A. Sease"
            style={{ borderRadius: 10 }}
          />
        </WindowShade>
      </FlexBox>
    </FlexBox>
  );
}

export default App;
