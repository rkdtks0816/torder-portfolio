import React, { useEffect, useState } from "react";
import { posts } from "@/widgets/Blog/posts";
import Spiral from "@/features/Spiral";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import { tagValues } from "./BlogTags";
import { Post } from "@/shared/types/post";

const Blog: React.FC = () => {
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
    tagValues.forEach((tag) => {
      tagPosts[tag] = [];
    });

    // 게시글을 태그별로 분류
    posts.forEach((post) => {
      tagPosts[tagValues[0]].push(post);
      post.tags.forEach((tag) => {
        tagPosts[tag].push(post);
      });
    });
    setSplitPosts(tagPosts);
  }, []);

  return (
    <>
      <Spiral titles={tagValues} onSquareClick={handleSquareClick} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={tagValues[nowIndex]}
      >
        {splitPosts[tagValues[nowIndex]] &&
          splitPosts[tagValues[nowIndex]]
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
