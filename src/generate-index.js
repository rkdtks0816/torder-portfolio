// node ./src/generate-index.js
import { readdirSync, writeFileSync, statSync, existsSync } from "fs";
import { join, basename } from "path";

// 공통 함수: index.ts 파일 생성
const generateIndex = (baseDirectory, outputFileName) => {
  const indexFile = join(baseDirectory, outputFileName);
  const imports = [];
  const exports = [];

  // 폴더에 대한 반복 처리
  for (let i = 1; i <= 20; i++) {
    const folderName = i.toString();
    const folderPath = join(baseDirectory, folderName);

    // 폴더가 존재하는지 확인
    if (existsSync(folderPath) && statSync(folderPath).isDirectory()) {
      const files = readdirSync(folderPath);
      const folderExports = [];

      // 폴더 내 파일 처리
      files.forEach((file) => {
        if (file !== "index.ts") {
          const fileName = basename(file, ".ts");
          const importName = `${outputFileName.replace(
            ".ts",
            ""
          )}_${folderName}_${fileName}`;
          imports.push(
            `import ${importName} from './${folderName}/${fileName}';`
          );
          folderExports.push(importName);
        }
      });

      // 폴더 내에 파일이 없으면 빈 배열 추가
      if (folderExports.length === 0) {
        exports.push(`[]`);
      } else {
        exports.push(`[${folderExports.join(", ")}]`);
      }
    } else {
      // 폴더가 없을 경우 빈 배열 추가
      exports.push(`[]`);
    }
  }

  const indexContent = `
export interface Post {
    title: string;
    tag: string;
    content: string;
}
${imports.join("\n")}

export const posts = [
    ${exports.join(",\n")}
];
`;

  writeFileSync(indexFile, indexContent, "utf8");
  console.log(`${outputFileName} 파일이 성공적으로 생성되었습니다.`);
};

// 디렉토리 경로 설정
const postsDirectory = join(process.cwd(), "src", "posts");
const projectsDirectory = join(process.cwd(), "src", "projects");

// posts와 projects 디렉토리에 대해 index.ts 생성
generateIndex(postsDirectory, "index.ts");
generateIndex(projectsDirectory, "index.ts");
