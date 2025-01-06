import React, { useState } from "react";
import { useRouter } from "next/router";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import {
  WriteContainer,
  WriteContent,
  Content,
  ContentHeader,
  WriteTitle,
  WriteTag,
  TagButton,
  ContentInput,
  ButtonContainer,
} from "./styles";
import { COLLECTIONS, DATABASES } from "@/shared/constants";
import useCrud from "@/hooks/useCrud";
import { Tag } from "@/shared/interfaces";

const Write: React.FC = () => {
  const { createData } = useCrud({
    dbName: DATABASES.CONTENT,
    collectionName: COLLECTIONS.BLOG.POSTS,
  });
  const { fetchData, createData: createTag } = useCrud({
    dbName: DATABASES.CONTENT,
    collectionName: COLLECTIONS.BLOG.TAGS,
  });

  const {
    data: tags,
    isLoading: tagsLoading,
    isError: tagsError,
  } = fetchData as {
    data: Tag[] | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  const [inputTitle, setInputTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [inputContent, setInputContent] = useState("");
  const [newTag, setNewTag] = useState("");
  const router = useRouter();

  const toggleTag = (tag: Tag) => {
    if (selectedTags.some((t) => t._id === tag._id)) {
      setSelectedTags((prev) => prev.filter((t) => t._id !== tag._id));
    } else {
      setSelectedTags((prev) => [...prev, tag]);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() === "") return;

    const tagData = { name: newTag.trim() };
    createTag.mutate(tagData, {
      onSuccess: () => {
        setNewTag("");
        fetchData.refetch();
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = selectedTags.map((tag) => tag.name);
    const postData = {
      title: inputTitle,
      tags: tagsArray,
      content: inputContent,
    };
    createData.mutate(postData);
  };

  return (
    <WriteContainer>
      <WriteContent>
        <Content>
          <ContentHeader>
            <WriteTitle>
              <input
                type="text"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                required
                placeholder="제목을 입력하세요."
              />
            </WriteTitle>
            <WriteTag>
              <h4>Tags</h4>
              {tagsLoading && <p>Loading tags...</p>}
              {tagsError && <p>Failed to load tags</p>}
              {!tagsLoading && !tagsError && tags && (
                <div className="tag-list">
                  {tags.map((tag) => (
                    <TagButton
                      key={tag._id}
                      onClick={() => toggleTag(tag)}
                      selected={selectedTags.some((t) => t._id === tag._id)}
                    >
                      {tag.name}
                    </TagButton>
                  ))}
                </div>
              )}
              <div className="add-tag">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="새 태그 추가"
                />
                <button onClick={handleAddTag}>Add Tag</button>
              </div>
            </WriteTag>
          </ContentHeader>
          <ContentInput
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
            required
            placeholder="내용을 입력하세요."
          />
          <MarkdownRenderer content={inputContent} />
        </Content>
        <ButtonContainer>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="cancel" onClick={() => router.back()}>
            Cancel
          </button>
        </ButtonContainer>
      </WriteContent>
    </WriteContainer>
  );
};

export default Write;
