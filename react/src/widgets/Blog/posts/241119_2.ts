import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `데이터`,
  time: "241119_2",
  tags: [tags.computerArchitecture],
  content: `
        ### 2진수는 너무 길다!
        > 10진수를 2진수, 16진수로
        - 2진법: 0b~
        - 16진법: 0x~
            - MAC 주소, IPv6주소

        ## 데이터 크기가 한정적!
        > 부호 \`-\` 지수 \`-\` 가수 \`+\` 바이어스
        - 부동소수점: 필요에 따라 소수점 위치가 이동
        - 부호: 0 - 양수, 1 - 음수
        - 지수: 2^지수^
        - 가수: 1.XXX~
        - 바이어스: 2^k-1^ - 1 ( k는 지수의 비트 수 )

        ## 문자는 인코딩 디코딩
        > 숫자를 문자집합으로 문자로
        - 아스키 코드: 패리티 비트 + 7비트 = 2^7^개의 문자표현
        - KUC-KR: 2바이트 코드로 한글 표현 (0x0000)
        - 유니코드: 통일된 문자 집합
            - 가변 길이 인코딩: UTF - 8, 16, 32
                
                | 특성                     | **UTF-8**                                    | **UTF-16**                                  | **UTF-32**                                   |
                |--------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|
                | **인코딩 방식**          | 가변 길이 (1~4바이트)                       | 가변 길이 (2 또는 4바이트)                  | 고정 길이 (4바이트)                          |
                | **주요 특징**            | ASCII와 완전 호환<br>- 저장 공간 효율적     | BMP(기본 다국어 평면) 문자는 2바이트<br> Supplementary Plane 문자는 4바이트 | 모든 문자를 4바이트로 인코딩<br> 고정 길이로 단순한 처리 |
                | **바이트 수**            | 1바이트: U+0000 - U+007F<br> 2바이트: U+0080 - U+07FF<br> 3바이트: U+0800 - U+FFFF<br> 4바이트: U+10000 - U+10FFFF | 2바이트: U+0000 - U+FFFF(BMP 문자)<br> 4바이트: U+10000 - U+10FFFF (Surrogate Pair) | 모든 문자는 4바이트 |
                | **장점**                | 저장 공간 효율적<br> ASCII와 호환<br> 인터넷과 파일 전송에 적합 | 동아시아 언어에 효율적<br> BMP 문자 처리 속도가 빠름 | 고정 길이로 문자 접근 및 인덱싱 간단 |
                | **단점**                | 가변 길이로 인덱싱 복잡<br> BMP 외 문자는 더 많은 바이트 필요 | 가변 길이로 일부 문자 처리 복잡<br> ASCII 데이터에서 비효율적 | 저장 공간 낭비가 심함<br> 네트워크 전송에 부적합 |
                | **주요 사용 사례**      | 웹 표준(HTML, JSON, XML 등)<br> 네트워크 데이터 전송<br> 파일 저장 (텍스트 기반) | Windows, Java, .NET 등의 내부 문자열 처리<br> 동아시아 언어 중심 응용 | 고정 길이 처리 시스템<br> 특정 과학 응용 및 내부 처리 |
                | **ASCII 호환성**         | 완전 호환                                   | 부분 호환                                  | 비호환                                      |
                | **공간 효율성**         | 높은 효율 (특히 ASCII 문자 기반)             | 중간 효율 (BMP 문자에 적합)                | 낮음 (모든 문자가 4바이트)                  |
                | **문자 인덱싱**          | 가변 길이로 인해 복잡                       | 가변 길이로 BMP 문자 이외는 복잡           | 고정 길이로 단순                             |
                | **주요 플랫폼 지원**     | 웹 브라우저, Linux 시스템<br> JSON, XML   | Windows API, Java, .NET                  | 특정 내부 처리 시스템 및 과학 응용         |
        - base64: 이진 데이터까지 변환
            - 64진법 6비트
            - 4개씩 변환
            - 패딩: 부족한 비트 0 추가

        \`\`\`
        이것이 취업을 위한 컴퓨터 과학이다 
        with CS 기술 면접을 기반으로 작성한 글입니다.
        \`\`\`
    `,
};

export default post;
