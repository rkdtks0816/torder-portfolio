import { Post } from "..";

const post: Post = {
  title: `int, char, bool, string`,
  tag: `#언어 #비교`,
  content: `
### 1. **Python**

\`\`\`python
# 배열 선언
int_arr = [1, 2, 3, 4, 5]
char_arr = ['a', 'b', 'c', 'd', 'e']
bool_arr = [True, False, True, False]
string_arr = ["hello", "world", "python"]

# 배열 복사
copied_int_arr = int_arr[:]
copied_char_arr = char_arr[:]
copied_bool_arr = bool_arr[:]
copied_string_arr = string_arr[:]

# 배열 수정
int_arr[0] = 10
char_arr[1] = 'z'
bool_arr[2] = False
string_arr[2] = "modified"
\`\`\`

### 2. **JavaScript (Node.js)**

\`\`\`javascript
// 배열 선언
let intArr = [1, 2, 3, 4, 5];
let charArr = ['a', 'b', 'c', 'd', 'e'];
let boolArr = [true, false, true, false];
let stringArr = ["hello", "world", "javascript"];

// 배열 복사
let copiedIntArr = [...intArr];
let copiedCharArr = [...charArr];
let copiedBoolArr = [...boolArr];
let copiedStringArr = [...stringArr];

// 배열 수정
intArr[0] = 10;
charArr[1] = 'z';
boolArr[2] = false;
stringArr[2] = "modified";
\`\`\`

### 3. **Java**

\`\`\`java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // 배열 선언
        int[] intArr = {1, 2, 3, 4, 5};
        char[] charArr = {'a', 'b', 'c', 'd', 'e'};
        boolean[] boolArr = {true, false, true, false};
        String[] stringArr = {"hello", "world", "java"};

        // 배열 복사
        int[] copiedIntArr = Arrays.copyOf(intArr, intArr.length);
        char[] copiedCharArr = Arrays.copyOf(charArr, charArr.length);
        boolean[] copiedBoolArr = Arrays.copyOf(boolArr, boolArr.length);
        String[] copiedStringArr = Arrays.copyOf(stringArr, stringArr.length);

        // 배열 수정
        intArr[0] = 10;
        charArr[1] = 'z';
        boolArr[2] = false;
        stringArr[2] = "modified";
    }
}
\`\`\`

### 4. **C**

\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    // 배열 선언
    int int_arr[5] = {1, 2, 3, 4, 5};
    char char_arr[5] = {'a', 'b', 'c', 'd', 'e'};
    _Bool bool_arr[4] = {1, 0, 1, 0};  // 1 = true, 0 = false
    char* string_arr[3] = {"hello", "world", "c"};

    // 배열 복사
    int copied_int_arr[5];
    memcpy(copied_int_arr, int_arr, sizeof(int_arr));

    char copied_char_arr[5];
    memcpy(copied_char_arr, char_arr, sizeof(char_arr));

    _Bool copied_bool_arr[4];
    memcpy(copied_bool_arr, bool_arr, sizeof(bool_arr));

    char* copied_string_arr[3];
    memcpy(copied_string_arr, string_arr, sizeof(string_arr));

    // 배열 수정
    int_arr[0] = 10;
    char_arr[1] = 'z';
    bool_arr[2] = 0;
    string_arr[2] = "modified";

    return 0;
}
\`\`\`

### 5. **C++**

\`\`\`cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    // 배열 선언
    int intArr[5] = {1, 2, 3, 4, 5};
    char charArr[5] = {'a', 'b', 'c', 'd', 'e'};
    bool boolArr[4] = {true, false, true, false};
    string stringArr[3] = {"hello", "world", "cpp"};

    // 배열 복사
    int copiedIntArr[5];
    memcpy(copiedIntArr, intArr, sizeof(intArr));

    char copiedCharArr[5];
    memcpy(copiedCharArr, charArr, sizeof(charArr));

    bool copiedBoolArr[4];
    memcpy(copiedBoolArr, boolArr, sizeof(boolArr));

    string copiedStringArr[3];
    for (int i = 0; i < 3; i++) copiedStringArr[i] = stringArr[i];

    // 배열 수정
    intArr[0] = 10;
    charArr[1] = 'z';
    boolArr[2] = false;
    stringArr[2] = "modified";

    return 0;
}
\`\`\`

### 6. **C#**

\`\`\`csharp
using System;

class Program {
    static void Main() {
        // 배열 선언
        int[] intArr = {1, 2, 3, 4, 5};
        char[] charArr = {'a', 'b', 'c', 'd', 'e'};
        bool[] boolArr = {true, false, true, false};
        string[] stringArr = {"hello", "world", "csharp"};

        // 배열 복사
        int[] copiedIntArr = (int[]) intArr.Clone();
        char[] copiedCharArr = (char[]) charArr.Clone();
        bool[] copiedBoolArr = (bool[]) boolArr.Clone();
        string[] copiedStringArr = (string[]) stringArr.Clone();

        // 배열 수정
        intArr[0] = 10;
        charArr[1] = 'z';
        boolArr[2] = false;
        stringArr[2] = "modified";
    }
}
\`\`\`

### 7. **Kotlin**

\`\`\`kotlin
fun main() {
    // 배열 선언
    val intArr = intArrayOf(1, 2, 3, 4, 5)
    val charArr = charArrayOf('a', 'b', 'c', 'd', 'e')
    val boolArr = booleanArrayOf(true, false, true, false)
    val stringArr = arrayOf("hello", "world", "kotlin")

    // 배열 복사
    val copiedIntArr = intArr.copyOf()
    val copiedCharArr = charArr.copyOf()
    val copiedBoolArr = boolArr.copyOf()
    val copiedStringArr = stringArr.copyOf()

    // 배열 수정
    intArr[0] = 10
    charArr[1] = 'z'
    boolArr[2] = false
    stringArr[2] = "modified"
}
\`\`\`

### 8. **Swift**

\`\`\`swift
import Foundation

// 배열 선언
var intArr: [Int] = [1, 2, 3, 4, 5]
var charArr: [Character] = ["a", "b", "c", "d", "e"]
var boolArr: [Bool] = [true, false, true, false]
var stringArr: [String] = ["hello", "world", "swift"]

// 배열 복사
var copiedIntArr = intArr
var copiedCharArr = charArr
var copiedBoolArr = boolArr
var copiedStringArr = stringArr

// 배열 수정
intArr[0] = 10
charArr[1] = "z"
boolArr[2] = false
stringArr[2] = "modified"
\`\`\`

### 9. **Rust**

\`\`\`rust
fn main() {
    // 배열 선언
    let mut int_arr = [1, 2, 3, 4, 5];
    let mut char_arr = ['a', 'b', 'c', 'd', 'e'];
    let mut bool_arr = [true, false, true, false];
    let mut string_arr = ["hello", "world", "rust"];

    // 배열 복사
    let copied_int_arr = int_arr.clone();
    let copied_char_arr = char_arr.clone();
    let copied_bool_arr = bool_arr.clone();
    let copied_string_arr = string_arr.clone();

    // 배열 수정
    int_arr[0] = 10;
    char_arr[1] = 'z';
    bool_arr[2] = false;
    string_arr[2] = "modified";
}
\`\`\`

### 10. **Dart**

\`\`\`dart
void main() {
  // 배열 선언
  List<int> intArr = [1, 2, 3, 4, 5];
  List<String> charArr = ['a', 'b', 'c', 'd', 'e'];
  List<bool> boolArr = [true, false, true, false];
  List<String> stringArr = ["hello", "world", "dart"];

  // 배열 복사
  List<int> copiedIntArr = List.from(intArr);
  List<String> copiedCharArr = List.from(charArr);
  List

<bool> copiedBoolArr = List.from(boolArr);
  List<String> copiedStringArr = List.from(stringArr);

  // 배열 수정
  intArr[0] = 10;
  charArr[1] = 'z';
  boolArr[2] = false;
  stringArr[2] = "modified";
}
\`\`\`
`,
};

export default post;
