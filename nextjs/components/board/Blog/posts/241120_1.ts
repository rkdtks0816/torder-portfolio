import { Post } from "@/shared/interfaces/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `플랫폼`,
  time: "241120_1",
  tags: [tags.softwareDevelopment],
  content: `
        ## 애플리케이션 구동에 필요한 SW 환경!
        > 플랫폼 내에서는 상호 호환이 가능한 결합체
         
        - 유형: 싱글, 투, 멀티
        - 기능: 비용 감소, 생산성 향상, 네트워크 효과
        - 기능 분석 절차
            1. 현행 플랫폼 자료 수집
            2. 수집 자료 분석
            3. 결과 산출물 작성
        - 성능 특성 분석
            - 기법: 사용자 인터뷰, 성능 테스트, 산출물 점검
            - 항목: 경과 시간, 사용률, 응답시간, 가용성
        
        \`\`\`
        수제비 2023 정보처리기사 필기를 기반으로 작성한 글입니다.
        \`\`\`
    `,
};

export default post;
