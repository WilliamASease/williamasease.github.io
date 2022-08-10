import { useState } from "react";
import { Splash } from "./Splash/Splash";
export const Main = () => {
  const [splashScreen, setSplashScreen] = useState(true);
  return (
    <div className="main">
      {splashScreen ? <Splash setSplashScreen={setSplashScreen} /> : null}
    </div>
  );
};
