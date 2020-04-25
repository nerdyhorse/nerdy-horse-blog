---
template: post
title: Leetcode Thirty Day Challenge Week 2 Day 5
slug: leetcode-thirty-day-challenge-week-2-day-5
date: "2020-04-12T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Last Stone Weight

## Problem

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights `x` and `y` with `x <= y`.  The result of this smash is:

- If `x == y`, both stones are totally destroyed;
- If `x != y`, the stone of weight `x` is totally destroyed, and the stone of weight `y` has new weight `y-x`.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

**Note**:
- `1 <= stones.length <= 30`
- `1 <= stones[i] <= 1000`

__Example__

```
Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
```

## Discussion

The idea is to simply perform simulation, do whatever is asked in the question and to get 
the stone of smaller size we can use heap.

## Solution

```kotlin
import java.util.*

fun main() {
    println(lastStoneWeight(intArrayOf(2, 7, 4, 1, 8, 1)))
    println(lastStoneWeight(intArrayOf(5, 5)))
}

fun lastStoneWeight(stones: IntArray): Int {
    val heap: PriorityQueue<Int> = PriorityQueue(Collections.reverseOrder())
    for (itr in stones) {
        heap.add(itr)
    }

    while (heap.size >= 2) {
        val bigStone: Int = heap.poll()
        val smallStone: Int = heap.poll()

        if (bigStone > smallStone) {
            heap.add(bigStone - smallStone)
        }
    }
    return if (heap.size == 1) heap.peek() else 0
}
```