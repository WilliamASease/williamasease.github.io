import { TextElement } from "./TextElement";

type IProps = {
  text: string;
  link: string;
};

export const Anchor = (props: IProps) => {
  const { text, link } = props;
  return (
    <div>
      <a href={link}>
        <TextElement size="small" text={text} />
      </a>
    </div>
  );
};
