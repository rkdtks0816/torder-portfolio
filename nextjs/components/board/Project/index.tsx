import React, { useEffect, useState } from "react";
import Modal from "@/components/common/Modal";
import Card from "@/components/common/Card";
import { ProjectContainer, ProjectImg, ProjectImgContainer } from "./styles";
import { Post, Title } from "@/shared/interfaces";
import useCrud from "@/hooks/useCrud";
import { COLLECTIONS, DATABASES } from "@/shared/constants";

const Project: React.FC = () => {
  const BASE_URL = "projects/";
  const { fetchData: postsFetchData } = useCrud({
    dbName: DATABASES.CONTENT,
    collectionName: COLLECTIONS.BLOG.POSTS,
  });

  const {
    data: posts,
    isLoading: postsLoading,
    isError: postsError,
  } = postsFetchData as {
    data: Post[] | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  const { fetchData: titlesFetchData } = useCrud({
    dbName: DATABASES.CONTENT,
    collectionName: COLLECTIONS.BLOG.TAGS,
  });

  const {
    data: titles,
    isLoading: titlesLoading,
    isError: titlesError,
  } = titlesFetchData as {
    data: Title[] | undefined;
    isLoading: boolean;
    isError: boolean;
  };
  const [splitPosts, setSplitPosts] = useState<Record<string, Post[]>>({});
  const [nowIndex, setNowIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSquareClick = (index: number) => {
    setNowIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!titles || !posts) return;
    const titlePosts: Record<string, Post[]> = {};

    // 초기화: 각 태그에 빈 배열 할당
    titles.forEach((title) => {
      titlePosts[title.name] = [];
    });

    // 게시글을 태그별로 분류
    posts.forEach((post) => {
      titlePosts[titles[0].name].push(post);
      post.tags.forEach((tag) => {
        titlePosts[tag].push(post);
      });
    });

    setSplitPosts(titlePosts);
  }, []);

  return (
    <>
      {/* 로딩 상태 표시 */}
      {(titlesLoading || postsLoading) && <div>Loading...</div>}

      {/* 에러 상태 표시 */}
      {(titlesError || postsError) && (
        <div>Something went wrong while loading data.</div>
      )}

      {/* 데이터가 있을 때만 렌더링 */}
      {titles && posts && (
        <>
          <ProjectContainer>
            <ProjectImgContainer>
              {titles
                .slice(0)
                .reverse()
                .map((title: Title, index: number) => (
                  <ProjectImg
                    onClick={() => {
                      handleSquareClick(titles.length - index - 1);
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
            title={titles[nowIndex]?.name}
          >
            {splitPosts[titles[nowIndex]?.name] &&
              splitPosts[titles[nowIndex]?.name]
                .slice(0)
                .reverse()
                .map((post: Post, index: number) => (
                  <Card key={index} post={post} />
                ))}
          </Modal>
        </>
      )}
    </>
  );
};

export default Project;
