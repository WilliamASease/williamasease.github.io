import { FlexElement } from "../../Generic/FlexElement";
import { TextElement } from "../../Generic/TextElement";
import { Puyo } from "../../Puyo/Puyo";
import { contentType } from "../Main";

type IProps = {
  content: contentType;
};

export const ContentBody = (props: IProps) => {
  const { content } = props;
  return (
    <FlexElement orientation={"COL"} enforceAlign topPadding={5}>
      {content === "photo" && (
        <img
          src="https://williamasease.github.io/Portrait.png"
          style={{ borderRadius: 10 }}
        />
      )}
      {content === "skills" && (
        <TextElement needsBackGround>
          <p>
            <b>Well-developed communication and teamwork skills</b>
          </p>
          <p>
            <b>
              Java, Javascript, C/C++/C#, SAS9, R, SQL, and Debian 9
              (Linux/Unix)
            </b>
          </p>
        </TextElement>
      )}
      {content === "education" && (
        <TextElement needsBackGround>
          <p>
            <b>Appalachian State University, Boone, NC</b>
          </p>
          <p>Bachelor of Science in Computer Science, May 2021</p>
          <p>GPA: 3.75</p>
          <p>
            <b>Leesville Road High School, Raleigh, NC</b>
          </p>
          <p>1380 SAT/30 ACT</p>
          <p>Graduating GPA: 3.9</p>
        </TextElement>
      )}
      {content === "projects" && (
        <TextElement needsBackGround>
          <p>
            <b>Beans Java-- Sole Developer</b>
          </p>
          <p>Simple Java Game</p>
          <p>https://github.com/WilliamASease/BeansJava &lt;- Try it!</p>
          <p>
            <b>Tetris Galaxy-- Graphics Programmer</b>
          </p>
          <p>Apphack X 1st Prize</p>
          <p>
            Wrote the Java-Swing frontend for a game created in a strict
            timeframe
          </p>
          <p>https://github.com/swansonmp/tetrisGalaxy &lt;- Try it!</p>
          <p>
            <b>Rogolf -- Developer</b>
          </p>
          <p>
            Play it in browser at student2.cs.appstate.edu/seasewa/rogolf &lt;-
          </p>
          <p>Unity with C#</p>
          <p>
            <b>Java Mode7 Demo</b>
          </p>
          <p>Java with Swing</p>
          <p>Simple tech demo featuring 3D rendering on low spec machines!</p>
          <p>https://www.youtube.com/watch?v=7a97zlXLQ7Q</p>
          <p>https://github.com/WilliamASease/Mode7Game &lt;- Try it!</p>
          <p>
            <b>
              Other code samples and in-progress projects at
              https://github.com/WilliamASease
            </b>
          </p>
        </TextElement>
      )}
      {content === "accomplishments" && (
        <TextElement needsBackGround>
          <p>
            <b>
              Assistant to IT Professional, RaleighITGuy
              (https://raleighitguy.com/) Jan 2017 – April 2017
            </b>
          </p>
          <p>
            <b>Apphack X, First Prize, April 2019</b>
          </p>
          <p>
            Tetris Galaxy, a spin on the classic puzzle game, complete with
            real-time graphics
          </p>
          <p>
            <b>
              A-Team, Appalachian State Competitive Programming, Sep 2018 -
              present
            </b>
          </p>
          <p>2019 ICPC Mid-Atlantic regional: 22nd of 154 teams</p>
          <p>2020 ICPC Mid-Atlantic regional: 17th of 84 teams</p>
          <p>
            https://mausa19.kattis.com/standings,
            https://mausa20.kattis.com/standings
          </p>
        </TextElement>
      )}
      {content === "workexperience" && (
        <TextElement needsBackGround>
          <p>
            <b>
              Epic Systems Corporation, Full Stack Software Developer, MyChart
              “Clinicals” Division, June 2021 - June 2022
            </b>
          </p>
          <p>
            <b>
              SAS institute, Senior Associate Software Developer, Health &amp;
              Life Sciences, July 2022 - Present
            </b>
          </p>
        </TextElement>
      )}
      {content === "puyo" && <Puyo />}
    </FlexElement>
  );
};
