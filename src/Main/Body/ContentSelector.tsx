import { Button } from "../../Generic/Button";
import { FlexElement } from "../../Generic/FlexElement";
import { contentType } from "../Main";

type IProps = {
  setContent: React.Dispatch<React.SetStateAction<contentType>>;
};

export const ContentSelector = (props: IProps) => {
  const { setContent } = props;
  return (
    <FlexElement orientation={"COL"} enforceAlign>
      <FlexElement orientation="ROW">
        <Button
          text={"Photo"}
          onPress={() => {
            setContent("photo");
          }}
        />
        <Button
          text={"Skills"}
          onPress={() => {
            setContent("skills");
          }}
        />
        <Button
          text={"Education"}
          onPress={() => {
            setContent("education");
          }}
        />
        <Button
          text={"Accomplishments"}
          onPress={() => {
            setContent("accomplishments");
          }}
        />
        <Button
          text={"Projects"}
          onPress={() => {
            setContent("projects");
          }}
        />
        <Button
          text={"Work Experience"}
          onPress={() => {
            setContent("workexperience");
          }}
        />
        <Button
          text={"ぷよぷよ"}
          onPress={() => {
            setContent("puyo");
          }}
        />
      </FlexElement>
    </FlexElement>
  );
};
