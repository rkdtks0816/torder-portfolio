import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `DBMS`,
  time: "241120_4",
  tags: [tags.softwareDevelopment],
  content: `
        ## 데이터 집합, 저장, 관리 제공!
        > 데이터베이스 기능 제공하는 응용 프로그램
        - 기능
            - 중복제어
            - 접근 통제
            - 인터페이스 제공
            - 관계 표현
            - 샤딩/파티셔닝
            - 무결성 제약조건
            - 백업 및 회복
        - 현행 시스템 분석
            - 성능: 가용성, 성능, 상호 호환성
            - 지원: 기술 지원, 구축 비용
        
        \`\`\`
        수제비 2023 정보처리기사 필기를 기반으로 작성한 글입니다.
        \`\`\`
    `,
};

export default post;
