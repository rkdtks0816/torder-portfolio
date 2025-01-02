import { Post } from "@/shared/interfaces/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `네트워크`,
  time: "241120_3",
  tags: [tags.softwareDevelopment],
  content: `
        ## 서로 데이터를 교환하는 기술!
        > 데이터 링크는 유무선 매체로 성립
         
        - 현행 시스템 분석
            - 네트워크 구성도: 서버 위치, 연결 방식
            - 백본망: 각 LAN, 부분망 간에 정보 교환 망
            - 라우터: 3계층 데이터 패킷을 경로를 지정해 전달하는 장비
            - 스위치: 2계층 장비, 출발지에서 MAC 주소 기반으로 목적지로 데이터 전달하는 장비
            - 게이트웨이: 다른 통신망, 프로토콜을 사용하는 네트워크 간의 통신을 가능하게 하는 장비
            - 방화벽: 내외부 네트워크의 영향을 차단하기 위한 보안 시스템
        
        \`\`\`
        수제비 2023 정보처리기사 필기를 기반으로 작성한 글입니다.
        \`\`\`
    `,
};

export default post;
