import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";

// ChatGPT 스타일 설정
export const StyledMarkdown = styled(ReactMarkdown)`
  /* 본문 텍스트 스타일 */
  p {
    margin: 12px 0;
    line-height: 1.3;
    font-size: 13px;
    color: #2e2e2e;
  }

  /* 헤더 스타일 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0 12px;
    font-weight: bold;
    line-height: 1.3;
    color: #1a1a1a;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  /* 리스트 스타일 */
  ul,
  ol {
    padding-left: 16px;
    margin: 12px 0;
    line-height: 1.3;
  }

  ul li {
    list-style-type: disc;
  }

  ol li {
    list-style-type: decimal;
  }

  /* 코드 블록 스타일 */
  pre {
    background-color: #f9f9f9;
    border-left: 4px solid #ffa726;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 6px;
    font-size: 10px;
    overflow-x: auto;
  }

  code {
    background-color: rgba(255, 165, 0, 0.1);
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 10px;
    font-family: "Fira Code", monospace;
  }

  /* 인라인 코드 */
  pre > code {
    background-color: inherit;
    padding: 0;
  }

  /* 테이블 스타일 */
  table {
    width: 100%;
    margin: 12px 0;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #fafafa;
    font-weight: bold;
  }

  /* 링크 스타일 */
  a {
    color: #0288d1;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
      color: #01579b;
    }
  }

  /* 인용문 스타일 */
  blockquote {
    margin: 12px 0;
    padding-left: 12px;
    border-left: 4px solid #4caf50;
    color: #555;
    background-color: #f0f0f0;
    font-style: italic;
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
