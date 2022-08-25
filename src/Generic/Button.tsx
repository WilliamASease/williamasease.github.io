import { ReactElement } from "react";
type IProps = {
  onPress?: () => void;
  children?: ReactElement;
  text?: string;
  style?: React.CSSProperties;
};

export const Button = (props: IProps) => {
  const { onPress, children, text, style } = props;
  return (
    <div>
      <button style={style} className={"button"} onClick={onPress}>
        <div>{text}</div>
        {children}
      </button>
    </div>
  );
};
