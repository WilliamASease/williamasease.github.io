import { useMemo } from "react";
import { Anchor, FlexBox, SiteText } from "../sdk/CommonComponents";
import { Truth, Truths } from "../data/Truths";
import { isNil } from "lodash";

export const TruthOfTheDay = () => {
  const [month, monthRaw, day, year] = useMemo(() => {
    const date = new Date(Date.now());
    return [
      date.toLocaleString("default", { month: "long" }),
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
  }, []);

  const truth: Truth = useMemo(() => {
    if (day === 7 && month === "September") {
      return { text: "Today's my birthday!" };
    }
    return Truths[((monthRaw + 1) * day * year) % Truths.length];
  }, [month, monthRaw, day, year]);

  return (
    <FlexBox orientation="row" style={{ marginBottom: ".5rem" }}>
      <SiteText
        bold
        value="Truth of the day"
        style={{ marginRight: ".5rem" }}
      />
      {
        <div style={{ flexGrow: 1 }}>
          {!isNil(truth.link) ? (
            <Anchor link={truth.link}>
              <SiteText value={truth.text} />
            </Anchor>
          ) : (
            <SiteText value={truth.text} />
          )}
        </div>
      }
      <SiteText style={{}} value={`${month} ${day}, ${year}`} />
    </FlexBox>
  );
};
