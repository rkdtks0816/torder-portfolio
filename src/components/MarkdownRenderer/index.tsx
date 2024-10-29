import React from "react";
import { StyledMarkdown } from "./StyledMarkdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";

interface MarkdownRendererProps {
  content: string;
}

const removeIndentation = (content: string) => {
  return content.replace(/^[ \t]+/gm, ""); // 각 줄의 앞부분 공백 제거
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
