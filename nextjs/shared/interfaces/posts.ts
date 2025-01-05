export interface Post {
  _id: string; // 게시글 ID
  title: string; // 게시글 제목
  time: string; // 게시 시간
  tags: string[]; // 태그 ID 배열
  content: string; // 게시글 내용
}
