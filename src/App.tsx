import "./App.css";
import {
  Anchor,
  FlexBox,
  InlineImage,
  SiteText,
  WindowShade,
} from "./sdk/CommonComponents";
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
        <SiteText bold value="William A. Sease's Personal Site" />
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
        <WindowShade title="Work History">
          <WindowShade title="Epic Systems Corporation">
            <SiteText value="Full Stack Software Developer" />
            <SiteText value="MyChart “Clinicals” Division" />
            <SiteText value="June 2021 - June 2022" />
          </WindowShade>
          <WindowShade title="SAS Institute">
            <SiteText value="Senior Associate Software Developer" />
            <SiteText value="Health & Life Sciences" />
            <SiteText value="July 2022 - Present" />
          </WindowShade>
        </WindowShade>
        <WindowShade title="Education">
          <SiteText bold value="Appalachian State University, Boone, NC" />
          <SiteText value="Bachelor of Science in Computer Science, May 2021" />
          <SiteText value="GPA: 3.75" />
        </WindowShade>
        <WindowShade title="Projects">
          <WindowShade title="Present">
            <WindowShade title="Spotify95">
              <SiteText value="A custom react frontend for Spotify." />
              <InlineImage
                altText="Spotify 95 Screenshot"
                name="Spotify95Screenshot.png"
              />
              <Anchor link="https://williamasease.github.io/build/downloads/Spotify95/0.0.1">
                0.0.1
              </Anchor>
            </WindowShade>
          </WindowShade>
          <WindowShade title="Past"></WindowShade>
        </WindowShade>
      </FlexBox>
    </FlexBox>
  );
}

export default App;
