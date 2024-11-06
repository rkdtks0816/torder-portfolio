import React from "react";
import { StyledMarkdown } from "./StyledMarkdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";

interface MarkdownRendererProps {
  content: string;
}

const removeIndentation = (content: string) => {
  // 모든 라인에서 공백을 유지하기 위해 첫 번째 라인 공백을 기준으로 조정
  const lines = content.split("\n");
  const minIndentation = Math.min(
      ...lines
          .filter((line) => line.trim().length > 0) // 빈 줄 제외
          .map((line) => line.match(/^\s*/)?.[0].length || 0)
  );

  // 최소 공백을 기준으로 모든 줄에서 공백 제거
  return lines
      .map((line) => (line.startsWith(" ") ? line.slice(minIndentation) : line))
      .join("\n");
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const processedContent = removeIndentation(content);

  return (
    <StyledMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeHighlight]}
    >
      {processedContent}
    </StyledMarkdown>
  );
};

export default MarkdownRenderer;
