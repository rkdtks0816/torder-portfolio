import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const StyledMarkdown = styled.div`
  line-height: 1.7;
  letter-spacing: 0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;

  h1,
  h2,
  h3 {
    margin-top: 2rem;
  }
  hr {
    margin: 2rem 0;
  }
  a {
    color: ${COLORS.text};
    text-decoration: none;
  }

  img {
    display: block;
    margin: 3rem auto;
    max-width: 100%;
  }
  code {
    background: #e9ecef;
    padding: 0.4em 0.6em;
    font-size: 0.75rem;
    border-radius: 3px;
  }
  pre {
    font-size: 0.75rem;
    padding: 0.75rem;
    border-radius: 4px;
    line-height: 1.5;
    overflow-x: auto;
    letter-spacing: 0px;
    background: #fbfcfd;
  }
  pre code {
    background: #fbfcfd;
  }
  blockquote {
    margin: 0.5rem 0;
    border-left: 4px solid ${COLORS.text};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #f8f9fa;
    padding: 1rem 1rem 1rem 2rem;
  }
  table {
    margin: 0.5rem 0;
    min-width: 40%;
    max-width: 100%;
    border: 2px solid ${COLORS.text};
    border-collapse: collapse;
    font-size: 0.875rem;
  }
  table thead > tr > th {
    border-bottom: 2px dotted ${COLORS.text};
  }
  table th,
  table td {
    word-break: break-word;
    padding: 0.5rem;
  }
  table td + td,
  table th + th {
    border-left: 1px dotted ${COLORS.text};
  }
`;
