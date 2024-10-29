// node ./src/shared/posts/generate-posts-index.js
import { readdirSync, writeFileSync, statSync, existsSync } from "fs";
import { join, basename } from "path";

// posts 디렉토리 경로 설정
const postsDirectory = join(process.cwd(), "src", "shared", "posts");
const indexFile = join(postsDirectory, "index.ts");

// 파일을 읽고 index.ts 파일을 생성하는 함수
const postImports = [];
const postExports = [];

// 1, 2, 3... 26 폴더에 대한 반복 처리
for (let i = 1; i <= 26; i++) {
  const folderName = i.toString();
  const folderPath = join(postsDirectory, folderName);

  // 폴더가 존재하는지 확인
  if (existsSync(folderPath) && statSync(folderPath).isDirectory()) {
    const files = readdirSync(folderPath);
    const folderExports = [];

    // 폴더 내 파일 처리
    files.forEach((file) => {
      if (file !== "index.ts" && file !== "generate-posts-index.js") {
        const postName = basename(file, ".ts");
        const importName = `post${folderName}_${postName}`; // 폴더와 파일을 구분
        postImports.push(
          `import ${importName} from './${folderName}/${postName}';`
        );
        folderExports.push(importName);
      }
    });

    // 폴더 내에 파일이 없으면 빈 배열 추가
    if (folderExports.length === 0) {
      postExports.push(`[]`);
    } else {
      postExports.push(`[${folderExports.join(", ")}]`);
    }
  } else {
    // 폴더가 없을 경우 빈 배열 추가
    postExports.push(`[]`);
  }
}

const indexContent = `
export interface Post {
    title: string;
    tag: string;
    content: string;
}
${postImports.join("\n")}

export const posts = [
    ${postExports.join(",\n")}
];
`;

writeFileSync(indexFile, indexContent, "utf8");
console.log("index.ts 파일이 성공적으로 생성되었습니다.");
