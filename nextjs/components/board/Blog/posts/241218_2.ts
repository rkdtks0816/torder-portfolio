import { Post } from "@/shared/interfaces/post";
import { tags } from "../tags";

const post: Post = {
  title: `자바스크립트 Math`,
  time: "241218_2",
  tags: [tags.algorithm, tags.javaScript],
  content: `

    ### **1. Math 객체의 주요 상수**
    \`Math\` 객체는 몇 가지 유용한 상수를 제공합니다:

    | 상수            | 설명                                | 값                 |
    |-----------------|-----------------------------------|-------------------|
    | \`Math.PI\`       | 원주율(π)                         | 3.141592653589793 |
    | \`Math.E\`        | 자연로그의 밑(e)                   | 2.718281828459045 |
    | \`Math.LN2\`      | 2의 자연로그                      | 0.6931471805599453 |
    | \`Math.LN10\`     | 10의 자연로그                     | 2.302585092994046 |
    | \`Math.LOG2E\`    | e의 밑을 2로 하는 로그값          | 1.4426950408889634 |
    | \`Math.LOG10E\`   | e의 밑을 10으로 하는 로그값       | 0.4342944819032518 |
    | \`Math.SQRT2\`    | 2의 제곱근                        | 1.4142135623730951 |
    | \`Math.SQRT1_2\`  | 1/2의 제곱근                     | 0.7071067811865476 |

    ---

    ### **2. Math 메서드**
    #### 1) 기본적인 수학 계산
    - **\`Math.abs(x)\`**: x의 절댓값
      \`\`\`
      Math.abs(-5); // 5
      \`\`\`

    - **\`Math.sign(x)\`**: x의 부호를 반환 (\`1\`, \`-1\`, \`0\`)
      \`\`\`
      Math.sign(-3); // -1
      Math.sign(0);  // 0
      Math.sign(5);  // 1
      \`\`\`

    - **\`Math.floor(x)\`**: x를 내림 (소수점 버림)
      \`\`\`
      Math.floor(4.7); // 4
      \`\`\`

    - **\`Math.ceil(x)\`**: x를 올림
      \`\`\`
      Math.ceil(4.2); // 5
      \`\`\`

    - **\`Math.round(x)\`**: x를 반올림
      \`\`\`
      Math.round(4.5); // 5
      Math.round(4.4); // 4
      \`\`\`

    - **\`Math.trunc(x)\`**: x의 소수점 이하를 버림
      \`\`\`
      Math.trunc(4.9); // 4
      Math.trunc(-4.9); // -4
      \`\`\`

    ---

    #### 2) 제곱근, 지수 및 로그
    - **\`Math.sqrt(x)\`**: x의 제곱근
      \`\`\`
      Math.sqrt(9); // 3
      \`\`\`

    - **\`Math.cbrt(x)\`**: x의 세제곱근
      \`\`\`
      Math.cbrt(27); // 3
      \`\`\`

    - **\`Math.pow(x, y)\`**: x의 y 제곱
      \`\`\`
      Math.pow(2, 3); // 8
      \`\`\`

    - **\`Math.exp(x)\`**: e^x^ 반환
      \`\`\`
      Math.exp(1); // 2.718281828459045
      \`\`\`

    - **\`Math.log(x)\`**: x의 자연로그
      \`\`\`
      Math.log(Math.E); // 1
      \`\`\`

    - **\`Math.log10(x)\`**: x의 밑을 10으로 하는 로그
      \`\`\`
      Math.log10(100); // 2
      \`\`\`

    - **\`Math.log2(x)\`**: x의 밑을 2로 하는 로그
      \`\`\`
      Math.log2(8); // 3
      \`\`\`

    ---

    #### 3) 삼각 함수
    - **\`Math.sin(x)\`**, **\`Math.cos(x)\`**, **\`Math.tan(x)\`**: x가 라디안일 때의 사인, 코사인, 탄젠트 값을 반환
      \`\`\`
      Math.sin(Math.PI / 2); // 1
      Math.cos(Math.PI);     // -1
      Math.tan(0);           // 0
      \`\`\`

    - **\`Math.asin(x)\`**, **\`Math.acos(x)\`**, **\`Math.atan(x)\`**: 아크 사인, 아크 코사인, 아크 탄젠트 값을 반환
      \`\`\`
      Math.asin(1); // Math.PI / 2
      \`\`\`

    - **\`Math.atan2(y, x)\`**: (x, y) 좌표의 각도(라디안) 반환
      \`\`\`
      Math.atan2(1, 1); // Math.PI / 4
      \`\`\`

    ---

    #### 4) 랜덤 및 기타 메서드
    - **\`Math.random()\`**: 0 이상 1 미만의 난수를 반환
      \`\`\`
      Math.random(); // 예: 0.847602329123
      \`\`\`

    - **\`Math.max(...values)\`**, **\`Math.min(...values)\`**: 전달받은 값 중 최대값/최소값 반환
      \`\`\`
      Math.max(1, 2, 3); // 3
      Math.min(1, 2, 3); // 1
      \`\`\`

    ---

    ### **3. Math.random()를 활용한 범위 난수 생성**
    #### 1) 특정 범위의 정수 난수
    0 이상 100 이하의 정수 난수를 생성하는 방법:
    \`\`\`
    const randomInt = Math.floor(Math.random() * 101);
    \`\`\`

    #### 2) 특정 범위의 실수 난수
    1 이상 10 미만의 실수 난수를 생성하는 방법:
    \`\`\`
    const randomFloat = Math.random() * (10 - 1) + 1;
    \`\`\`

    ---

    ### **4. Math와 함께 사용하면 좋은 팁**
    1. **소수점 반올림 및 자리수 제한**
      - 소수점 n자리까지 반올림:
        \`\`\`
        const num = 3.141592;
        const rounded = Math.round(num * 100) / 100; // 3.14
        \`\`\`

    2. **각도와 라디안 변환**
      - 각도를 라디안으로 변환:
        \`\`\`
        const radians = (degrees) => (degrees * Math.PI) / 180;
        \`\`\`
      - 라디안을 각도로 변환:
        \`\`\`
        const degrees = (radians) => (radians * 180) / Math.PI;
        \`\`\`

    ---

  `,
};

export default post;
