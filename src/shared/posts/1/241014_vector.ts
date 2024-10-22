import { Post } from "..";

const post: Post = {
  title: `Vector`,
  tag: `#언어 #비교`,
  content: `
### 1. **Python (list)**

\`\`\`python
# 선언
vector = [1, 2, 3, 4, 5]

# 삽입
vector.append(6)

# 삭제
vector.pop()

# 복사
copied_vector = vector[:]

# 수정
vector[0] = 10
\`\`\`

### 2. **JavaScript (Array)**

\`\`\`javascript
// 선언
let vector = [1, 2, 3, 4, 5];

// 삽입
vector.push(6);

// 삭제
vector.pop();

// 복사
let copiedVector = [...vector];

// 수정
vector[0] = 10;
\`\`\`

### 3. **C**

\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    // 선언
    int vector[5] = {1, 2, 3, 4, 5};
    int size = 5;

    // 삽입 (크기를 고려해야 함, 여기서는 배열 크기 고정으로 삽입할 수 있는지 확인)
    if (size < 6) {  // 배열 크기를 고려한 삽입 예제
        vector[size] = 6;
        size++;  // 크기 증가
    }

    // 삭제 (크기 조정)
    if (size > 0) {
        size--;  // 크기 감소
    }

    // 복사
    int copied_vector[5];
    memcpy(copied_vector, vector, size * sizeof(int));

    // 수정
    if (size > 0) {
        vector[0] = 10;
    }

    // 출력
    for (int i = 0; i < size; i++) {
        printf("%d ", vector[i]);
    }

    return 0;
}
\`\`\`

### 4. **Java (ArrayList)**

\`\`\`java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // 선언
        ArrayList<Integer> vector = new ArrayList<>();
        vector.add(1);
        vector.add(2);
        vector.add(3);

        // 삽입
        vector.add(4);

        // 삭제
        vector.remove(vector.size() - 1);

        // 복사
        ArrayList<Integer> copiedVector = new ArrayList<>(vector);

        // 수정
        vector.set(0, 10);
    }
}
\`\`\`

### 5. **C++ (std::vector)**

\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // 선언
    vector<int> vec = {1, 2, 3, 4, 5};

    // 삽입
    vec.push_back(6);

    // 삭제
    vec.pop_back();

    // 복사
    vector<int> copiedVec = vec;

    // 수정
    vec[0] = 10;

    return 0;
}
\`\`\`

### 6. **C# (List)**

\`\`\`csharp
using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        // 선언
        List<int> vector = new List<int> {1, 2, 3, 4, 5};

        // 삽입
        vector.Add(6);

        // 삭제
        vector.RemoveAt(vector.Count - 1);

        // 복사
        List<int> copiedVector = new List<int>(vector);

        // 수정
        vector[0] = 10;
    }
}
\`\`\`

### 7. **Kotlin (MutableList)**

\`\`\`kotlin
fun main() {
    // 선언
    val vector = mutableListOf(1, 2, 3, 4, 5)

    // 삽입
    vector.add(6)

    // 삭제
    vector.removeAt(vector.size - 1)

    // 복사
    val copiedVector = vector.toMutableList()

    // 수정
    vector[0] = 10
}
\`\`\`

### 8. **Swift (Array)**

\`\`\`swift
// 선언
var vector = [1, 2, 3, 4, 5]

// 삽입
vector.append(6)

// 삭제
vector.removeLast()

// 복사
var copiedVector = vector

// 수정
vector[0] = 10
\`\`\`

### 9. **Rust (Vec)**

\`\`\`rust
fn main() {
    // 선언
    let mut vec = vec![1, 2, 3, 4, 5];

    // 삽입
    vec.push(6);

    // 삭제
    vec.pop();

    // 복사
    let copied_vec = vec.clone();

    // 수정
    vec[0] = 10;

    println!("{:?}", vec);
}
\`\`\`

### 10. **Dart (List)**

\`\`\`dart
void main() {
  // 선언
  List<int> vector = [1, 2, 3, 4, 5];

  // 삽입
  vector.add(6);

  // 삭제
  vector.removeLast();

  // 복사
  List<int> copiedVector = List.from(vector);

  // 수정
  vector[0] = 10;

  print(vector);
}
\`\`\`
`,
};

export default post;
