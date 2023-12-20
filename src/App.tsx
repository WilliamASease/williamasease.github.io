import "./App.css";
import { FlexBox, WindowShade } from "./sdk/CommonComponents";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <FlexBox
      orientation="column"
      style={{ backgroundColor: "lightgrey", alignItems: "center" }}
      fullHeight
      fullWidth
    >
      <FlexBox
        orientation="column"
        style={{ width: isMobile ? "100%" : 1000, backgroundColor: "white" }}
        fullHeight
      >
        <WindowShade title="Hello">
          <div>Goodbye</div>
        </WindowShade>
      </FlexBox>
    </FlexBox>
  );
}

export default App;
