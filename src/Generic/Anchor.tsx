type IProps = {
  text: string;
  link: string;
};

export const Anchor = (props: IProps) => {
  const { text, link } = props;
  return (
    <div>
      <a href={link} target="_blank">
        <div className="linkElement">{text}</div>
      </a>
    </div>
  );
};
