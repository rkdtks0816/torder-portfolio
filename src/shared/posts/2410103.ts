import { Post } from ".";

const post: Post = {
  title: `C#, Kotlin, Swift, Rust, Dart`,
  tag: `#언어 #비교`,
  content: `
### 5. **C#**
\`\`\`csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        // 입출력
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        Console.WriteLine($"Hello, {name}");

        // if, switch
        Console.Write("Enter your age: ");
        int age = int.Parse(Console.ReadLine());
        if (age > 18)
            Console.WriteLine("Adult");
        else
            Console.WriteLine("Minor");

        switch (age)
        {
            case 18:
                Console.WriteLine("Just turned adult");
                break;
            default:
                Console.WriteLine("Different age");
                break;
        }

        // for, while
        for (int i = 0; i < 5; i++)
            Console.WriteLine(i);

        while (age > 0)
        {
            Console.WriteLine(age);
            age--;
        }

        // 자료구조: Dictionary, HashSet, List, Queue
        Dictionary<string, int> myMap = new Dictionary<string, int>();
        myMap["a"] = 1;
        myMap["b"] = 2;

        HashSet<int> mySet = new HashSet<int>() { 1, 2, 3 };
        List<int> myList = new List<int>() { 1, 2, 3, 4 };
        Queue<int> myQueue = new Queue<int>();
        myQueue.Enqueue(1);
        myQueue.Enqueue(2);

        // 비교
        int x = 10, y = 20;
        Console.WriteLine(x == y);
        Console.WriteLine('a' == 'b');
        Console.WriteLine("apple" == "banana");

        // 정렬, 우선순위 큐
        myList.Sort();
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>();
        pq.Enqueue(1, 1);
        pq.Enqueue(3, 3);

        // 함수, 클래스
        Console.WriteLine(MyFunc(10, 20));
        MyClass instance = new MyClass(10);
        Console.WriteLine(instance.Value);
    }

    static int MyFunc(int a, int b)
    {
        return a + b;
    }

    class MyClass
    {
        public int Value;
        public MyClass(int value)
        {
            Value = value;
        }
    }
}
\`\`\`

### 6. **Kotlin**
\`\`\`kotlin
fun main() {
    // 입출력
    print("Enter your name: ")
    val name = readLine()
    println("Hello, $name")

    // if, when (switch)
    print("Enter your age: ")
    val age = readLine()!!.toInt()
    if (age > 18) {
        println("Adult")
    } else {
        println("Minor")
    }

    when (age) {
        18 -> println("Just turned adult")
        else -> println("Different age")
    }

    // for, while
    for (i in 0..4) {
        println(i)
    }

    var tempAge = age
    while (tempAge > 0) {
        println(tempAge)
        tempAge--
    }

    // 자료구조: Map, Set, List, Queue
    val myMap = mutableMapOf("a" to 1, "b" to 2)
    val mySet = mutableSetOf(1, 2, 3)
    val myList = mutableListOf(1, 2, 3, 4)
    val myQueue: Queue<Int> = LinkedList(listOf(1, 2, 3))

    // 비교
    val x = 10
    val y = 20
    println(x == y)
    println('a' == 'b')
    println("apple" == "banana")

    // 정렬, 우선순위 큐
    myList.sort()
    val pq = PriorityQueue<Int>()
    pq.add(1)
    pq.add(3)

    // 함수, 클래스
    println(myFunc(10, 20))
    val instance = MyClass(10)
    println(instance.value)
}

fun myFunc(a: Int, b: Int): Int {
    return a + b
}

class MyClass(val value: Int)
\`\`\`

### 7. **Swift**
\`\`\`swift
import Foundation

// 입출력
print("Enter your name: ", terminator: "")
if let name = readLine() {
    print("Hello, \\(name)")
}

// if, switch
print("Enter your age: ", terminator: "")
if let age = readLine(), let ageInt = Int(age) {
    if ageInt > 18 {
        print("Adult")
    } else {
        print("Minor")
    }

    switch ageInt {
    case 18:
        print("Just turned adult")
    default:
        print("Different age")
    }

    // for, while
    for i in 0..<5 {
        print(i)
    }

    var tempAge = ageInt
    while tempAge > 0 {
        print(tempAge)
        tempAge -= 1
    }

    // 자료구조: Dictionary, Set, Array, Queue
    var myMap: [String: Int] = ["a": 1, "b": 2]
    var mySet: Set<Int> = [1, 2, 3]
    var myList: [Int] = [1, 2, 3, 4]
    var myQueue: [Int] = [1, 2, 3]

    // 비교
    let x = 10
    let y = 20
    print(x == y)
    print("a" == "b")
    print("apple" == "banana")

    // 정렬, 우선순위 큐 대신 배열로 구현
    myList.sort()
    myQueue.append(5)
    myQueue = myQueue.sorted()

    // 함수, 클래스
    print(myFunc(a: 10, b: 20))
    let instance = MyClass(value: 10)
    print(instance.value)
}

func myFunc(a: Int, b: Int) -> Int {
    return a + b
}

class MyClass {
    var value: Int
    init(value: Int) {
        self.value = value
    }
}
\`\`\`

### 8. **Rust**
\`\`\`rust
use std::collections::{HashMap, HashSet, VecDeque, BinaryHeap};

fn main() {
    // 입출력
    let mut name = String::new();
    println!("Enter your name: ");
    std::io::stdin().read_line(&mut name).unwrap();
    println!("Hello, {}", name.trim());

    // if, match (switch 대체)
    let age = 18;
    if age > 18 {
        println!("Adult");
    } else {
        println!("Minor");
    }

    match age {
        18 => println!("Just turned adult"),
        _ => println!("Different age"),
    }

    // for, while
    for i in 0..5 {
        println!("{}", i);
    }

    let mut temp_age = age;
    while temp_age > 0 {
        println!("{}", temp_age);
        temp_age -= 1;
    }

    // 자료구조: HashMap, HashSet, Vec, VecDeque, BinaryHeap
    let mut my_map = HashMap::new();
    my_map.insert("a", 1);
    my_map.insert("b", 2);

    let mut my_set: HashSet<i32> = HashSet::new();
    my_set.insert(1);
    my_set.insert(2);
    my_set.insert(3);

    let mut my_list = vec![1, 2, 3, 4];
    let mut my_queue: VecDeque<i32> = VecDeque::new();
    my_queue.push_back(1);
    my_queue.push_back(2);

    // 비교
    let x = 10;
    let y = 20;
    println!("{}", x == y);
    println!("{}", 'a' == 'b');
    println!("{}", "apple" == "banana");

    // 정렬, 우선순위 큐
    my_list.sort();
    let mut heap = BinaryHeap::new();
    heap.push(1);
    heap.push(3);

    // 함수, 구조체
    println!("{}", my_func(10, 20));
    let instance = MyClass { value: 10 };
    println!("{}", instance.value);
}

fn my_func(a: i32, b: i32) -> i32 {
    a + b
}

struct MyClass {
    value: i32,
}
\`\`\`

### 9. **Dart**

\`\`\`dart
import 'dart:collection';
import 'dart:io';

void main() {
  // 입출력
  print('Enter your name:');
  String? name = stdin.readLineSync();
  print('Hello, $name');

  // if, switch
  int age = 18;
  if (age > 18) {
    print('Adult');
  } else {
    print('Minor');
  }

  switch (age) {
    case 18:
      print('Just turned adult');
      break;
    default:
      print('Different age');
  }

  // for, while
  for (int i = 0; i < 5; i++) {
    print(i);
  }

  while (age > 0) {
    print(age);
    age--;
  }

  // 자료구조: Map, Set, List, Queue
  Map<String, int> myMap = {'a': 1, 'b': 2};
  Set<int> mySet = {1, 2, 3};
  List<int> myList = [1, 2, 3, 4];
  Queue<int> myQueue = Queue();
  myQueue.add(1);
  myQueue.add(2);

  // 비교
  int x = 10, y = 20;
  print(x == y);
  print('a' == 'b');
  print('apple' == 'banana');

  // 정렬, 우선순위 큐
  myList.sort();
  PriorityQueue<int> pq = PriorityQueue<int>();
  pq.add(1);
  pq.add(3);

  // 함수, 클래스
  print(myFunc(10, 20));
  MyClass instance = MyClass(10);
  print(instance.value);
}

int myFunc(int a, int b) {
  return a + b;
}

class MyClass {
  int value;
  MyClass(this.value);
}

\`\`\`
`,
};

export default post;
