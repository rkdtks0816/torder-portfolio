import React from "react";
import { StyledMarkdown } from "./StyledMarkdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
  content: string;
}

const removeIndentation = (content: string) => {
  const lines = content.split("\n");
  const minIndentation = Math.min(
      ...lines
          .filter((line) => line.trim().length > 0)
          .map((line) => line.match(/^\s*/)?.[0].length || 0)
  );

  return lines
      .map((line) => (line.startsWith(" ") ? line.slice(minIndentation) : line))
      .join("\n");
};

const convertSubSuper = (content: string) => {
  let transformedContent = content.replace(/\^([^^]+)\^/g, "<sup>$1</sup>");
  transformedContent = transformedContent.replace(/~([^~]+)~/g, "<sub>$1</sub>");
  return transformedContent;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const processedContent = removeIndentation(content);
  const finalContent = convertSubSuper(processedContent);

  return (
      <StyledMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
      >
        {finalContent}
      </StyledMarkdown>
  );
};

export default MarkdownRenderer;
