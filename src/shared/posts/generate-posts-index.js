// node ./src/shared/posts/generate-posts-index.js

import { readdir, writeFileSync } from "fs";
import { join, basename } from "path";

// posts 디렉토리 경로 설정
const postsDirectory = join(process.cwd(), "src", "shared", "posts");
const indexFile = join(postsDirectory, "index.ts");

// 파일을 읽고 index.ts 파일을 생성하는 함수
readdir(postsDirectory, (err, files) => {
  if (err) throw err;

  const postImports = [];
  const postExports = [];

  files.forEach((file) => {
    if (file !== "index.ts" && file !== "generate-posts-index.js") {
      const postName = basename(file, ".ts");
      postImports.push(`import post${postName} from './${postName}';`);
      postExports.push(`post${postName}`);
    }
  });

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
});
