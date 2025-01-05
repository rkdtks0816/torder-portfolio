import React, { useEffect, useState } from "react";
import Spiral from "@/components/common/Spiral";
import Modal from "@/components/common/Modal";
import Card from "@/components/common/Card";
import { Post, Tag } from "@/shared/interfaces";
import useCrud from "@/hooks/useCrud";
import { COLLECTIONS, DATABASES } from "@/shared/constants";

const Blog: React.FC = () => {
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

  const { fetchData: tagsFetchData } = useCrud({
    dbName: DATABASES.CONTENT,
    collectionName: COLLECTIONS.BLOG.TAGS,
  });

  const {
    data: tags,
    isLoading: tagsLoading,
    isError: tagsError,
  } = tagsFetchData as {
    data: Tag[] | undefined;
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
    if (!tags || !posts) return;
    const tagPosts: Record<string, Post[]> = {};

    // 초기화: 각 태그에 빈 배열 할당
    tags.forEach((tag) => {
      tagPosts[tag.name] = [];
    });

    // 게시글을 태그별로 분류
    posts.forEach((post) => {
      tagPosts[tags[0].name].push(post);
      post.tags.forEach((tag) => {
        tagPosts[tag].push(post);
      });
    });
    setSplitPosts(tagPosts);
  }, []);

  return (
    <>
      {/* 로딩 상태 표시 */}
      {(tagsLoading || postsLoading) && <div>Loading...</div>}

      {/* 에러 상태 표시 */}
      {(tagsError || postsError) && (
        <div>Something went wrong while loading data.</div>
      )}

      {/* 데이터가 있을 때만 렌더링 */}
      {tags && posts && (
        <>
          <Spiral titles={tags} onSquareClick={handleSquareClick} />
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title={tags[nowIndex]?.name}
          >
            {splitPosts[tags[nowIndex]?.name] &&
              splitPosts[tags[nowIndex]?.name]
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

export default Blog;
