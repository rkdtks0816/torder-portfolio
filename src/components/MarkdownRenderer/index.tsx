import React from "react";
import DOMPurify from "dompurify";
import { StyledMarkdown } from "./StyledMarkdown";

interface MarkdownRendererProps {
  content: string;
}
function parseMarkdown(markdown: string) {
  let html = markdown;

  const lines = html.split("\n");
  let result = "";
  const tagStack: string[] = [];
  let indentSizes = [-1];

  lines.forEach((line) => {
    // 들여쓰기 끝
    const emptyLine = line.match(/^(\s*)$/);
    if (emptyLine) {
      while (tagStack.length > 0) {
        const lastTag = tagStack.pop();
        result += `</li>\n</${lastTag}>\n`;
        indentSizes.pop();
      }
      return;
    }
    // 들여쓰기 시작
    const listMatch = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)/);
    if (listMatch) {
      let lastindentSize = indentSizes[indentSizes.length - 1];
      const nowindentSize = listMatch[1].length; // 들여쓰기 길이
      const bullet = listMatch[2]; // 리스트 기호 (-, *, 1.)
      const content = listMatch[3]; // 리스트 내용
      const listTag = bullet.match(/^\d+\.$/) ? "ol" : "ul"; // ul 또는 ol 판단
      // 이전 태그 닫기
      while (nowindentSize < lastindentSize && indentSizes.length > 1) {
        const lastTag = tagStack.pop();
        result += `</li>\n</${lastTag}>\n`;
        indentSizes.pop();
        lastindentSize = indentSizes[indentSizes.length - 1];
      }
      // 새로운 태그 열기
      if (nowindentSize > lastindentSize) {
        indentSizes.push(nowindentSize);
        tagStack.push(listTag);
        result += `<${listTag}>\n<li>\n${content}\n`;
      } else {
        result += `</li>\n<li>\n${content}\n`;
      }
    } else {
      if (indentSizes.length > 1) result += `<br>\n`;
      result += `${line}\n`;
    }
  });
  html = result;

  html = html.replace(/[-*_\s]{3,}$/gm, "<hr>"); // 구분선 처리
  html = html.replace(/###\s+(.*)$/gm, "<h3>$1</h3>"); // h3 처리
  html = html.replace(/##\s+(.*)$/gm, "<h2>$1</h2>"); // h2 처리
  html = html.replace(/#\s+(.*)$/gm, "<h1>$1</h1>"); // h1 처리
  html = html.replace(/```([\s\S]*?)```/gm, "<pre><code>$1</code></pre>"); // 코드블록
  html = html.replace(/`([^`]+)`/gm, "<code>$1</code>"); // 인라인 코드
  html = html.replace(/\*\*(.*?)\*\*/gm, "<strong>$1</strong>"); // 굵은 텍스트
  html = html.replace(/\*(.*?)\*/gm, "<em>$1</em>"); // 기울임 텍스트
  html = html.replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>'); // 링크
  html = html.replace(/^>\s+(.*)$/gm, "<blockquote>$1</blockquote>"); // 인용문
  console.log(html);

  return html;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const markdown = parseMarkdown(content);
  const safeMarkdown = DOMPurify.sanitize(markdown);

  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: safeMarkdown }} />;
};

export default MarkdownRenderer;
