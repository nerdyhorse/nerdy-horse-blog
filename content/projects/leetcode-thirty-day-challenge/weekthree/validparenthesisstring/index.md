---
template: post
title: Leetcode Thirty Day Challenge Week 3 Day 2
slug: leetcode-thirty-day-challenge-week-3-day-2
date: "2020-04-16T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Valid Parenthesis String

## Problem
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

1. Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
2. Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
3. Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
4. `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string.
5. An empty string is also valid. 

> **Note**: The string size will be in the range [1, 100].

__Example__

```
Input: "()"
Output: True
```

```
Input: "(*)"
Output: True
```

```
Input: "(*))"
Output: True
```

## Discussion
My approach was maintaining a bracket deque `bDeque` and star deque `sDeque`. For each opening bracket
I push into the `bDeque` and for every star I push into `sDeque`. Whenever there is an opening bracket
I pop the poll (remove from the queue, or from front) from `bDeque`, if not present then uses wild card 
if present to use it in its place instead. If no stars also availabe then it is incorrect.

In the end there could be some opening brackets remaining, which I try to balance out with the stars, if possible 
else again invalid string

## Solution
```
import java.util.*

fun main() {
    println(checkValidString(""))               // ans: true
    println(checkValidString("()"))             // ans: true
    println(checkValidString("(*)"))            // ans: true
    println(checkValidString("(*))"))           // ans: true
    println(checkValidString("((*)"))           // ans: true
    println(checkValidString("*"))              // ans: true
    println(checkValidString("**(*"))           // ans: true
    println(checkValidString("((****()"))       // ans: true

    println(checkValidString("((*"))            // ans: false
    println(checkValidString("(*)(*)((*"))      // ans: false
}

fun checkValidString(s: String): Boolean {
    val bDeque: LinkedList<Int> = LinkedList()
    val sDeque: LinkedList<Int> = LinkedList()

    for ((i, c) in s.withIndex()) {
        when (c) {
            '(' -> bDeque.offerLast(i)
            '*' -> sDeque.offerLast(i)
            else -> {
                when {
                    bDeque.size > 0 -> bDeque.pollLast()
                    sDeque.size > 0 -> sDeque.pollFirst()
                    else -> return false
                }
            }
        }
    }

    while (bDeque.isEmpty().not()) {
        when {
            sDeque.isEmpty() -> return false
            bDeque.peekFirst() > sDeque.peekFirst() -> sDeque.pollFirst()
            else -> {
                bDeque.pollFirst()
                sDeque.pollFirst()
            }
        }
    }
    return true
}
```

>Note: There must be a simpler solution but this is what came to my mind while solving this.