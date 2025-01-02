import { Post } from "@/shared/interfaces/post";
import { tags } from "../tags";

const post: Post = {
  title: `CSR, SSR, SSG`,
  time: "241220_1",
  tags: [tags.frontEnd, tags.backEnd],
  content: `
    ### **1. CSR (Client-Side Rendering: 클라이언트 사이드 렌더링)**

    - **설명:** 브라우저에서 모든 작업이 처리됩니다. 초기에는 빈 HTML 파일만 제공되고, 자바스크립트를 통해 데이터를 가져와 브라우저에서 페이지를 렌더링합니다.
    - **흐름:**
      1. 브라우저는 서버에서 빈 HTML과 자바스크립트 파일을 다운로드.
      2. 자바스크립트가 실행되고, API 호출로 데이터를 가져와 화면을 구성.

    - **장점:**
      - 초기 로딩 이후 사용자 경험이 부드러움(SPA처럼 동작).
      - 서버 부하 감소.
      - 동적인 애플리케이션에 적합.

    - **단점:**
      - 초기 로딩 시간이 길어질 수 있음(자바스크립트 로드 및 실행 대기).
      - SEO에 불리함(검색 엔진은 초기 빈 HTML만 크롤링).

    - **예제:**
      React, Vue.js로 만든 SPA(Single Page Application).

    ---

    ### **2. SSR (Server-Side Rendering: 서버 사이드 렌더링)**

    - **설명:** 서버에서 HTML을 완전히 렌더링하여 클라이언트로 전달합니다. 사용자는 서버에서 생성된 완성된 HTML을 받습니다.
    - **흐름:**
      1. 서버에서 데이터를 가져와 HTML을 생성.
      2. 브라우저는 완성된 HTML을 받아 화면에 표시.

    - **장점:**
      - SEO에 유리(검색 엔진이 완성된 HTML을 바로 크롤링 가능).
      - 초기 로딩 속도가 빠름(사용자는 즉시 콘텐츠를 볼 수 있음).

    - **단점:**
      - 서버 부하 증가(모든 요청에 대해 HTML 생성 필요).
      - 서버 응답 시간이 길어질 수 있음.

    - **예제:**
      Next.js의 \`getServerSideProps\`.

    ---

    ### **3. SSG (Static Site Generation: 정적 사이트 생성)**

    - **설명:** 빌드 시점에 HTML을 생성하여 정적 파일로 저장합니다. 클라이언트 요청 시 서버는 이미 생성된 HTML 파일을 전달합니다.
    - **흐름:**
      1. 빌드 시점에 HTML을 생성.
      2. 사용자는 빌드된 정적 HTML을 받아봄.

    - **장점:**
      - 매우 빠른 로딩 속도(정적 파일 제공).
      - 서버 부하 감소(정적 파일만 서빙).
      - SEO에 유리.

    - **단점:**
      - 자주 변경되는 데이터에는 적합하지 않음(빌드 시점 이후 데이터 반영이 어려움).
      - 빌드 시간이 오래 걸릴 수 있음.

    - **예제:**
      Next.js의 \`getStaticProps\`.

    ---

    ### **CSR, SSR, SSG의 비교**

    | 렌더링 방식  | HTML 생성 위치         | SEO    | 초기 로딩 속도 | 서버 부하 | 사용 사례                             |
    |--------------|------------------------|--------|----------------|-----------|---------------------------------------|
    | **CSR**      | 클라이언트(브라우저)   | 낮음   | 느림          | 낮음      | 동적 SPA, 사용자 대시보드, 채팅 앱      |
    | **SSR**      | 서버                   | 높음   | 빠름          | 높음      | 블로그, 뉴스, SEO가 중요한 콘텐츠       |
    | **SSG**      | 빌드 시 정적 생성       | 높음   | 매우 빠름     | 매우 낮음 | 블로그, 마케팅 페이지, 자주 바뀌지 않는 콘텐츠 |

    ---

    ### **실제 사용 예시**
    1. **CSR:**
      - 대시보드, 프로필 페이지 등 로그인 후 사용자 맞춤형 데이터를 표시.
      - 예: React SPA, Vue.js 앱.

    2. **SSR:**
      - 뉴스, 블로그 게시글처럼 SEO가 중요하고 데이터가 자주 변경되는 콘텐츠.
      - 예: Next.js의 \`getServerSideProps\`.

    3. **SSG:**
      - 정적 블로그, 제품 소개 페이지처럼 변경이 거의 없는 콘텐츠.
      - 예: Next.js의 \`getStaticProps\`, Gatsby.

    ---

    ### **Next.js에서의 활용**
    Next.js는 **CSR, SSR, SSG** 모두 지원하므로 상황에 따라 유연하게 선택 가능합니다:
    - **SSR:** \`getServerSideProps\`를 사용.
    - **SSG:** \`getStaticProps\`를 사용.
    - **CSR:** 기본 React처럼 동작. 페이지 내부에서 \`useEffect\`로 데이터 로드.

    ---

    ### **결론**
    - **SEO가 중요한 콘텐츠:** SSR 또는 SSG 사용.
    - **사용자 인터렉션 중심 애플리케이션:** CSR 사용.
    - **자주 업데이트되지 않는 콘텐츠:** SSG로 최적화. 

  `,
};

export default post;