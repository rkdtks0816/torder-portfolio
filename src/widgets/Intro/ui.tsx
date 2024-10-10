import styled from "styled-components";
import "highlight.js/styles/github.css"; // GitHub 스타일의 코드 하이라이트 적용 (원하는 테마로 교체 가능)
import MarkdownStyles from "@/shared/styles/MarkdownStyles";
import { COLORS } from "@/shared/constants/colors";

const IntroContainer = styled.div`
  width: 50%;
  height: calc(100vh - 150px);
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    width: calc(100% - 40px);
  }
`;

const IntroSongKangSan = styled.img`
  height: 100%;
`;

const IntroInfoContainer = styled.div`
  position: absolute;
  right: 0;
  top: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #d7fbe8;
  opacity: 0.8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
  border-radius: 10px;
`;
const IntroTitle = styled.div`
  .name {
    font-size: 24px;
    font-weight: bold;
    font-family: "HakgyoansimByeolbichhaneul";
  }
`;
const IntroBox = styled.div`
  width: calc(100% - 20px);
  padding: 0 10px;
  background-color: #ffffff;
  border-radius: 10px;
`;
const IntroStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #d7fbe8;
  opacity: 0.8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
  border-radius: 10px;
  .scoreContainer {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #ffffff;
  }

  .label {
    font-size: 20px;
    font-family: "HakgyoansimByeolbichhaneul";
  }

  .score {
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: space-between;
  }

  .filled,
  .empty {
    width: 25%;
    height: 100%;
    clip-path: polygon(30% 0, 100% 0, 70% 100%, 0 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .filled {
    background-color: ${COLORS.text};
  }

  .empty {
    background-color: ${COLORS.accent};
  }
`;

const Intro: React.FC = () => {
  const history = `
  2023.07 ~ 2024.06
  **삼성 청년 SW 아카데미** 임베디드
  ***
  2022.06 ~ 2022.12
  **광주 인공지능 사관학교** 클라우드 
  ***
  2016.03 ~ 2023.02
  **전북대학교** 전자공학부
  `;
  return (
    <IntroContainer>
      <IntroSongKangSan src="intro/songkangsan.png" />
      <IntroInfoContainer>
        <IntroInfo>
          <IntroTitle>
            <div className="name">송강산</div>
            <div>주니어개발자</div>
          </IntroTitle>
          <IntroBox>
            <MarkdownStyles>{history}</MarkdownStyles>
          </IntroBox>
        </IntroInfo>
        <IntroStack>
          <div className="scoreContainer">
            <div className="label">프론트엔드</div>
            <div className="score">
              <div className="filled"></div>
              <div className="filled"></div>
              <div className="filled"></div>
              <div className="empty"></div>
              <div className="empty"></div>
            </div>
          </div>

          <div className="scoreContainer">
            <div className="label">백엔드</div>
            <div className="score">
              <div className="filled"></div>
              <div className="filled"></div>
              <div className="empty"></div>
              <div className="empty"></div>
              <div className="empty"></div>
            </div>
          </div>

          <div className="scoreContainer">
            <div className="label">임베디드</div>
            <div className="score">
              <div className="filled"></div>
              <div className="filled"></div>
              <div className="empty"></div>
              <div className="empty"></div>
              <div className="empty"></div>
            </div>
          </div>
        </IntroStack>
      </IntroInfoContainer>
    </IntroContainer>
  );
};

export default Intro;
