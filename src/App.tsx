import "./App.css";
import {
  Anchor,
  FlexBox,
  InlineDownload,
  InlineImage,
  SiteSpacer,
  SiteText,
  WindowShade,
} from "./sdk/CommonComponents";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <FlexBox
      orientation="column"
      style={{
        backgroundColor: "lightgrey",
        alignItems: "center",
        minHeight: "100%",
      }}
      fullWidth
    >
      <FlexBox
        orientation="column"
        style={{
          width: isMobile ? "100%" : 1000,
          minHeight: "100%",
          backgroundColor: "white",
          paddingLeft: 5,
          paddingRight: 5,
        }}
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
          <InlineImage
            altText="William A. Sease"
            relPath="was.png"
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
        <WindowShade title="Skills">
          <SiteText bold value="Craft" />
          <SiteText value="Experience across several successful web-dev & full-stack projects" />
          <SiteText value="Emphasis on accessability, usability, and UI design" />
          <SiteSpacer />
          <SiteText
            bold
            value="Professionalism & Interpersonal Communication"
          />
          <SiteText value="Enjoys collaboration and working in teams" />
          <SiteText value="Works well with developers, project management, and quality assurance" />
        </WindowShade>
        <WindowShade title="Projects">
          <WindowShade title="Present">
            <WindowShade title="Spotify95">
              <SiteText value="A custom react frontend for Spotify." />
              <InlineImage
                altText="Spotify 95 Screenshot"
                relPath="Spotify95Screenshot.png"
              />
              <InlineDownload
                relPath="Spotify95/0.0.1.rar"
                text="0.0.1 (Windows only for now)"
              />
            </WindowShade>
          </WindowShade>
          <WindowShade title="Past">
            <SiteText value="It's all in the github. I'll jot it all down here later." />
          </WindowShade>
        </WindowShade>
      </FlexBox>
    </FlexBox>
  );
}

export default App;
