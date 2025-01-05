import React, { useEffect, useState } from "react";
import Spiral from "@/components/common/Spiral";
import Modal from "@/components/common/Modal";
import Card from "@/components/common/Card";
import { Post } from "@/shared/interfaces/post";
import useCrud from "@/hooks/useCrud";
import {
  COLLECTION_BLOG_POSTS,
  COLLECTION_BLOG_TAGS,
  DATABASE_CONTENT,
} from "@/shared/constants/dbNames";

const Blog: React.FC = () => {
  const { fetchData: postsFetchData } = useCrud({
    dbName: DATABASE_CONTENT,
    collectionName: COLLECTION_BLOG_POSTS,
  });

  const {
    data: posts,
    isLoading: postsLoading,
    isError: postsError,
  } = postsFetchData;

  const { fetchData: tagsFetchData } = useCrud({
    dbName: DATABASE_CONTENT,
    collectionName: COLLECTION_BLOG_TAGS,
  });

  const {
    data: tags,
    isLoading: tagsLoading,
    isError: tagsError,
  } = tagsFetchData;

  const [splitPosts, setSplitPosts] = useState<Record<string, Post[]>>({});
  const [nowIndex, setNowIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSquareClick = (index: number) => {
    setNowIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    const tagPosts: Record<string, Post[]> = {};

    // 초기화: 각 태그에 빈 배열 할당
    tags.forEach((tag) => {
      tagPosts[tag] = [];
    });

    // 게시글을 태그별로 분류
    posts.forEach((post) => {
      tagPosts[tags[0]].push(post);
      post.tags.forEach((tag) => {
        tagPosts[tag].push(post);
      });
    });
    setSplitPosts(tagPosts);
  }, []);

  return (
    <>
      <Spiral titles={tags} onSquareClick={handleSquareClick} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={tags[nowIndex]}
      >
        {splitPosts[tags[nowIndex]] &&
          splitPosts[tags[nowIndex]]
            .slice(0)
            .reverse()
            .map((post: Post, index: number) => (
              <Card key={index} post={post} />
            ))}
      </Modal>
    </>
  );
};

export default Blog;
