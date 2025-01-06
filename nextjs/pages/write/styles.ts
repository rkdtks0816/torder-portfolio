import { COLORS } from "@/shared/constants";
import styled from "styled-components";

export const WriteContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const WriteContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin: 50px auto 0 auto;
  padding: 20px;
  max-width: 600px;
  width: calc(100% - 40px);
  height: fit-content;
`;

export const ContentHeader = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${COLORS.text};
`;

export const WriteTitle = styled.div`
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const WriteTag = styled.div`
  h4 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  div.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
  }

  div.add-tag {
    display: flex;
    align-items: center;

    input {
      padding: 5px;
      margin-right: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      flex-grow: 1;
    }

    button {
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      background-color: #0070f3;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const TagButton = styled.button<{ selected: boolean }>`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.selected ? "#0070f3" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  cursor: pointer;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  button.submit {
    background-color: #0070f3;
    color: #fff;
    border: none;
  }

  button.cancel {
    background-color: #f5f5f5;
    color: #000;
    border: 1px solid #ccc;
  }
`;
