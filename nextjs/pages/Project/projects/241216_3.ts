import { Post } from "@/shared/interfaces/post";
import { titles } from "../ProjectTitles";

const post: Post = {
  title: `마크다운 구현`,
  time: "241216_3",
  tags: [titles.myPersonalHomepage.name],
  content: `
    # 제목 1
    가장 큰 제목입니다.

    ## 제목 2
    두 번째로 큰 제목입니다.

    ### 제목 3
    세 번째로 큰 제목입니다.

    ---

    ## 리스트
    ### 순서 없는 리스트
    - 항목 1
      - 하위 항목 1-1
      - 하위 항목 1-2
        - 하위 항목 1-2-1
    - 항목 2

    ### 순서 있는 리스트
    1. 첫 번째 항목
    2. 두 번째 항목
      1. 하위 항목 2-1
      2. 하위 항목 2-2
    3. 세 번째 항목
    
    ---

    ## 텍스트 서식
    - **굵은 텍스트**
    - _기울임 텍스트_
    - **_굵고 기울임 텍스트_**
    - ~~취소선~~

    ---

    ## 링크와 이미지
    ### 링크
    [Google](https://www.google.com)

    ### 이미지
    ![대체 텍스트](https://via.placeholder.com/150)

    ---

    ## 코드
    ### 인라인 코드
    \`console.log("Hello, World!");\`

    ### 코드 블록
    \`\`\`
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("ChatGPT");
    \`\`\`

    ---

    ## 인용문
    > 이것은 인용문입니다.
    >> 중첩된 인용문입니다.

    ---

    ## 구분선
    다양한 구분선 형식:
    - \`---\`
    - \`***\`
    - \`___\`

    ---

    ## 표
    | 열1       | 열2       | 열3       |
    |-----------|-----------|-----------|
    | 데이터1   | 데이터2  | 데이터3   |
    | 데이터4   | 데이터5   | 데이터6   |

    ---

    ## 혼합 사용
    > **인용문 안에서의 강조**
    >
    > - 리스트도 사용 가능
    > - 그리고 [링크](https://example.com)도 포함 가능
    >
    > \`\`\`
     여기에 코드도 작성할 수 있습니다.
     \`\`\`

    ---

    ## 특수 문자
    HTML 엔티티를 사용할 수 있습니다:  
    - & a m p ; → &  
    - & l t ; → <  
    - & g t ; → >
  `,
};

export default post;
