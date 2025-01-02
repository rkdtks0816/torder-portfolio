import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `C++ 형변환`,
  time: "241224_2",
  tags: [tags.dataStructure, tags.cpp],
  content: `
    ## **1. 문자열을 숫자로 변환**

    | 함수             | 반환 타입       | 변환 대상         |
    |------------------|----------------|------------------|
    | \`std::stoi\`      | \`int\`         | 문자열 → 정수    |
    | \`std::stol\`      | \`long\`        | 문자열 → 긴 정수 |
    | \`std::stoll\`     | \`long long\`   | 문자열 → 매우 긴 정수 |
    | \`std::stof\`      | \`float\`       | 문자열 → 부동소수점 수 |
    | \`std::stod\`      | \`double\`      | 문자열 → 더블형 부동소수점 수 |
    | \`std::stold\`     | \`long double\` | 문자열 → 롱 더블형 부동소수점 수 |

    #### **기본 문법**
    \`\`\`
    numeric_type std::stoX(const std::string& str, size_t* idx = nullptr, int base = 10);
    \`\`\`

    - \`str\`: 변환할 문자열.
    - \`idx\`: 변환하지 못한 부분의 시작 인덱스를 저장할 포인터(옵션).
    - \`base\`: 변환에 사용할 진법(기본값은 10진수).

    ---

    #### **진법 변환**

    **16진수 문자열 변환 예제**:
    \`\`\`
    #include <iostream>
    #include <string>
    using namespace std;

    int main() {
        string hexStr = "1A3F";
        int num = stoi(hexStr, nullptr, 16); // 16진수 문자열을 정수로 변환
        cout << "Converted number: " << num << endl;

        return 0;
    }
    \`\`\`

    **출력:**
    \`\`\`
    Converted number: 6719
    \`\`\`

    ---

    #### **부동소수점 변환**

    \`\`\`
    #include <iostream>
    #include <string>
    using namespace std;

    int main() {
        string floatStr = "3.14159";
        double pi = stod(floatStr); // 문자열을 double로 변환
        cout << "Value of pi: " << pi << endl;

        return 0;
    }
    \`\`\`

    **출력:**
    \`\`\`
    Value of pi: 3.14159
    \`\`\`

    ---

    ### **예외 처리**

    - **\`std::invalid_argument\`**: 문자열이 숫자로 변환할 수 없는 경우.
    - **\`std::out_of_range\`**: 숫자가 타입의 범위를 초과하는 경우.

    \`\`\`
    #include <iostream>
    #include <string>
    using namespace std;

    int main() {
        try {
            string invalidStr = "abc";
            int num = stoi(invalidStr); // 예외 발생
        } catch (const invalid_argument& e) {
            cout << "Invalid argument: " << e.what() << endl;
        } catch (const out_of_range& e) {
            cout << "Out of range: " << e.what() << endl;
        }

        return 0;
    }
    \`\`\`

    ---

    ## **2. 숫자를 문자열로 변환**

    ### **\`std::to_string\`**

    C++11부터 제공되는 함수로, 숫자를 문자열로 변환

    #### **지원 타입**
    - 정수형(\`int\`, \`long\`, \`long long\`, \`unsigned\` 등).
    - 부동소수점형(\`float\`, \`double\`, \`long double\`).

    #### **예제**

    \`\`\`
    #include <iostream>
    #include <string>
    using namespace std;

    int main() {
        int num = 123;
        double pi = 3.14159;

        string str1 = to_string(num); // 정수를 문자열로 변환
        string str2 = to_string(pi);  // double을 문자열로 변환

        cout << "Integer as string: " << str1 << endl;
        cout << "Double as string: " << str2 << endl;

        return 0;
    }
    \`\`\`

    **출력:**
    \`\`\`
    Integer as string: 123
    Double as string: 3.141590
    \`\`\`

    ---

    ### **문자열 변환 정밀도 조정**

    \`std::to_string\`은 부동소수점형 데이터를 기본적으로 **6자리 소수점**으로 출력, 정밀도를 더 조정하려면 **\`std::ostringstream\`**를 사용

    \`\`\`
    #include <iostream>
    #include <string>
    #include <sstream>
    using namespace std;

    int main() {
        double pi = 3.14159265358979;

        ostringstream stream;
        stream.precision(4); // 소수점 4자리로 제한
        stream << pi;

        string piStr = stream.str();
        cout << "Pi as string with precision: " << piStr << endl;

        return 0;
    }
    \`\`\`

    **출력:**
    \`\`\`
    Pi as string with precision: 3.1416
    \`\`\`

    ---

    ## **3. C 스타일의 변환**
    ### **문자열을 숫자로 변환: \`atoi\`와 \`atof\`**
    - \`atoi\`: 문자열 → 정수.
    - \`atof\`: 문자열 → 부동소수점.

    \`\`\`
    #include <iostream>
    #include <cstdlib> // for atoi, atof
    using namespace std;

    int main() {
        const char* str1 = "123";
        const char* str2 = "3.14159";

        int num = atoi(str1);
        double pi = atof(str2);

        cout << "Integer: " << num << endl;
        cout << "Double: " << pi << endl;

        return 0;
    }
    \`\`\`

    ---

    ### **숫자를 문자열로 변환: \`sprintf\`**

    \`\`\`
    #include <iostream>
    #include <cstdio> // for sprintf
    using namespace std;

    int main() {
        int num = 123;
        double pi = 3.14159;

        char str1[50], str2[50];
        sprintf(str1, "%d", num);    // 정수를 문자열로 변환
        sprintf(str2, "%.2f", pi);  // 부동소수점을 문자열로 변환

        cout << "Integer as string: " << str1 << endl;
        cout << "Double as string: " << str2 << endl;

        return 0;
    }
    \`\`\`

    ---

    ## **4. 요약**

    | **변환 방향** | **C++11 이후 (권장)**            | **C 스타일 (비권장)**            |
    |---------------|----------------------------------|----------------------------------|
    | 문자열 → 정수 | \`std::stoi\`, \`std::stol\`, \`std::stoll\` | \`atoi\`                           |
    | 문자열 → 실수 | \`std::stof\`, \`std::stod\`, \`std::stold\` | \`atof\`                           |
    | 정수 → 문자열 | \`std::to_string\`                | \`sprintf\`                        |
    | 실수 → 문자열 | \`std::to_string\` (정밀도: \`ostringstream\`) | \`sprintf\`                        |
    
    ---
  `,
};

export default post;
