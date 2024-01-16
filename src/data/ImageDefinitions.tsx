import { InlineImage } from "../sdk/CommonComponents";

export type ImageDefinition = {
  relPath: string;
  altText: string;
};

export const ImagePreloader = (props: { images: string[] }) => (
  <div style={{ display: "none" }}>
    {props.images.map((s, i) => (
      <InlineImage key={i} altText="none" relPath={s} />
    ))}
  </div>
);

export const useImageDefinitions = () => {
  const imageDefinitions = {
    spotify1: {
      relPath: "projects/Spotify1.jpg",
      altText: "Spotify 95",
    },
    rogolf1: {
      relPath: "projects/Rogolf1.jpg",
      altText: "Rogolf",
    },
    rogolf2: {
      relPath: "projects/Rogolf2.jpg",
      altText: "Rogolf",
    },
    rogolf3: {
      relPath: "projects/Rogolf3.jpg",
      altText: "Rogolf",
    },
    beansJava1: {
      relPath: "projects/BeansJava1.jpg",
      altText: "Beans Java",
    },
    tetrisGalaxy1: {
      relPath: "projects/TetrisGalaxy1.jpg",
      altText: "Tetris Galaxy",
    },
    tetrisGalaxy2: {
      relPath: "projects/TetrisGalaxy2.jpg",
      altText: "Tetris Galaxy",
    },
    mode7Game1: {
      relPath: "projects/Mode7Game1.jpg",
      altText: "Mode 7 Game",
    },
    riskDiceSimulator1: {
      relPath: "projects/RiskDiceSimulator1.png",
      altText: "Risk Dice Simulator",
    },
    william: { relPath: "portraits/william.png", altText: "William A. Sease" },
    napoleon: {
      relPath: "portraits/napoleon.jpg",
      altText: "Napoleon the Cat",
    },
    arrow: {
      relPath: "icons/arrow.png",
      altText: "Expand",
    },
    settings: {
      relPath: "icons/settings.png",
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
