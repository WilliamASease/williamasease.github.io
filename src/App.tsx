import "./App.css";
import { useBlogPosts } from "./data/BlogContent";
import {
  Anchor,
  FlexBox,
  InlineImage,
  InlineLink,
  SiteBody,
  SiteGutterLayout,
  SiteHorizontalRule,
  SiteSpacer,
  SiteText,
  WindowShade,
} from "./sdk/CommonComponents";
import { isMobile } from "react-device-detect";
import { ContactForm } from "./forms/Contactform";
import { BlogPostComponent } from "./components/BlogPostComponent";
import { ImagePreloader, useImageDefinitions } from "./data/ImageDefinitions";
import { TruthOfTheDay } from "./components/TruthOfTheDay";

const debug = false;

function App() {
  const blogPosts = useBlogPosts(debug);
  const { imageDefinitions, relPathsForPreload } = useImageDefinitions();

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
          width: isMobile ? "90%" : 1000,
          flexGrow: 1,
          backgroundColor: "white",
          marginLeft: isMobile ? 5 : undefined,
          marginRight: isMobile ? 5 : undefined,
          paddingLeft: 5,
          paddingRight: 5,
          height: "100%",
        }}
      >
        <ImagePreloader images={relPathsForPreload} />
        <FlexBox style={{ marginTop: ".5rem" }} orientation="row">
          <SiteText
            style={{ flexGrow: 1 }}
            big
            bold
            value="William A. Sease's Personal Site"
          />
          <SiteText value="Settings" />
        </FlexBox>
        <SiteHorizontalRule />
        <SiteBody>
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
            <InlineImage {...imageDefinitions.was} />
          </WindowShade>
          <WindowShade title="Work History">
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.epic} />
              <>
                <SiteText bold value="Epic Systems Corporation" />
                <SiteText value="Full Stack Software Developer" />
                <SiteText value="MyChart “Clinicals” Division" />
                <SiteText value="June 2021 - June 2022" />
              </>
            </SiteGutterLayout>
            <SiteSpacer />
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.sas} />
              <>
                <SiteText bold value="SAS Institute" />
                <SiteText value="Senior Associate Software Developer" />
                <SiteText value="Health & Life Sciences" />
                <SiteText value="July 2022 - Present" />
              </>
            </SiteGutterLayout>
          </WindowShade>
          <WindowShade title="Education">
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.appA} />
              <>
                <SiteText
                  bold
                  value="Appalachian State University, Boone, NC"
                />
                <SiteText value="Bachelor of Science in Computer Science, May 2021" />
                <SiteText value="Magna Cum Laude" />
              </>
            </SiteGutterLayout>
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
            <SiteText value="Enjoys collaboration" />
            <SiteText value="Works well with developers, project management, and quality assurance" />
          </WindowShade>
          <WindowShade title="Projects">
            <WindowShade title="Present">
              <WindowShade title="Spotify95">
                <SiteText value="A custom react frontend for Spotify." />
                <InlineImage {...imageDefinitions.spotify95Screenshot} />
                <WindowShade title="0.0.1">
                  <InlineLink
                    relPath="projects/Spotify95/0.0.1/Win_0.0.1.rar"
                    text="Win"
                  />
                </WindowShade>
              </WindowShade>
            </WindowShade>
            <WindowShade title="Past">
              <SiteText value="It's all in the github. I'll jot it down here later." />
            </WindowShade>
          </WindowShade>
          <WindowShade title="The Update">
            {blogPosts.map((bp, i) => (
              <WindowShade
                key={i}
                title={`${bp.month}. ${bp.day}, ${bp.year} - ${bp.title}`}
              >
                <BlogPostComponent blogPost={bp} />
              </WindowShade>
            ))}
          </WindowShade>
          <WindowShade title="Contact">
            <ContactForm />
          </WindowShade>
        </SiteBody>
        <SiteHorizontalRule />
        <TruthOfTheDay />
      </FlexBox>
    </FlexBox>
  );
}

export default App;
