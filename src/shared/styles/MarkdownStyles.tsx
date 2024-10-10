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
    padding: 0;
    margin: 0;
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
