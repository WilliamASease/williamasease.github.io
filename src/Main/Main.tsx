import { useEffect, useState } from "react";
import { Splash } from "./Splash/Splash";
import { colorMutate } from "../Utils/BackgroundFun";
import { NamePlate } from "./Body/NamePlate";
import { ContentSelector } from "./Body/ContentSelector";
import { ContentBody } from "./Body/ContentBody";
import { References } from "./Body/References";

export type contentType =
  | "none"
  | "photo"
  | "skills"
  | "education"
  | "projects"
  | "accomplishments"
  | "workexperience"
  | "puyo";

export const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState("#444444");

  const [splashScreen, setSplashScreen] = useState(true);

  const [content, setContent] = useState<contentType>("none");

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(colorMutate(backgroundColor));
    }, 25);

    return () => clearInterval(interval);
  });

  return (
    <div className="main" style={{ backgroundColor: backgroundColor }}>
      <div style={{ paddingTop: 100, maxWidth: "800px", margin: "auto" }}>
        {splashScreen ? (
          <Splash setSplashScreen={setSplashScreen} />
        ) : (
          <div>
            <NamePlate />
            <References />
            <ContentSelector setContent={setContent} />
            <ContentBody content={content} />
          </div>
        )}
      </div>
    </div>
  );
};
