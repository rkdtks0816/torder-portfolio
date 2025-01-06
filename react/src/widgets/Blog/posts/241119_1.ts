import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `비트와 바이트`,
  time: "241119_1",
  tags: [tags.computerArchitecture],
  content: `
    ## 8비트는 1바이트!
    - 이전 단위 1000개
        - kB, MB, GB, TB
    - 이전 단위 1024개
        - kiB, MiB, GiB, TiB
    - 워드
        > CPU가 한번에 처리할 수 있는 데이터의 크기
        - 현대 컴퓨터는 32비트 또는 64비트

    \`\`\`
    이것이 취업을 위한 컴퓨터 과학이다 
    with CS 기술 면접을 기반으로 작성한 글입니다.
    \`\`\`
    `,
};

export default post;
