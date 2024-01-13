import { InlineImage } from "../sdk/CommonComponents";

export const ImagePreloader = (props: { images: string[] }) => (
  <div style={{ display: "none" }}>
    {props.images.map((s, i) => (
      <InlineImage key={i} altText="none" relPath={s} />
    ))}
  </div>
);

export const useImageDefinitions = () => {
  const imageDefinitions = {
    spotify95Screenshot: {
      relPath: "Spotify95Screenshot.png",
      altText: "Spotify 95",
    },
    was: { relPath: "was.png", altText: "William A. Sease" },
    arrow: {
      relPath: "arrow.png",
      altText: "Expand",
    },
    sas: {
      relPath: "institutions/Sas.jpg",
      altText: "SAS",
    },
    epic: {
      relPath: "institutions/Epic.jpg",
      altText: "Epic",
    },
    appA: {
      relPath: "institutions/AppA.png",
      altText: "AppState",
    },
  };
  return {
    imageDefinitions: imageDefinitions,
    relPathsForPreload: Object.entries(imageDefinitions).map(
      ([v, i]) => i.relPath
    ),
  };
};
