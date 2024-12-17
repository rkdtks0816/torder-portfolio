import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `Next.js 시작`,
  time: "241216_2",
  tags: [tags.frontEnd, tags.nextJS],
  content: `
    ### **1. 사전 준비**
    - **Node.js**: Next.js는 Node.js 환경에서 실행 (최소 Node.js 16.8 이상 필요)
    - **패키지 매니저**: npm 또는 Yarn을 사용 (권장: npm)
    
    ---
    
    ### **2. 프로젝트 초기화**
    #### **1) 프로젝트 생성**
    \`\`\`bash
    npx create-next-app@latest my-next-app
    # 또는
    yarn create next-app my-next-app
    \`\`\`
    
    - \`my-next-app\`: 프로젝트 디렉토리 이름
    - 명령 실행 후:
      - TypeScript 사용 여부를 묻는 옵션 제공
      - ESLint 설정 여부 등 선택 가능
    
    #### **2) 디렉토리 이동**
    \`\`\`bash
    cd my-next-app
    \`\`\`
    
    ---
    
    ### **3. 개발 서버 실행**
    \`\`\`bash
    npm run dev
    # 또는
    yarn dev
    \`\`\`
    
    - 기본적으로 \`http://localhost:3000\`에서 애플리케이션이 실행
    - 브라우저에서 접속하여 "Welcome to Next.js!" 초기 페이지를 확인
    
    ---
    
    ### **4. 기본 디렉토리 구조**
    \`\`\`plaintext
    my-next-app/
    ├── pages/          # 페이지 컴포넌트를 저장
    │   ├── index.js    # 홈 페이지
    │   └── api/        # API 라우트 파일 (백엔드 서버리스 함수)
    ├── public/         # 정적 파일 (이미지, 폰트 등)
    ├── styles/         # CSS 파일 저장
    ├── node_modules/   # 설치된 패키지
    ├── package.json    # 프로젝트 정보와 의존성
    └── next.config.js  # Next.js 설정 파일 (옵션)
    \`\`\`
    
    ---
    
    ### **5. 기본 파일 수정**
    #### **홈 페이지 수정**
    - \`pages/index.js\` 파일을 열고 기본 코드를 수정:
    \`\`\`javascript
    export default function Home() {
      return (
        <div>
          <h1>Welcome to My First Next.js App!</h1>
        </div>
      );
    }
    \`\`\`
    
    #### **CSS 스타일 추가**
    - \`styles/globals.css\`에 글로벌 스타일 추가:
    \`\`\`css
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    \`\`\`
    
    ---
    
    ### **6. 페이지 추가**
    #### **새로운 페이지 생성**
    - \`pages/about.js\` 파일을 생성:
    \`\`\`javascript
    export default function About() {
      return (
        <div>
          <h1>About Page</h1>
          <p>This is the about page of my Next.js app!</p>
        </div>
      );
    }
    \`\`\`
    
    - 브라우저에서 \`http://localhost:3000/about\`로 접속하면 확인할 수 있습니다.
    
    ---
    
    ### **7. API 라우트 추가**
    #### **간단한 API 예제**
    - \`pages/api/hello.js\` 파일을 생성:
    \`\`\`javascript
    export default function handler(req, res) {
      res.status(200).json({ message: 'Hello, Next.js API!' });
    }
    \`\`\`
    
    - 브라우저에서 \`http://localhost:3000/api/hello\`로 확인.
    
    ---
    
    ### **8. 배포**
    #### **Vercel을 사용한 배포**
    Next.js는 Vercel과 긴밀히 통합되어 있어 손쉽게 배포할 수 있습니다:
    1. [Vercel 웹사이트](https://vercel.com/)에서 계정 생성.
    2. 프로젝트를 GitHub에 푸시.
    3. Vercel에서 리포지토리를 연결하여 배포.
    
    ---
    
    ### **추가 팁**
    - TypeScript 사용:
      \`\`\`bash
      npx create-next-app@latest --typescript
      \`\`\`
    - 라우팅, SSR, SSG 등 심화 기능은 공식 문서에서 참고: [Next.js 공식 문서](https://nextjs.org/docs)
  `,
};

export default post;
