import React, { useEffect, useState } from "react";
import { Post } from "@/shared/interfaces/post";
import Modal from "@/components/common/Modal";
import Card from "@/components/common/Card";
import { Title, titleValues } from "./titles";
import { ProjectContainer, ProjectImg, ProjectImgContainer } from "./styles";
import { posts } from "./projects";

const Project: React.FC = () => {
  const BASE_URL = "projects/";
  const [splitPosts, setSplitPosts] = useState<Record<string, Post[]>>({});
  const [nowIndex, setNowIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSquareClick = (index: number) => {
    setNowIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    const titlePosts: Record<string, Post[]> = {};

    // 초기화: 각 태그에 빈 배열 할당
    titleValues.forEach((title) => {
      titlePosts[title.name] = [];
    });

    // 게시글을 태그별로 분류
    posts.forEach((post) => {
      titlePosts[titleValues[0].name].push(post);
      post.tags.forEach((tag) => {
        titlePosts[tag].push(post);
      });
    });

    setSplitPosts(titlePosts);
  }, []);

  return (
    <>
      <ProjectContainer>
        <ProjectImgContainer>
          {titleValues
            .slice(0)
            .reverse()
            .map((title: Title, index: number) => (
              <ProjectImg
                onClick={() => {
                  handleSquareClick(titleValues.length - index - 1);
                }}
                key={index}
                $imgUrl={BASE_URL + title.url + ".png"}
              />
            ))}
        </ProjectImgContainer>
      </ProjectContainer>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={titleValues[nowIndex].name}
      >
        {splitPosts[titleValues[nowIndex].name] &&
          splitPosts[titleValues[nowIndex].name]
            .slice(0)
            .reverse()
            .map((post: Post, index: number) => (
              <Card key={index} post={post} />
            ))}
      </Modal>
    </>
  );
};

export default Project;
