import "./App.css";
import { useBlogPosts } from "./data/BlogContent";
import {
  Anchor,
  FlexBox,
  InlineImage,
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
import { ComponentSwitcher } from "./components/ComponentSwitcher";
import { useWorks } from "./data/Works";

const debug = false;

function App() {
  const blogPosts = useBlogPosts(debug);
  const works = useWorks();
  const { imageDefinitions, relPathsForPreload } = useImageDefinitions();

  return (
    <FlexBox
      orientation="column"
      style={{
        backgroundColor: "darkGray",
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
          backgroundColor: "black",
          marginLeft: isMobile ? 5 : undefined,
          marginRight: isMobile ? 5 : undefined,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          border: "solid green 1px",
          height: "100%",
        }}
      >
        <ImagePreloader images={relPathsForPreload} />
        <FlexBox style={{ marginTop: ".5rem" }} orientation="row">
          <SiteText
            style={{ flexGrow: 1 }}
            big
            bold
            value="William Sease's Personal Site"
          />
        </FlexBox>
        <SiteHorizontalRule />
        <SiteBody>
          <WindowShade alwaysOpen title="The Important Links">
            <FlexBox orientation={"row"}>
              <Anchor
                noDiv
                link="https://www.linkedin.com/in/william-a-sease-907bb219a"
                style={{ marginRight: ".5rem" }}
              >
                <SiteText value="Linkedin" />
              </Anchor>
              <Anchor
                noDiv
                link="mailto:williamsease@protonmail.com"
                style={{ marginRight: ".5rem" }}
              >
                <SiteText value="Email" />
              </Anchor>
              <Anchor
                noDiv
                link="https://github.com/williamsease"
                style={{ marginRight: ".5rem" }}
              >
                <SiteText value="Github" />
              </Anchor>
              <Anchor
                noDiv
                link="https://williamsease.github.io/seaseResume.pdf"
                style={{ marginRight: ".5rem" }}
              >
                <SiteText value="Resume (PDF)" />
              </Anchor>
            </FlexBox>
          </WindowShade>
          <WindowShade alwaysOpen title="Photos">
            <FlexBox orientation="row">
              <InlineImage
                noDiv
                {...imageDefinitions.william}
                caption="William"
              />
              <InlineImage
                noDiv
                {...imageDefinitions.napoleon}
                caption="Napoleon"
                style={{ marginLeft: 3 }}
              />
            </FlexBox>
          </WindowShade>
          <WindowShade alwaysOpen title="Work History">
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.epic} />
              <>
                <SiteText bold value="Epic Systems Corporation" />
                <SiteText value="Software Developer" />
                <SiteText value="MyChart" />
                <SiteText value="June 2021 - June 2022" />
              </>
            </SiteGutterLayout>
            <SiteSpacer />
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.sas} />
              <>
                <SiteText bold value="SAS Institute" />
                <SiteText value="Software Developer" />
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
          <WindowShade alwaysOpen title="Works">
            <ComponentSwitcher pairs={works} />
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
