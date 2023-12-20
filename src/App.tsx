import "./App.css";
import { FlexBox } from "./sdk/CommonComponents";

function App() {
  return (
    <FlexBox
      orientation="column"
      style={{ backgroundColor: "red", alignItems: "center" }}
    >
      <FlexBox
        orientation="column"
        style={{ width: 1000, backgroundColor: "blue" }}
      >
        <div>hello</div>
      </FlexBox>
    </FlexBox>
  );
}

export default App;
