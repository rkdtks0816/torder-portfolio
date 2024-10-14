import { Post } from ".";

const post: Post = {
  title: `Input / Output`,
  tag: `#언어 #비교`,
  content: `
### 1. **Python**

\`\`\`python
import sys
input = sys.stdin.read

# Input
data = input().split()
name = data[0]
age = int(data[1])

# Output
print(f"Hello, {name}! You are {age} years old.")
\`\`\`

### 2. **JavaScript**

\`\`\`javascript
const fs = require('fs');

// Input
const input = fs.readFileSync('/dev/stdin').toString().split('\\n');
const name = input[0];
const age = parseInt(input[1]);

// Output
console.log(\`Hello, \${name}! You are \${age} years old.\`);
\`\`\`

### 3. **Java**

\`\`\`java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Input
        String name = br.readLine();
        int age = Integer.parseInt(br.readLine());

        // Output
        System.out.println("Hello, " + name + "! You are " + age + " years old.");
    }
}
\`\`\`

### 4. **C**

\`\`\`c
#include <stdio.h>

int main() {
    char name[50];
    int age;

    // Input
    scanf("%s", name);
    scanf("%d", &age);

    // Output
    printf("Hello, %s! You are %d years old.\\n", name, age);
    return 0;
}
\`\`\`

### 5. **C++**

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    string name;
    int age;

    // Input
    cin >> name >> age;

    // Output
    cout << "Hello, " << name << "! You are " << age << " years old." << endl;

    return 0;
}
\`\`\`

### 6. **C#**

\`\`\`csharp
using System;

class Program {
    static void Main() {
        // Input
        string name = Console.ReadLine();
        int age = int.Parse(Console.ReadLine());

        // Output
        Console.WriteLine($"Hello, {name}! You are {age} years old.");
    }
}
\`\`\`

### 7. **Kotlin**

\`\`\`kotlin
fun main() {
    // Input
    val name = readLine()!!
    val age = readLine()!!.toInt()

    // Output
    println("Hello, $name! You are $age years old.")
}
\`\`\`

### 8. **Swift**

\`\`\`swift
import Foundation

// Input
let name = readLine()!
let age = Int(readLine()!)!

// Output
print("Hello, \\(name)! You are \\(age) years old.")
\`\`\`

### 9. **Rust**

\`\`\`rust
use std::io::{self, Write};

fn main() {
    let mut name = String::new();
    let mut age = String::new();

    // Input
    io::stdin().read_line(&mut name).expect("Failed to read line");
    io::stdin().read_line(&mut age).expect("Failed to read line");

    let age: i32 = age.trim().parse().expect("Please type a number!");

    // Output
    println!("Hello, {}! You are {} years old.", name.trim(), age);
}
\`\`\`

### 10. **Dart**

\`\`\`dart
import 'dart:io';

void main() {
  // Input
  String? name = stdin.readLineSync();
  String? age = stdin.readLineSync();
  
  // Output
  print("Hello, $name! You are $age years old.");
}
\`\`\`
`,
};

export default post;
