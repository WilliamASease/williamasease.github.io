import { ReactElement, ReactNode, useState } from "react";
import { SiteText } from "../sdk/CommonComponents";

type ComponentPair = {
  key: string;
  component: ReactNode | ReactElement[];
};

type IProps = {
  pairs: ComponentPair[];
};

export const ComponentSwitcher = (props: IProps) => {
  const { pairs } = props;
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
        <div style={{ padding: "1rem" }}>
          <SiteText bold value={pairs[active].key} />
          {pairs[active].component}
        </div>
      )}
    </div>
  );
};
