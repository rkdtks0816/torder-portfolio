import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";

// 기본 스타일 설정
export const StyledMarkdown = styled(ReactMarkdown)`
  strong {
    font-weight: bold;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
  li {
    line-height: 1.5;
  }
  pre {
    background-color: #f5f5f5;
    padding: 0;
    border-radius: 5px;
    overflow-x: auto;
    margin: 0;
  }
  code {
    font-family: "Fira Code", monospace;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  hr {
    margin: 3px;
  }
`;

const removeIndentation = (content: string) => {
  return content.replace(/^[ \t]+/gm, ""); // 각 줄의 앞부분 공백 제거
};

const MarkdownStyles: React.FC<{ children: string }> = ({ children }) => {
  const processedContent = removeIndentation(children);
  return (
    <StyledMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeHighlight]}
    >
      {processedContent}
    </StyledMarkdown>
  );
};

export default MarkdownStyles;
