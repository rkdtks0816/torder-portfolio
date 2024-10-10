import { Post } from ".";

const post: Post = {
  title: `Python, JavaScript, Java, C/C++`,
  tag: `#언어 #비교`,
  content: `
### 1. **Python**
\`\`\`python
# 입출력
name = input("Enter your name: ")
print(f"Hello, {name}")

# if, switch 대신 match-case 사용
age = int(input("Enter your age: "))
if age > 18:
    print("Adult")
else:
    print("Minor")

match age:
    case 18:
        print("Just turned adult")
    case _:
        print("Different age")

# for, while
for i in range(5):
    print(i)

while age > 0:
    print(age)
    age -= 1

# 자료구조: map, set, list, queue
my_map = {'a': 1, 'b': 2}
my_set = set([1, 2, 3])
my_list = [1, 2, 3, 4]
from collections import deque
my_queue = deque([1, 2, 3])

# 비교
x, y = 10, 20
print(x == y, 'a' == 'b', "apple" == "banana")

# 구조체
from collections import namedtuple
Person = namedtuple('Person', ['name', 'age'])
p = Person(name="Alice", age=30)

# 정렬, 우선순위 큐
my_list.sort()
import heapq
heap = [1, 3, 5, 7]
heapq.heappush(heap, 2)

# 함수, 클래스
def my_func(a, b):
    return a + b

class MyClass:
    def __init__(self, value):
        self.value = value

instance = MyClass(10)
print(instance.value)
\`\`\`

### 2. **JavaScript**
\`\`\`javascript
// 입출력
let name = prompt("Enter your name:");
console.log(\`Hello, \${name}\`);

// if, switch
let age = parseInt(prompt("Enter your age:"));
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

switch (age) {
  case 18:
    console.log("Just turned adult");
    break;
  default:
    console.log("Different age");
}

// for, while
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (age > 0) {
  console.log(age);
  age--;
}

// 자료구조: map, set, list, queue
let myMap = new Map([['a', 1], ['b', 2]]);
let mySet = new Set([1, 2, 3]);
let myList = [1, 2, 3, 4];
let myQueue = [];

myQueue.push(1);
myQueue.push(2);

// 비교
let x = 10, y = 20;
console.log(x === y, 'a' === 'b', "apple" === "banana");

// 구조체 대신 객체 사용
let person = { name: "Alice", age: 30 };

// 정렬, 우선순위 큐 대신 custom
myList.sort();
let heap = [1, 3, 5, 7];
heap.push(2);
heap.sort((a, b) => a - b);

// 함수, 클래스
function myFunc(a, b) {
  return a + b;
}

class MyClass {
  constructor(value) {
    this.value = value;
  }
}

let instance = new MyClass(10);
console.log(instance.value);
\`\`\`

### 3. **Java**
\`\`\`java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 입출력
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name:");
        String name = sc.nextLine();
        System.out.println("Hello, " + name);

        // if, switch
        System.out.println("Enter your age:");
        int age = sc.nextInt();
        if (age > 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }

        switch (age) {
            case 18:
                System.out.println("Just turned adult");
                break;
            default:
                System.out.println("Different age");
        }

        // for, while
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }

        while (age > 0) {
            System.out.println(age);
            age--;
        }

        // 자료구조: map, set, list, queue
        Map<String, Integer> myMap = new HashMap<>();
        myMap.put("a", 1);
        myMap.put("b", 2);

        Set<Integer> mySet = new HashSet<>(Arrays.asList(1, 2, 3));
        List<Integer> myList = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        Queue<Integer> myQueue = new LinkedList<>(Arrays.asList(1, 2, 3));

        // 비교
        int x = 10, y = 20;
        System.out.println(x == y);
        System.out.println('a' == 'b');
        System.out.println("apple".equals("banana"));

        // 정렬, 우선순위 큐
        Collections.sort(myList);
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(1);
        pq.add(3);

        // 함수, 클래스
        MyClass instance = new MyClass(10);
        System.out.println(instance.value);
    }

    public static int myFunc(int a, int b) {
        return a + b;
    }

    static class MyClass {
        int value;
        MyClass(int value) {
            this.value = value;
        }
    }
}
\`\`\`

### 4. **C++**
\`\`\`cpp
#include <iostream>
#include <vector>
#include <queue>
#include <map>
#include <set>
#include <algorithm>
using namespace std;

struct Person {
    string name;
    int age;
};

int main() {
    // 입출력
    string name;
    cout << "Enter your name: ";
    cin >> name;
    cout << "Hello, " << name << endl;

    // if, switch
    int age;
    cout << "Enter your age: ";
    cin >> age;
    if (age > 18)
        cout << "Adult" << endl;
    else
        cout << "Minor" << endl;

    switch (age) {
        case 18:
            cout << "Just turned adult" << endl;
            break;
        default:
            cout << "Different age" << endl;
    }

    // for, while
    for (int i = 0; i < 5; i++)
        cout << i << endl;

    while (age > 0) {
        cout << age << endl;
        age--;
    }

    // 자료구조: map, set, list, queue
    map<string, int> myMap;
    myMap["a"] = 1;
    myMap["b"] = 2;

    set<int> mySet = {1, 2, 3};
    vector<int> myList = {1, 2, 3, 4};
    queue<int> myQueue;
    myQueue.push(1);
    myQueue.push(2);

    // 비교
    int x = 10, y = 20;
    cout << (x == y) << endl;
    cout << ('a' == 'b') << endl;
    cout << (string("apple") == "banana") << endl;

    // 정렬, 우선순위 큐
    sort(myList.begin(), myList.end());
    priority_queue<int> pq;
    pq.push(1);
    pq.push(3);

    // 함수, 클래스
    cout << myFunc(10, 20) << endl;
    Person p = {"Alice", 30};
    cout << p.name << endl;

    return 0;
}

int myFunc(int a, int b) {
    return a + b;
}
\`\`\`
`,
};

export default post;
