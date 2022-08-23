import { songType } from "./PuyoTypes";

type IProps = {
  song: songType;
};

export const PuyoSong = (props: IProps) => {
  const { song } = props;
  return (
    <div style={{ position: "fixed", bottom: 1, right: 1 }}>
      {song === "Big In Japan" && (
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/E2HeDHkL9kg?autoplay=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      )}
      {song === "Requiem In D" && (
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/XmttZ-BnwaI?autoplay=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      )}
      {song === "Gymnopedies" && (
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/wnacdOIoTBQ?autoplay=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      )}
      {song === "Laid Back Endless Puyo" && (
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/4K9yyI9DR78?autoplay=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      )}
    </div>
  );
};
