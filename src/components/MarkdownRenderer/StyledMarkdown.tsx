import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const StyledMarkdown = styled(ReactMarkdown)`
  /* 본문 텍스트 스타일 */
  p {
    margin: 8px 0;
    line-height: 1.6;
    font-size: 15px;
    color: #3a3a3a;
  }

  /* 헤더 스타일 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 16px 0 8px;
    font-weight: 600;
    line-height: 1.4;
    color: #1f2937;
  }

  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
  }

  h4,
  h5,
  h6 {
    font-size: 16px;
  }

  /* 리스트 스타일 */
  ul,
  ol {
    padding-left: 12px;
    margin: 8px 0;
    line-height: 1.5;
  }

  ul li {
    list-style-type: disc;
    margin-left: 16px;
  }

  ol li {
    list-style-type: decimal;
    margin-left: 16px;
  }

  /* 코드 블록 스타일 */
  pre {
    background-color: #f3f4f6;
    padding: 10px 14px;
    margin: 12px 0;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 14px;
  }

  code {
    background-color: #e2e8f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Fira Code", monospace;
    font-size: 14px;
    color: #374151;
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
    padding: 10px 12px;
    border: 1px solid #e5e7eb;
    text-align: left;
    font-size: 14px;
  }

  th {
    background-color: #f9fafb;
    font-weight: 600;
    color: #111827;
  }

  /* 링크 스타일 */
  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      color: #1e40af;
    }
  }

  /* 인용문 스타일 */
  blockquote {
    margin: 10px 0;
    padding-left: 16px;
    border-left: 4px solid #10b981;
    color: #4b5563;
    background-color: #f0fdf4;
    font-style: italic;
    font-size: 15px;
  }
`;
