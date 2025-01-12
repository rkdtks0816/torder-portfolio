import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `운영체제`,
  time: "241120_2",
  tags: [tags.softwareDevelopment],
  content: `
        ## 컴퓨터를 더 쉽게 사용하기 위한 SW!
        > 하드웨어 및 소프트웨어 자원을 효율적으로 관리하며 공통된 기능 제공
         
        - 현행 시스템 분석
            - 품질: 신뢰도, 성능
            - 지원: 기술 지원, 주변 기기, 구축 비용
        - 종류: 윈도즈, 유닉스, 리눅스, 안드로이드, ios
        
        \`\`\`
        수제비 2023 정보처리기사 필기를 기반으로 작성한 글입니다.
        \`\`\`
    `,
};

export default post;
