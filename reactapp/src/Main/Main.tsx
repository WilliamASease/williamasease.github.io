import { useEffect, useState } from "react";
import { Button } from "../Generic/Button";
import { Splash } from "./Splash/Splash";
import { colorMutate } from "../Utils/BackgroundFun";
import { NamePlate } from "./Body/NamePlate";
import { ContentSelector } from "./Body/ContentSelector";
import { ContentBody } from "./Body/ContentBody";
import { References } from "./Body/References";
export const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState("#444444");

  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(colorMutate(backgroundColor));
    }, 25);

    return () => clearInterval(interval);
  });

  return (
    <div className="main" style={{ backgroundColor: backgroundColor }}>
      <div style={{ paddingTop: 100 }}>
        {splashScreen ? (
          <Splash setSplashScreen={setSplashScreen} />
        ) : (
          <div>
            <NamePlate />
            <References />
            <ContentSelector />
            <ContentBody />
          </div>
        )}
      </div>
    </div>
  );
};
