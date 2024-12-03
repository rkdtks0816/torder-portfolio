import React, { useState } from "react";
import { posts, Post } from "@/projects";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import { Title, titles } from "./ProjectTitles";
import {
  ProjectContainer,
  ProjectImg,
  ProjectImgContainer,
} from "./ProjectStyles";

const Project: React.FC = () => {
  const BASE_URL = "projects/";
  const [nowIndex, setNowIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  const handleSquareClick = (index: number) => {
    setNowIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectImgContainer>
          {titles.map((title: Title, index: number) => (
            <ProjectImg
              onClick={() => {
                handleSquareClick(index);
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
        title={titles[nowIndex].name}
      >
        {posts[nowIndex].length === 0 ? (
          <p>아직 게시글이 없습니다.</p>
        ) : (
          posts[nowIndex].map((post: Post, index: number) => (
            <Card key={index} post={post} />
          ))
        )}
      </Modal>
    </>
  );
};

export default Project;
