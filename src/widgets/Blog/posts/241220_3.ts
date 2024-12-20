import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `플러터 시작`,
  time: "241220_3",
  tags: [tags.frontEnd, tags.flutter],
  content: `

    ### **1. 환경 설정**

    #### **(1) Flutter SDK 설치**
    1. **Flutter 공식 웹사이트**에서 Flutter SDK를 다운로드합니다.  
      [Flutter 다운로드](https://flutter.dev/docs/get-started/install)
      
    2. 설치 후 시스템에 Flutter가 올바르게 설치되었는지 확인합니다:
      \`\`\`
      flutter doctor
      \`\`\`

    #### **(2) 필수 개발 도구 설치**
    - **Android Studio**:
      - Android SDK 설치 및 AVD(Android Virtual Device) 실행.
    - **Xcode** (Mac 사용자만 해당):
      - iOS 개발 및 시뮬레이터 실행.
    - **Visual Studio Code 또는 IntelliJ IDEA**:
      - Flutter/Dart 플러그인 설치.

    #### **(3) 모바일 디바이스 설정**
    - **iOS**:
      - Xcode에서 시뮬레이터 실행 또는 실제 디바이스 연결.
    - **Android**:
      - USB 디버깅 활성화 후 디바이스 연결 또는 AVD 실행.

    ---

    ### **2. 새 프로젝트 생성**

    #### **(1) Flutter CLI로 프로젝트 생성**
    터미널에서 다음 명령어를 실행:
    \`\`\`
    flutter create my_first_app
    \`\`\`

    #### **(2) 생성된 프로젝트 구조**
    \`\`\`
    my_first_app/
    ├── android/        # Android 플랫폼 관련 코드
    ├── ios/            # iOS 플랫폼 관련 코드
    ├── lib/            # Dart 코드 및 주요 앱 파일
    │   └── main.dart   # 앱의 진입점
    ├── test/           # 테스트 코드
    ├── pubspec.yaml    # 의존성 및 설정 파일
    \`\`\`

    ---

    ### **3. 프로젝트 실행**

    #### **(1) 디바이스 확인**
    현재 연결된 디바이스를 확인:
    \`\`\`
    flutter devices
    \`\`\`

    #### **(2) 앱 실행**
    앱을 실행할 디바이스를 선택하고 실행:
    \`\`\`
    flutter run
    \`\`\`

    - **VS Code**:
      - 상단의 "Run and Debug" 버튼 클릭.
    - **Android Studio**:
      - "Run" 버튼 클릭.

    ---

    ### **4. 프로젝트 코드 수정**

    #### **(1) \`main.dart\` 수정**
    기본적으로 Flutter 앱의 진입점은 \`lib/main.dart\`입니다. 아래는 기본 앱의 예제 코드입니다:
    \`\`\`
    import 'package:flutter/material.dart';

    void main() {
      runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          title: 'Flutter Demo',
          home: Scaffold(
            appBar: AppBar(
              title: Text('Welcome to Flutter!'),
            ),
            body: Center(
              child: Text('Hello, Flutter!'),
            ),
          ),
        );
      }
    }
    \`\`\`

    #### **(2) 코드 실행 후 결과 확인**
    1. **Hot Reload:** 코드를 저장하면 앱이 즉시 업데이트됩니다.
      \`\`\`
      flutter run
      \`\`\`
      저장 후 변경된 내용을 빠르게 반영:
      \`\`\`
      r (reload)
      \`\`\`

    2. **Hot Restart:** 앱 전체를 다시 시작합니다:
      \`\`\`
      R (restart)
      \`\`\`

    ---

    ### **5. 의존성 추가**
    Flutter 앱에서 필요한 패키지를 추가하려면 \`pubspec.yaml\` 파일을 수정합니다. 예를 들어 \`http\` 패키지를 추가:
    \`\`\`
    dependencies:
      flutter:
        sdk: flutter
      http: ^0.15.0
    \`\`\`

    그리고 의존성을 설치:
    \`\`\`
    flutter pub get
    \`\`\`

    ---

    ### **6. 앱 빌드 및 배포**

    #### **(1) APK 빌드 (Android)**
    \`\`\`
    flutter build apk
    \`\`\`

    #### **(2) iOS 앱 빌드**
    \`\`\`
    flutter build ios
    \`\`\`

    #### **(3) 웹 앱 빌드**
    \`\`\`
    flutter build web
    \`\`\`

    빌드된 파일은 \`build/\` 디렉터리에 생성됩니다.

    ---

    ### **7. 첫 번째 프로젝트 팁**
    - **Hot Reload 사용:** 개발 중 빠른 테스트를 위해 코드를 저장하며 결과를 확인.
    - **Flutter 위젯 문서:** 다양한 Flutter 위젯에 익숙해지기 위해 공식 문서를 참고.  
      [Flutter 위젯 카탈로그](https://flutter.dev/docs/development/ui/widgets)

    ---
  `,
};

export default post;
