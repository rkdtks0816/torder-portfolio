import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `C++ map`,
  time: "241224_1",
  tags: [tags.dataStructure, tags.cpp, tags.map],
  content: `
    > **키-값 쌍**으로 저장하는 컨테이너
    ---

    ## \`std::map\`

    ### **특징**
    1. **자동 정렬**:
      - 삽입된 데이터가 항상 키를 기준으로 정렬됩니다.
      - 기본 정렬은 **오름차순**이며, 필요하면 사용자 정의 비교 함수로 커스터마이징 가능합니다.
    2. **중복 키 허용 안 함**:
      - 키는 고유해야 하며, 동일한 키가 삽입되면 기존 값이 덮어씌워집니다.
    3. **시간 복잡도**:
      - **삽입, 삭제, 검색**: \(O(\log n)\).
    4. 내부적으로 **Red-Black Tree(이진 검색 트리)**를 사용해 데이터를 저장

    ### **사용 예제**

    \`\`\`
    #include <iostream>
    #include <map>
    using namespace std;

    int main() {
        map<int, string> myMap;

        myMap[10] = "Ten";
        myMap[5] = "Five";
        myMap[20] = "Twenty";

        for (auto it : myMap) {
            cout << it.first << ": " << it.second << endl;
        }

        return 0;
    }
    \`\`\`

    **출력:**
    \`\`\`
    5: Five
    10: Ten
    20: Twenty
    \`\`\`

    ### **\`std::map\` 주요 메서드**

    | 메서드                      | 설명                                              |
    |-----------------------------|---------------------------------------------------|
    | \`insert(pair)\`              | 키-값 쌍 삽입                                     |
    | \`erase(key)\`                | 해당 키를 가진 요소 삭제                          |
    | \`find(key)\`                 | 해당 키를 가진 요소를 검색                        |
    | \`size()\`                    | 저장된 요소의 개수 반환                           |
    | \`empty()\`                   | 컨테이너가 비었는지 여부 반환                     |
    | \`clear()\`                   | 모든 요소 제거                                    |
    | \`lower_bound(key)\`          | 주어진 키 이상의 첫 번째 요소 반환                |
    | \`upper_bound(key)\`          | 주어진 키보다 큰 첫 번째 요소 반환                |

    ### **장점과 단점**

    | **장점**                        | **단점**                          |
    |---------------------------------|-----------------------------------|
    | 키가 정렬된 상태로 저장됨        | 검색 속도가 \`std::unordered_map\`보다 느림 |
    | 범위 검색이 용이 (\`lower_bound\`, \`upper_bound\`) | 메모리 사용량이 다소 큼            |

    ---

    ## **\`std::unordered_map\`**

    ### **특징**
    1. **정렬 없음**:
      - 데이터는 해시 테이블에 저장되며, 삽입 순서나 키의 크기에 관계없이 저장됩니다.
    2. **중복 키 허용 안 함**:
      - 키는 고유해야 하며, 동일한 키가 삽입되면 기존 값이 덮어씌워집니다.
    3. **시간 복잡도**:
      - **삽입, 삭제, 검색**: \(O(1)\) (평균), \(O(n)\) (최악; 해시 충돌 발생 시).
    4. 내부적으로 **해시 테이블**을 사용하여 데이터의 저장과 검색 속도를 최적화

    ### **사용 예제**

    \`\`\`
    #include <iostream>
    #include <unordered_map>
    using namespace std;

    int main() {
        unordered_map<int, string> myMap;

        myMap[10] = "Ten";
        myMap[5] = "Five";
        myMap[20] = "Twenty";

        for (auto it : myMap) {
            cout << it.first << ": " << it.second << endl;
        }

        return 0;
    }
    \`\`\`

    **출력 (순서 무작위):**
    \`\`\`
    20: Twenty
    5: Five
    10: Ten
    \`\`\`

    ### **\`std::unordered_map\` 주요 메서드**

    \`std::unordered_map\`은 \`std::map\`과 동일한 메서드를 대부분 지원

    ### **장점과 단점**

    | **장점**                          | **단점**                                  |
    |-----------------------------------|------------------------------------------|
    | 검색 속도가 평균적으로 빠름         | 키가 정렬되지 않음                       |
    | 메모리 사용량이 상대적으로 적음     | 해시 충돌이 많을 경우 성능 저하 가능 \(O(n)\) |

    ### **사용자 정의 해시 함수**

    \`std::unordered_map\`에서 **복합 자료형**(예: \`std::pair\`나 사용자 정의 클래스)을 키로 사용할 때 필요
    ### **구조**
    1. **비교 연산자 정의**:
      - 두 키가 같은지 비교하기 위한 \`operator==\`를 정의합니다.
    2. **해시 함수 정의**:
      - 키의 해시 값을 생성하는 함수(\`std::hash\` 기반)를 정의합니다.

    ### **사용 예제**

    #### 1. \`std::pair\`를 키로 사용하는 경우
    \`\`\`
    #include <iostream>
    #include <unordered_map>
    using namespace std;

    // 사용자 정의 해시 함수
    struct pair_hash {
        template <class T1, class T2>
        size_t operator()(const pair<T1, T2>& p) const {
            auto h1 = hash<T1>{}(p.first);
            auto h2 = hash<T2>{}(p.second);
            return h1 ^ (h2 << 1);
        }
    };

    int main() {
        unordered_map<pair<int, int>, string, pair_hash> myMap;

        myMap[{1, 2}] = "A";
        myMap[{3, 4}] = "B";

        cout << myMap[{1, 2}] << endl;  // 출력: A
        cout << myMap[{3, 4}] << endl;  // 출력: B

        return 0;
    }
    \`\`\`
    #### 2. 사용자 정의 클래스의 해시
    \`\`\`
    #include <iostream>
    #include <unordered_map>
    using namespace std;

    struct Point {
        int x, y;

        // 비교 연산자 정의
        bool operator==(const Point& other) const {
            return x == other.x && y == other.y;
        }
    };

    // 사용자 정의 해시 함수
    struct PointHash {
        size_t operator()(const Point& p) const {
            auto h1 = hash<int>{}(p.x);
            auto h2 = hash<int>{}(p.y);
            return h1 ^ (h2 << 1);
        }
    };

    int main() {
        unordered_map<Point, string, PointHash> myMap;

        myMap[{1, 2}] = "Point A";
        myMap[{3, 4}] = "Point B";

        cout << myMap[{1, 2}] << endl; // 출력: Point A
        cout << myMap[{3, 4}] << endl; // 출력: Point B

        return 0;
    }
    \`\`\`

    ---

    ## **\`std::map\` vs \`std::unordered_map\` 비교**

    | **특징**             | **\`std::map\`**                 | **\`std::unordered_map\`**        |
    |----------------------|-------------------------------|----------------------------------|
    | **내부 구현**         | 이진 검색 트리 (Red-Black Tree) | 해시 테이블                     |
    | **시간 복잡도**       | 삽입, 삭제, 검색 \(O(\log n)\)  | 삽입, 삭제, 검색 \(O(1)\) (평균) |
    | **키 정렬**           | 자동으로 오름차순 정렬         | 정렬되지 않음                   |
    | **중복 키**           | 허용하지 않음                 | 허용하지 않음                   |
    | **사용 사례**         | 정렬이 필요하거나 순서가 중요한 경우 | 빠른 검색이 중요한 경우         |

    ---
  `,
};

export default post;
