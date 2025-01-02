import { Post } from "@/shared/interfaces/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `적정한 값 찾기`,
  time: "241211_1",
  tags: [tags.algorithm, tags.javaScript, tags.binarySearch],
  content: `
    1. **최대, 최솟값 찾기**
      - Math.max, Math.min은 입력 크기에 따라 시간 복잡도가 증가
      - 문제에서 주어진 최대/최소값을 활용하여 효율적인 탐색 필요
    2. **while 반복문을 이용한 이진 탐색**
      - 탈출 조건: 최소값이 최대값보다 커질 때
      - 최대값과 최소값이 같을 때의 처리도 중요
    3. **적정한 값의 위치에 따라 최대/최소값 조정**
      - 적정한 값(midLevel)을 기준으로 최대값 또는 최소값 변경
      - 최대/최솟값을 실시간으로 갱신하며 탐색 진행

    \`\`\`
    function solution(diffs, times, limit) {
        let answer = Infinity;
        let maxLevel = 100000; // 초기 최대값 설정
        let minLevel = 0;      // 초기 최소값 설정

        // 이진 탐색 시작
        while (minLevel <= maxLevel) {
            const midLevel = Math.floor((maxLevel + minLevel) / 2);
            let totalTime = 0; // 현재 레벨에서 필요한 총 시간 계산

            // 각 diff와 time 값을 순회하며 시간 계산
            for (let i = 0; i < diffs.length; i++) {
                if (diffs[i] > midLevel) {
                    totalTime += (diffs[i] - midLevel) * (times[i] + (times[i - 1] || 0));
                }
                totalTime += times[i];
            }

            // 시간이 제한 시간(limit)보다 작거나 같으면
            if (totalTime <= limit) {
                answer = Math.min(answer, midLevel); // 최솟값 갱신
                maxLevel = midLevel - 1;            // 최대값 낮추기
            } else {
                minLevel = midLevel + 1;            // 최소값 높이기
            }
        }

        return answer;
    }
    \`\`\`
  `,
};

export default post;
