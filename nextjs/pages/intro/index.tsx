import React from "react";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import { TITLE, INTRODUCTION, SKILLS } from "@/shared/constants";
import {
  IntroContainer,
  IntroSongKangSan,
  IntroInfoContainer,
  IntroInfo,
  IntroTitle,
  IntroBox,
  IntroStack,
} from "../../styles/IntroStyles";
import Board from "@/components/common/Board";

const Intro: React.FC = () => {
  return (
    <Board
      RenderComponent={
        <IntroContainer>
          <IntroSongKangSan src="intro/songkangsan.png" />
          <IntroInfoContainer>
            <IntroInfo>
              <IntroTitle>
                <div className="name">{TITLE.name}</div>
                <div>{TITLE.title}</div>
              </IntroTitle>
              <IntroBox>
                <MarkdownRenderer content={INTRODUCTION} />
              </IntroBox>
            </IntroInfo>
            <IntroStack>
              {SKILLS.map((skill) => (
                <div className="scoreContainer" key={skill.label}>
                  <div className="label">{skill.label}</div>
                  <div className="score">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className={index < skill.level ? "filled" : "empty"}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </IntroStack>
          </IntroInfoContainer>
        </IntroContainer>
      }
    />
  );
};

export default Intro;
