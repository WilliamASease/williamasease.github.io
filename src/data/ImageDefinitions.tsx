import { InlineImage } from "../sdk/CommonComponents";

export const ImagePreloader = (props: { images: string[] }) => (
  <div style={{ display: "none" }}>
    {props.images.map((s) => (
      <InlineImage altText="none" relPath={s} />
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
    plus: {
      relPath: "plus.png",
      altText: "Expand",
    },
    minus: { relPath: "minus.png", altText: "Collapse" },
  };
  return {
    imageDefinitions: imageDefinitions,
    relPathsForPreload: Object.entries(imageDefinitions).map(
      ([v, i]) => i.relPath
    ),
  };
};
