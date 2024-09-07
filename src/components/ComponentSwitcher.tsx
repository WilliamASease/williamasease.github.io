import { ReactElement, ReactNode, useState } from "react";
import { FlexBox, SiteText } from "../sdk/CommonComponents";
import { isMobile } from "react-device-detect";

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
      <div style={{ margin: 10, padding: 10, border: "solid black 3px" }}>
        {pairs.map((p, i) => {
          const props = {style:{
            marginRight: 5,
            padding: 2,
            cursor: "pointer",
            color: active === i ? "black" : "green",
            backgroundColor: active === i ? 'white' : 'black',
            border:'solid green 1px'
          },
          onClick:() => setActive(i)}
          return (
          isMobile ? <div
          {...props}
        >
          {p.key}
        </div> : <span
            {...props}
          >
            {p.key}
          </span>
        )})}
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
