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
  }
  code {
    font-family: "Fira Code", monospace;
    background-color: #f0f0f0;
    padding: 2px 4px;
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

// 기본 플러그인이 적용된 Markdown 컴포넌트 생성
const MarkdownStyles: React.FC<{ children: string }> = ({ children }) => {
  return (
    <StyledMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeHighlight]}
    >
      {children}
    </StyledMarkdown>
  );
};

export default MarkdownStyles;
