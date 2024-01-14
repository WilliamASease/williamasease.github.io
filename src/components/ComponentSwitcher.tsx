import { ReactElement, ReactNode, useState } from "react";
import { FlexBox, SiteText } from "../sdk/CommonComponents";

type ComponentPair = {
  key: string;
  component: ReactNode | ReactElement[];
};

type IProps = {
  pairs: ComponentPair[];
  height?: number;
};

export const ComponentSwitcher = (props: IProps) => {
  const { pairs, height } = props;
  const [active, setActive] = useState(-1);

  return (
    <div>
      <div>
        {pairs.map((p, i) => (
          <span
            style={{
              marginRight: 5,
              cursor: "pointer",
              textDecoration: "underline",
              color: active === i ? "black" : "blue",
            }}
            onClick={() => setActive(i)}
          >
            {p.key}
          </span>
        ))}
      </div>
      {active !== -1 && (
        <FlexBox
          orientation="column"
          style={{ padding: "1rem", height: height }}
        >
          <SiteText bold value={pairs[active].key} />
          {pairs[active].component}
        </FlexBox>
      )}
    </div>
  );
};
