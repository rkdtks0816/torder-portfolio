import { Post } from "@/shared/interfaces/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `자바스크립트 정렬`,
  time: "241218_1",
  tags: [tags.algorithm, tags.javaScript],
  content: `

    ### **1. \`sort()\` 메서드 기본 동작**
    - 기본적으로, \`sort()\`는 배열의 요소를 **문자열로 변환한 후 사전순으로 정렬**
    - 예제:
      \`\`\`
      const arr = [10, 5, 2, 1];
      arr.sort();
      console.log(arr); // [1, 10, 2, 5]
      \`\`\`

    ---

    ### **2. 커스텀 정렬**
    **비교 함수 리턴값**
    - \`음수\` → a가 b보다 앞에 와야 함.
    - \`0\` → a와 b의 순서가 같음.
    - \`양수\` → a가 b보다 뒤에 와야 함.

    #### 숫자 오름차순 정렬
    \`\`\`
    const numbers = [10, 5, 2, 1];
    numbers.sort((a, b) => a - b); // 오름차순
    console.log(numbers); // [1, 2, 5, 10]
    \`\`\`

    #### 숫자 내림차순 정렬
    \`\`\`
    numbers.sort((a, b) => b - a); // 내림차순
    console.log(numbers); // [10, 5, 2, 1]
    \`\`\`

    #### 문자열 정렬 (대소문자 구분 없이 정렬)
    \`\`\`
    const words = ['apple', 'Orange', 'banana', 'Grape'];
    words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log(words); // ['apple', 'banana', 'Grape', 'Orange']
    \`\`\`

    ---

    ### **3. 문자열의 유니코드 정렬**
    \`localeCompare\` 메서드: 유니코드 표준을 따르는 정렬
    \`\`\`
    const items = ['ä', 'a', 'z'];
    items.sort((a, b) => a.localeCompare(b));
    console.log(items); // ['a', 'ä', 'z']
    \`\`\`

    ---

    ### **4. 객체 배열 정렬**
    객체 배열은 특정 속성 값을 기준으로 정렬
    #### 특정 속성 기준으로 오름차순 정렬
    \`\`\`
    const users = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 28 },
    ];
    users.sort((a, b) => a.age - b.age);
    console.log(users);
    // [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 28 }, { name: 'John', age: 30 }]
    \`\`\`

    #### 특정 속성 기준으로 내림차순 정렬
    \`\`\`
    users.sort((a, b) => b.age - a.age);
    console.log(users);
    // [{ name: 'John', age: 30 }, { name: 'Bob', age: 28 }, { name: 'Alice', age: 25 }]
    \`\`\`

    ---

    ### **5. 안정 정렬 여부**
    - ES10(ECMAScript 2019) 이후, 자바스크립트의 \`sort()\`는 **안정 정렬**을 보장<br> 
      \`안정 정렬\`: 값이 같은 요소의 순서가 유지

    ---

    ### **6. 정렬의 성능**
    - \`sort()\` 메서드는 **Timsort 알고리즘**을 사용
    - 시간 복잡도는 **O(n log n)**

    ---

    ### **7. 정렬 전 원본 배열 복사**
    원본 배열을 보존하려면 **복사본**을 만들어 정렬
    \`\`\`
    const original = [3, 1, 4, 1, 5];
    const sorted = [...original].sort((a, b) => a - b);
    console.log(original); // [3, 1, 4, 1, 5]
    console.log(sorted);  // [1, 1, 3, 4, 5]
    \`\`\`

    ---

  `,
};

export default post;
