import { Post } from "@/shared/interfaces/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `자바스크립트 Map`,
  time: "241211_2",
  tags: [tags.algorithm, tags.dataStructure, tags.javaScript],
  content: `
    ## \`Map\`은 키-값 쌍을 저장하는 데이터 구조

    ---

    ### \`Map\`의 주요 특징
    | 특징                     | 설명                                                                                 |
    |--------------------------|--------------------------------------------------------------------------------------|
    | **키의 데이터 타입**      | 키로 모든 데이터 타입(원시값, 객체)을 사용할 수 있음.                                 |
    | **순서 보장**             | 삽입된 순서가 보장됨.                                                                |
    | **크기 확인**             | \`size\` 속성을 통해 Map의 크기를 빠르게 확인 가능.                                      |
    | **성능**                  | 키-값 검색, 삽입, 삭제 작업에서 평균적으로 \( O(1) \)의 시간 복잡도를 가짐.           |
    | **반복**                  | \`for...of\` 및 \`forEach\`를 통해 반복 가능.                                            |

    ---

    ### **Map 메서드**
    #### (1) **값 추가**
    \`\`\`
    const map = new Map();
    map.set("key1", "value1");
    map.set(42, "value2");
    console.log(map); // Map { 'key1' => 'value1', 42 => 'value2' }
    \`\`\`

    #### (2) **값 가져오기**
    \`\`\`
    console.log(map.get("key1")); // "value1"
    \`\`\`

    #### (3) **값 삭제**
    \`\`\`
    map.delete(42);
    console.log(map.has(42)); // false
    \`\`\`

    #### (4) **키 존재 여부 확인**
    \`\`\`
    console.log(map.has("key1")); // true
    \`\`\`

    #### (5) **반복**
    \`\`\`
    for (const [key, value] of map) {
        console.log(key, value);
    }
    \`\`\`

    #### (6) **초기화**
    \`\`\`
    map.clear();
    console.log(map.size); // 0
    \`\`\`

    ---

    ### **HashMap과 TreeMap의 비교**
    \`Map\`은 JavaScript에서 기본 제공하는 키-값 저장 구조입니다. Java와 같은 언어에서는 \`HashMap\`과 \`TreeMap\`이라는 별도의 구현체를 제공합니다. 다음은 두 자료구조의 비교입니다:

    | **특징**         | **HashMap**                                                         | **TreeMap**                                                                 |
    |------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------|
    | **기본 구조**     | 해시 테이블 기반                                                    | 이진 검색 트리 기반                                                        |
    | **시간 복잡도**   | - 삽입, 삭제, 검색: \( O(1) \) 평균<br>- 최악: \( O(n) \) (충돌 시)  | - 삽입, 삭제, 검색: \( O(\log n) \)                                          |
    | **키의 순서**     | 순서 없음                                                          | 키에 따라 정렬된 순서 유지                                                  |
    | **사용 사례**     | 빠른 데이터 검색이 필요한 경우                                       | 데이터가 정렬된 상태로 필요한 경우                                           |
    | **메모리 효율성** | 추가적인 해시 테이블 메모리가 필요함                                  | 추가적인 트리 구조 메모리가 필요함                                           |
    | **병렬 처리**     | 동기화 필요 (\`ConcurrentHashMap\` 사용 가능)                          | 동기화 필요 (\`ConcurrentSkipListMap\` 사용 가능)                              |

    ---

    ### **JavaScript \`Map\` vs Java \`HashMap\`/\`TreeMap\` 비교**
    JavaScript의 \`Map\`은 해시 기반이지만, 구체적인 내부 구현은 명시되어 있지 않습니다. 아래는 JavaScript의 \`Map\`과 Java의 \`HashMap\` 및 \`TreeMap\`의 차이를 간단히 비교한 표입니다:

    | **특징**          | **JavaScript \`Map\`**            | **Java \`HashMap\`**              | **Java \`TreeMap\`**              |
    |-------------------|---------------------------------|---------------------------------|---------------------------------|
    | **키의 타입**      | 모든 타입(객체 포함) 사용 가능    | 모든 타입(객체 포함) 사용 가능    | 키는 \`Comparable\` 구현 필요       |
    | **순서 보장**      | 삽입 순서 보장                   | 순서 보장되지 않음                | 키의 정렬 순서 보장               |
    | **시간 복잡도**    | \( O(1) \) 평균                 | \( O(1) \) 평균                 | \( O(\log n) \)                 |

    ---

    ### 요약
    - **JavaScript \`Map\`**: 해시 기반으로 키-값 쌍을 빠르게 저장하고 조회하며, 삽입 순서를 유지.
    - **HashMap**: 해시 테이블 기반, 삽입 순서 없음, 빠른 검색이 필요할 때 유용.
    - **TreeMap**: 이진 검색 트리 기반, 정렬된 키 순서 필요 시 적합.

    JavaScript \`Map\`은 HashMap에 가까운 동작을 하지만, TreeMap과 같은 정렬 기반 동작이 필요하면 별도로 구현
`,
};

export default post;
