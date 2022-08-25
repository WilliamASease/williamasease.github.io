import React, { ReactElement } from "react";
import { Button } from "../../Generic/Button";
import { FlexElement } from "../../Generic/FlexElement";
import { TextElement } from "../../Generic/TextElement";

type IProps = {
  setSplashScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Splash = (props: IProps): ReactElement => {
  const { setSplashScreen } = props;
  return (
    <FlexElement orientation={"COL"} enforceAlign>
      <TextElement text={"Welcome."} needsBackGround />
      <Button onPress={() => setSplashScreen(false)} text={"continue"} />
    </FlexElement>
  );
};
