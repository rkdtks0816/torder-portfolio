import React from "react";
import DOMPurify from "dompurify";
import { StyledMarkdown } from "./StyledMarkdown";

interface MarkdownRendererProps {
  content: string;
}
function parseMarkdown(markdown: string) {
  let html = markdown;

  // 코드 블럭 보호: 임시 토큰으로 치환
  const codeBlocks: string[] = [];
  html = html.replace(/```\n([\s\S]*?)```/g, (_, code) => {
    const index = codeBlocks.length;
    codeBlocks.push(code);
    return `<CODEBLOCK${index}>`;
  });

  const lines = html.split("\n");
  let result = "";
  const tagStack: string[] = [];
  let indentSizes = [-1];
  let currentQuoteLevel = 0;
  let tableLines: string[] = [];
  let inTable = false;

  lines.forEach((line) => {
    // 표 감지
    if (line.match(/\|.*\|$/)) {
      inTable = true;
      tableLines.push(line.trim());
      return;
    } else if (inTable) {
      // 표가 끝났다면 출력
      let table = "<table>";
      const headers = tableLines[0]
        .split("|")
        .filter(Boolean)
        .map((cell) => `<th>${cell.trim()}</th>`)
        .join("");
      table += `<thead><tr>${headers}</tr></thead><tbody>`;

      for (let i = 2; i < tableLines.length; i++) {
        const row = tableLines[i]
          .split("|")
          .filter(Boolean)
          .map((cell) => `<td>${cell.trim()}</td>`)
          .join("");
        table += `<tr>${row}</tr>`;
      }
      table += `</tbody></table>\n`;
      result += table;
      tableLines = [];
      inTable = false;
    }

    // 들여쓰기 끝
    const emptyLine = line.match(/^(\s*)$/);
    if (emptyLine) {
      while (currentQuoteLevel > 0) {
        result += `</blockquote>\n`;
        currentQuoteLevel--;
      }
      while (tagStack.length > 0) {
        const lastTag = tagStack.pop();
        result += `</li></${lastTag}>\n`;
        indentSizes.pop();
      }
      return;
    }

    // 인용문 처리
    const quoteMatch = line.match(/^(\s*)>(>*)\s*(.*)/);
    if (quoteMatch) {
      const quoteLevel = quoteMatch[2].length + 1; // 현재 인용문 깊이
      line = quoteMatch[3];

      // 기존 인용문과 레벨이 다르면 태그 처리
      while (currentQuoteLevel > quoteLevel) {
        result += `</blockquote>\n`;
        currentQuoteLevel--;
      }
      while (currentQuoteLevel < quoteLevel) {
        result += `<blockquote>`;
        currentQuoteLevel++;
      }
    }

    // 리스트 항목 처리
    const listMatch = line.match(/^(.*?)([-*]|\d+\.)\s+(.*)/);
    if (listMatch) {
      let lastindentSize = indentSizes[indentSizes.length - 1];
      const nowindentSize = listMatch[1].length; // 들여쓰기 길이
      const bullet = listMatch[2]; // 리스트 기호 (-, *, 1.)
      const content = listMatch[3]; // 리스트 내용
      const listTag = bullet.match(/^\d+\.$/) ? "ol" : "ul"; // ul 또는 ol 판단
      // 이전 태그 닫기
      while (nowindentSize < lastindentSize && indentSizes.length > 1) {
        const lastTag = tagStack.pop();
        result += `</li></${lastTag}>`;
        indentSizes.pop();
        lastindentSize = indentSizes[indentSizes.length - 1];
      }
      // 새로운 태그 열기
      if (nowindentSize > lastindentSize) {
        indentSizes.push(nowindentSize);
        tagStack.push(listTag);
        result += `<${listTag}><li>${content}`;
      } else {
        result += `</li><li>${content}`;
      }
    } else {
      if (indentSizes.length > 1) result += `<br>`;
      result += `${line.trim()}\n`;
    }

    // 테이블 처리
  });
  html = result;

  html = html.replace(/^(.*?)###\s+(.*)$/gm, "$1<h3>$2</h3>"); // h3 처리
  html = html.replace(/^(.*?)##\s+(.*)$/gm, "$1<h2>$2</h2>"); // h2 처리
  html = html.replace(/^(.*?)#\s+(.*)$/gm, "$1<h1>$2</h1>"); // h1 처리
  html = html.replace(
    /(\s+)```([\s\S]*?)```/gm,
    "$1<pre><code>$2</code></pre>"
  ); // 코드블록
  html = html.replace(/^(.*?)[-*_]{3,}$/gm, "$1<hr>"); // 구분선
  html = html.replace(/^(.*?)`([^`]+)`/gm, "$1<code>$2</code>"); // 인라인 코드
  html = html.replace(/^(.*?)\*\*(.*?)\*\*/gm, "$1<strong>$2</strong>"); // 굵은 텍스트
  html = html.replace(/^(.*?)\_(.*?)\_/gm, "$1<em>$2</em>"); // 기울임 텍스트
  html = html.replace(/^(.*?)\~~(.*?)\~~/gm, "$1<del>$2</del>"); // 기울임 텍스트
  html = html.replace(
    /^(.*?)!\[(.*?)\]\((.*?)\)/gm,
    '$1<img src="$3" alt="$2">\n'
  ); // 이미지
  html = html.replace(/^(.*?)\[(.*?)\]\((.*?)\)/gm, '$1<a href="$3">$2</a>'); // 링크
  html = html.replace(/^(?!<.*?>)(.+)$/gm, "<p>$1</p>"); // 글자만 있는 줄
  html = html.replace(/<CODEBLOCK(\d+)>/g, (_, index) => {
    const code = codeBlocks[parseInt(index)];
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  });
  function escapeHtml(code: string) {
    return code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  return html;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const markdown = parseMarkdown(content);
  const safeMarkdown = DOMPurify.sanitize(markdown);

  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: safeMarkdown }} />;
};

export default MarkdownRenderer;
