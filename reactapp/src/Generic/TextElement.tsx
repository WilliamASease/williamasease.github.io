import { ReactElement } from "react";
type IProps = {
  children?: ReactElement;
  text?: string;
};

export const TextElement = (props: IProps) => {
  const { children, text } = props;
  return (
    <div>
      <div className="textElement">
        <div>{text}</div>
        {children}
      </div>
    </div>
  );
};
