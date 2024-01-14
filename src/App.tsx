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
        </FlexBox>
        <SiteHorizontalRule />
        <SiteBody>
          <WindowShade alwaysOpen title="The Important Links">
            <Anchor link="https://www.linkedin.com/in/william-a-sease-907bb219a">
              Linkedin
            </Anchor>
            <Anchor link="mailto:WilliamASease@protonmail.com">Email</Anchor>
            <Anchor link="https://github.com/WilliamASease">Github</Anchor>
            <Anchor link="https://williamasease.github.io/seaseResume.pdf">
              Resume (PDF)
            </Anchor>
          </WindowShade>
          <WindowShade alwaysOpen title="Photos">
            <InlineImage noDiv {...imageDefinitions.william} />
            <InlineImage noDiv {...imageDefinitions.napoleon} />
          </WindowShade>
          <WindowShade alwaysOpen title="Work History">
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.epic} />
              <>
                <SiteText bold value="Epic Systems Corporation" />
                <SiteText value="Full Stack Software Developer" />
                <SiteText value="MyChart" />
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
          <WindowShade alwaysOpen title="Education">
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
          <WindowShade alwaysOpen title="Skills">
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
          <WindowShade alwaysOpen title="Works">
            <WindowShade title="Spotify95">
              <SiteText value="A custom react frontend for Spotify." />
              <InlineImage
                {...imageDefinitions.spotify1}
                style={{ width: "50%" }}
              />
              <WindowShade title="0.0.1">
                <InlineLink
                  relPath="projects/Spotify95/0.0.1/Win_0.0.1.rar"
                  text="Win"
                />
              </WindowShade>
            </WindowShade>
            <WindowShade title="Rogolf">
              <SiteText value="Senior seminar, game made as part of a two-person team" />
              <SiteText value="Play through 18 holes, acquiring upgrades and experiencing misfortune along the way" />
              <SiteText value="Unity" />
              <SiteSpacer />
              <Anchor link="https://williamasease.github.io/rogolf/web-build/">
                <SiteText value="Play In Browser" />
              </Anchor>
              <SiteSpacer />
              <Anchor link="https://williamasease.github.io/rogolf/windows-build.rar">
                <SiteText value="Download for Windows (Works better)" />
              </Anchor>
              <SiteSpacer />
              <InlineImage
                {...imageDefinitions.rogolf1}
                style={{ width: "50%" }}
              />
              <InlineImage
                {...imageDefinitions.rogolf2}
                style={{ width: "50%" }}
              />
              <InlineImage
                {...imageDefinitions.rogolf3}
                style={{ width: "50%" }}
              />
            </WindowShade>
            <WindowShade title="Tetris Galaxy">
              <SiteText value="Apphack X (2019) Hackathon winning entry" />
              <SiteText value="Made as part of a 4-person team" />
              <SiteText value="Java" />
              <SiteSpacer />
              <Anchor link="https://github.com/swansonmp/tetrisGalaxy/blob/master">
                <SiteText value="Download" />
              </Anchor>
              <SiteSpacer />
              <InlineImage
                {...imageDefinitions.tetrisGalaxy1}
                style={{ width: "50%" }}
              />
              <InlineImage
                {...imageDefinitions.tetrisGalaxy2}
                style={{ width: "50%" }}
              />
            </WindowShade>
            <WindowShade title="Java Mode 7">
              <SiteText value="Implementation of the Super Nintendo's Mode 7 Algorithm in Java" />
              <SiteSpacer />
              <Anchor link="https://www.youtube.com/watch?v=7a97zlXLQ7Q">
                <SiteText value="View on Youtube" />
              </Anchor>
              <SiteSpacer />

              <Anchor link="https://drive.google.com/file/d/1cdzMI87Hn5ebUkXUuw4GOwYnHwVuAJ-_/view">
                <SiteText value="Download" />
              </Anchor>
              <SiteSpacer />
              <InlineImage
                {...imageDefinitions.mode7Game1}
                style={{ width: "50%" }}
              />
            </WindowShade>
            <WindowShade title="Beans Java">
              <SiteText value="First game, made as a college student. Swing UI" />
              <SiteSpacer />
              <Anchor link="https://github.com/WilliamASease/BeansJava/blob/master">
                <SiteText value="Download" />
              </Anchor>
              <SiteSpacer />
              <InlineImage
                {...imageDefinitions.beansJava1}
                style={{ width: "50%" }}
              />
            </WindowShade>
          </WindowShade>
          <WindowShade alwaysOpen title="The Update">
            {blogPosts.map((bp, i) => (
              <WindowShade
                key={i}
                title={`${bp.month}. ${bp.day}, ${bp.year} - ${bp.title}`}
              >
                <BlogPostComponent blogPost={bp} />
              </WindowShade>
            ))}
          </WindowShade>
          <WindowShade alwaysOpen title="Contact">
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
