import { readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const generateIndex = (baseDirectory) => {
  const outputFileName = "index.ts";
  const indexFile = join(baseDirectory, outputFileName);
  const imports = [];
  const allPosts = [];

  // 디렉토리 내 파일 읽기
  const files = readdirSync(baseDirectory).filter(
    (file) => file !== "index.ts" && file.endsWith(".ts")
  );

  files.forEach((file) => {
    const fileName = basename(file, ".ts");
    const importName = `index_${fileName}`;
    imports.push(`import ${importName} from './${fileName}';`);
    allPosts.push(importName);
  });

  // index.ts 내용 생성
  const indexContent = `
${imports.join("\n")}

export const posts = [${allPosts.join(", ")}];
`;

  writeFileSync(indexFile, indexContent, "utf8");
  console.log(`${indexFile} 파일이 성공적으로 생성되었습니다.`);
};

// posts 및 projects 디렉토리에 대해 index.ts 생성
const postsDirectory = join(process.cwd(), "src/widgets/Blog/posts");
const projectsDirectory = join(process.cwd(), "src/widgets/Project/projects");

generateIndex(postsDirectory);
generateIndex(projectsDirectory);

console.log("모든 index.ts 파일이 성공적으로 생성되었습니다.");

// node ./src/generate-index.js
