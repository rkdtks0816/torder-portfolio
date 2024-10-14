import { Post } from ".";

const post: Post = {
  title: "Queue / Priority Queue",
  tag: "#언어 #비교",
  content: `
### 1. **Python**

#### **Queue (deque 사용)**

\`\`\`python
from collections import deque

# 선언
queue = deque([1, 2, 3, 4, 5])

# 삽입
queue.append(6)

# 삭제
queue.popleft()

# 복사
copied_queue = queue.copy()
\`\`\`

#### **Priority Queue (heapq 사용)**

\`\`\`python
import heapq

# 선언
priority_queue = [3, 1, 4, 1, 5]
heapq.heapify(priority_queue)

# 삽입
heapq.heappush(priority_queue, 2)

# 삭제
heapq.heappop(priority_queue)

# 복사
copied_pq = priority_queue[:]
\`\`\`

### 2. **JavaScript (Node.js)**

#### **Queue (Array 사용)**

\`\`\`javascript
// 선언
let queue = [1, 2, 3, 4, 5];

// 삽입
queue.push(6);

// 삭제
queue.shift();

// 복사
let copiedQueue = [...queue];
\`\`\`

#### **Priority Queue (Custom Implementation)**

JavaScript는 기본적으로 \`Priority Queue\`를 제공하지 않으므로 직접 구현할 수 있습니다.

\`\`\`javascript
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        this.queue.sort((a, b) => a - b);  // 최소 힙 형태로 유지
    }

    dequeue() {
        return this.queue.shift();  // 최소값 제거
    }

    copy() {
        return [...this.queue];
    }
}

// 선언
let pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(4);

// 삽입
pq.enqueue(1);

// 삭제
pq.dequeue();

// 복사
let copiedPQ = pq.copy();
\`\`\`

### 3. **C**

#### **Queue (배열 사용)**

C 언어에서는 배열을 사용하여 큐를 구현해야 합니다. 크기를 고정하거나 동적으로 관리할 수 있습니다.

\`\`\`c
#include <stdio.h>

int main() {
    // 선언
    int queue[5] = {1, 2, 3, 4, 5};
    int front = 0, rear = 4;

    // 삽입
    if (rear < 5 - 1) {
        queue[++rear] = 6;
    }

    // 삭제
    if (front <= rear) {
        front++;
    }

    // 복사
    int copied_queue[5];
    for (int i = front; i <= rear; i++) {
        copied_queue[i - front] = queue[i];
    }

    return 0;
}
\`\`\`

#### **Priority Queue (우선순위 큐 구현)**

C에서는 기본 제공되지 않으므로 간단한 최소 힙을 구현합니다.

\`\`\`c
#include <stdio.h>

#define MAX 100

int pq[MAX];
int size = 0;

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void heapify_up(int idx) {
    if (idx == 0) return;
    int parent = (idx - 1) / 2;
    if (pq[parent] > pq[idx]) {
        swap(&pq[parent], &pq[idx]);
        heapify_up(parent);
    }
}

void heapify_down(int idx) {
    int left = 2 * idx + 1, right = 2 * idx + 2, smallest = idx;
    if (left < size && pq[left] < pq[smallest]) smallest = left;
    if (right < size && pq[right] < pq[smallest]) smallest = right;
    if (smallest != idx) {
        swap(&pq[smallest], &pq[idx]);
        heapify_down(smallest);
    }
}

void enqueue(int value) {
    pq[size++] = value;
    heapify_up(size - 1);
}

int dequeue() {
    int result = pq[0];
    pq[0] = pq[--size];
    heapify_down(0);
    return result;
}

void copy(int *dest) {
    for (int i = 0; i < size; i++) {
        dest[i] = pq[i];
    }
}

int main() {
    // 선언 및 삽입
    enqueue(3);
    enqueue(1);
    enqueue(2);

    // 삭제
    dequeue();

    // 복사
    int copied_pq[MAX];
    copy(copied_pq);

    return 0;
}
\`\`\`

### 4. **Java**

#### **Queue (LinkedList 사용)**

\`\`\`java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        // 선언
        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(2);
        queue.add(3);

        // 삽입
        queue.add(4);

        // 삭제
        queue.poll();

        // 복사
        Queue<Integer> copiedQueue = new LinkedList<>(queue);
    }
}
\`\`\`

#### **Priority Queue**

\`\`\`java
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        // 선언
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(3);
        pq.add(1);
        pq.add(2);

        // 삽입
        pq.add(4);

        // 삭제
        pq.poll();

        // 복사
        PriorityQueue<Integer> copiedPQ = new PriorityQueue<>(pq);
    }
}
\`\`\`

### 5. **C++**

#### **Queue (std::queue 사용)**

\`\`\`cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
    // 선언
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);

    // 삽입
    q.push(4);

    // 삭제
    q.pop();

    // 복사
    queue<int> copiedQueue = q;

    return 0;
}
\`\`\`

#### **Priority Queue (std::priority_queue 사용)**

\`\`\`cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
    // 선언 (최소 힙으로 사용하려면 greater<int> 사용)
    priority_queue<int, vector<int>, greater<int>> pq;
    pq.push(3);
    pq.push(1);
    pq.push(2);

    // 삽입
    pq.push(4);

    // 삭제
    pq.pop();

    // 복사
    priority_queue<int, vector<int>, greater<int>> copiedPQ = pq;

    return 0;
}
\`\`\`

### 6. **C#**

#### **Queue**

\`\`\`csharp
using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        // 선언
        Queue<int> queue = new Queue<int>();
        queue.Enqueue(1);
        queue.Enqueue(2);
        queue.Enqueue(3);

        // 삽입
        queue.Enqueue(4);

        // 삭제
        queue.Dequeue();

        // 복사
        Queue<int> copiedQueue = new Queue<int>(queue);
    }
}
\`\`\`

#### **Priority Queue (SortedSet 사용)**

C#에는 \`PriorityQueue\`가 없으므로 \`SortedSet\`을 사용하거나, .NET 5 이후 \`PriorityQueue\`를 사용할 수 있습니다.

\`\`\`csharp
using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        // 선언
        SortedSet<int> pq = new SortedSet<int>();
        pq.Add(3);
        pq.Add(1);
        pq.Add(2);

        // 삽입
        pq.Add(4);

        // 삭제
        pq.Remove(pq.Min);

        // 복사
        SortedSet<int> copiedPQ = new SortedSet<int>(pq);
    }
}
\`\`\`

### 7. **Kotlin**

#### **Queue (LinkedList 사용)**

\`\`\`kotlin
import java.util.*

fun main() {
    // 선언
    val queue: Queue<Int> = LinkedList()
    queue.add(1)
    queue.add(2)
    queue.add(3)

    // 삽입
    queue.add(4)

    // 삭제
    queue.poll()

    // 복사
    val copiedQueue: Queue<Int> = LinkedList(queue)
}
\`\`\`

#### **Priority Queue**

\`\`\`kotlin
import java.util.*

fun main() {
    // 선언
    val pq = PriorityQueue<Int>()
    pq.add(3)
    pq.add(1)
    pq.add(2)

    // 삽입
    pq.add(4)

    // 삭제
    pq.poll()

    // 복사
    val copiedPQ = PriorityQueue(pq)
}
\`\`\`

### 8. **Swift**

#### **Queue (Array 사용)**

\`\`\`swift
// 선언
var queue = [1, 2, 3, 4, 5]

// 삽입
queue.append(6)

// 삭제
queue.removeFirst()

// 복사
var copiedQueue = queue
\`\`\`

#### **Priority Queue (Heap 구현 필요)**

### 9. **Rust**

#### **Queue (VecDeque 사용)**

\`\`\`rust
use std::collections::VecDeque;

fn main() {
    // 선언
    let mut queue: VecDeque<i32> = VecDeque::new();
    queue.push_back(1);
    queue.push_back(2);
    queue.push_back(3);

    // 삽입
    queue.push_back(4);

    // 삭제
    queue.pop_front();

    // 복사
    let copied_queue = queue.clone();

    println!("{:?}", copied_queue);
}
\`\`\`

#### **Priority Queue (BinaryHeap 사용)**

\`\`\`rust
use std::collections::BinaryHeap;

fn main() {
    // 선언
    let mut pq = BinaryHeap::new();
    pq.push(3);
    pq.push(1);
    pq.push(2);

    // 삽입
    pq.push(4);

    // 삭제
    pq.pop();

    // 복사
    let copied_pq = pq.clone();

    println!("{:?}", copied_pq);
}
\`\`\`

### 10. **Dart**

#### **Queue (List 사용)**

\`\`\`dart
void main() {
  // 선언
  List<int> queue = [1, 2, 3, 4, 5];

  // 삽입
  queue.add(6);

  // 삭제
  queue.removeAt(0);

  // 복사
  List<int> copiedQueue = List.from(queue);

  print(copiedQueue);
}
\`\`\`

#### **Priority Queue (PriorityQueue 사용)**

\`\`\`dart
import 'dart:collection';

void main() {
  // 선언
  PriorityQueue<int> pq = PriorityQueue<int>();
  pq.add(3);
  pq.add(1);
  pq.add(2);

  // 삽입
  pq.add(4);

  // 삭제
  pq.removeFirst();

  // 복사 (PriorityQueue는 직접 복사 불가, 수동으로 복사)
  PriorityQueue<int> copiedPQ = PriorityQueue<int>()..addAll(pq);

  print(copiedPQ.toList());
}
\`\`\`
`,
};

export default post;
