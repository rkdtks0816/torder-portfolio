import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `자바스크립트 BFS`,
  time: "241213_2",
  tags: [tags.algorithm, tags.javaScript, tags.bfs],
  content: `
		### 초기화
		1. 큐 생성 + 첫번째 노드 추가<br>
		\`const queue = [start];\`
		2. 방문 체크를 위한 Set 생성<br>
		\`const visited = new Set();\`
		3. 첫번째 노드 방문 처리<br>
		\`visited.add(start);\`

		---
		
		### 탐색
		1. 조건: 큐에 노드가 있다면 반복<br>
		\`while (queue.length > 0)\` 
		2. 큐에서 앞 노드 꺼내기 + 삭제<br>
		\`const node = queue.shift();\`
		3. 탐색
			- 연결된 노드 이동
			- 상하좌우 방향 이동
		4. 조건 확인
			- 방문 여부
				- 범위 밖

		---
  `,
};

export default post;
