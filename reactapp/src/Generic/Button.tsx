import { ReactElement } from "react";
type IProps = {
  onPress?: () => void;
  children?: ReactElement;
  text?: string;
};

export const Button = (props: IProps) => {
  const { onPress, children, text } = props;
  return (
    <div>
      <button className="button" onClick={onPress}>
        <div>{text}</div>
        {children}
      </button>
    </div>
  );
};
