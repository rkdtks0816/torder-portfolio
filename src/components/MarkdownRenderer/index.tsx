import React from "react";
import DOMPurify from "dompurify";
import { StyledMarkdown } from "./StyledMarkdown";

interface MarkdownRendererProps {
  content: string;
}
function parseMarkdown(markdown: string) {
  let html = markdown;

  // 초기 HTML 변환
  html = html.replace(/^\t{2}/gm, ""); // 탭 2개 제거
  html = html.replace(/^[-*_\s]{3,}$/gm, "<hr>"); // 구분선 처리
  html = html.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>"); // h3 처리
  html = html.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>"); // h2 처리
  html = html.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>"); // h1 처리

  html = html.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>"); // 코드블록
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>"); // 인라인 코드
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // 굵은 텍스트
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>"); // 기울임 텍스트
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>'); // 링크
  html = html.replace(/^>\s+(.*)$/gm, "<blockquote>$1</blockquote>"); // 인용문

  // Markdown 라인별 처리
  const lines = html.split("\n");
  const stack: string[] = [];
  let result = "";

  lines.forEach((line) => {
    const listMatch = line.match(/^(\t*)([-*]|(\d+)\.)\s+(.*)/);
    const headingOrHrMatch = line.match(/^(<h[1-3]>.*<\/h[1-3]>|<hr>)$/);

    // 헤딩 또는 구분선이 등장하면, 현재 리스트를 닫고 라인 추가
    if (headingOrHrMatch) {
      while (stack.length > 0) {
        const lastTag = stack.pop();
        result += `</${lastTag}>\n`;
      }
      result += `${line}\n`; // 헤딩 또는 구분선 추가
      return;
    }

    // 리스트 항목 처리
    if (listMatch) {
      const indentLevel = listMatch[1].length; // 들여쓰기 수준
      const bullet = listMatch[2]; // 리스트 기호
      const content = listMatch[4]; // 리스트 내용
      const listTag = bullet.match(/^\d+\.$/) ? "ol" : "ul"; // ul 또는 ol 판단

      // 스택 업데이트
      while (stack.length <= indentLevel) {
        stack.push(listTag);
        result += `<${listTag}>\n`;
      }
      while (stack.length > indentLevel + 1) {
        const lastTag = stack.pop();
        result += `</${lastTag}>\n`;
      }

      result += `<li>${content}</li>\n`;
      return;
    }

    // 리스트 외의 일반 텍스트
    result += `${line}\n`;
  });

  // 닫히지 않은 리스트 마무리
  while (stack.length > 0) {
    const lastTag = stack.pop();
    result += `</${lastTag}>\n`;
  }

  html = result;

  // 테이블 처리
  html = html.replace(/\|([^\n]*)\|/g, (match, content) => {
    const cells = content
      .split("|")
      .map((cell: string) => `<td>${cell.trim()}</td>`)
      .join("");
    return `<tr>${cells}</tr>`;
  });
  html = html.replace(/<tr>(.*?)<\/tr>/g, "<table><tbody>$&</tbody></table>");
  console.log(html);
  return html;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const markdown = parseMarkdown(content);
  const safeMarkdown = DOMPurify.sanitize(markdown);

  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: safeMarkdown }} />;
};

export default MarkdownRenderer;
