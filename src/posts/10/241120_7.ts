import { Post } from "../index";

const post: Post = {
    title: `UML`,
    tag: `#다이어그램 #관계 #스테레오 타입`,
    content: `
        ## 객체 지향 SW 개발 표준화 범용 모델링 언어!
        > 명세화, 시각화, 문서화, 모델링 기술, 방법론
        - 특징: 가시화, 구축, 명세화, 문서화
        - 구성요소: 사물, 관계, 다이어그램
        - 다이어그램
            - 구조적 다이어그램/정적 다이어그램
                : 클래스, 객체, 컴포넌트, 배치, 복합체 구조, 패키지
                - 클래스 다이어그램
                    > 클래스와 클래스 속성 사이의 관계 표현
                    - 구성요소: 클래스 이름, 속성, 연산, 접근 제어자( -, +, #, ~ )
            - 행위적 다이어그램/동적 다이어그램
                : 유스케이스, 시퀸스, 커뮤니케이션, 상태, 활동, 타이밍
                - 유스케이스 다이어그램
                    > 기능과 외부 요소를 사용자의 관점에서 표현
                    - 구성요소: 유스케이스, 액터, 시스템
                    - 관계: 연관, 포함, 확장, 일반화
                - 시퀸스 다이어그램
                    > 객체 간 상호 작용을 메시지 흐름으로 표현
                    - 구성요소: 객체, 생명선, 실행, 메시지, 회귀 메시지
        - 관계: 사물과 사물 사이의 연관성 표현
            - 연관
            - 의존
            - 일반화
            - 실체화
            - 포함
            - 집합
        - 스테레오 타입
            > 기본 요소 외 확장 메커니즘
            - 길러멧: << >>
            - 유형
                - <<include>>
                - <<extend>>
                - <<interface>>
                - <<entity>>
                - <<boundary>>
                - <<control>>
         
        \`\`\`
        수제비 2023 정보처리기사 필기를 기반으로 작성한 글입니다.
        \`\`\`
    `,
};

export default post;
