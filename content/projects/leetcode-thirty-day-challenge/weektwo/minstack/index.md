---
template: post
title: Leetcode Thirty Day Challenge Week 2 Day 3
slug: leetcode-thirty-day-challenge-week-2-day-3
date: "2020-04-10T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Min Stack

## Problem

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.

__Example__

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

## Discussion

The idea is to maintain a stack where each node also stores the current minumum value.
In this way we can achieve the above conditions

## Solution

```kotlin
import java.util.*
import kotlin.math.min

private class MinStack {
    val stack: Stack<MinStackNode> = Stack()

    fun push(x: Int) {
        val min = if (stack.empty()) x else min(x, stack.peek().min)
        stack.push(MinStackNode(x, min))
    }

    fun pop() {
        stack.pop()
    }

    fun top(): Int {
        return stack.peek().value
    }

    fun getMin(): Int {
        return stack.peek().min
    }
    private data class MinStackNode(val value: Int, val min: Int) {}
}

fun main() {

    val minStack = MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    println(minStack.getMin())      // outputs: -3
    minStack.pop();
    println(minStack.top())         // outputs: 0
    println(minStack.getMin())      // outputs: -2
}
```
