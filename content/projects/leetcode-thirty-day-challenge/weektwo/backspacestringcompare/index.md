---
template: post
title: Leetcode Thirty Day Challenge Week 2 Day 2
slug: leetcode-thirty-day-challenge-week-2-day-2
date: "2020-04-09T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Backspace String Compare

## Problem

Given two strings `S` and `T`, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty. 

**Note**
- `1 <= S.length <= 200`
- `1 <= T.length <= 200`
- `S` and `T` only contain lowercase letters and `'#'` characters.

__Example__

```
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

```
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

```
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

```
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```


## Discussion
I tried solving this problem in `O(N)` time and `O(1)` space. The approach I was to move
both the pointers to next valid character and then compare those characters. If same
nice else return false as the string aren't same

## Solution

```kotlin
fun main() {
    println(backspaceCompare("ab#c", "ad#c"))   // ans: true
    println(backspaceCompare("ab##", "c#d#"))   // ans: true
    println(backspaceCompare("a##c", "#a#c"))   // ans: true
    println(backspaceCompare("a#c", "b"))       // ans: false
    println(backspaceCompare("a#", ""))         // ans: true
    println(backspaceCompare("a#b", "#b"))      // ans: true
}

fun backspaceCompare(S: String, T: String): Boolean {
    var ptr1 = S.length
    var ptr2 = T.length

    while (ptr1 >= 0 && ptr2 >= 0) {
        ptr1 = findNextPtr(S, ptr1 - 1)
        ptr2 = findNextPtr(T, ptr2 - 1)

        if (S.safeGet(ptr1) != T.safeGet(ptr2))
            return false
    }

    return true
}

fun String.safeGet(index: Int): Char? {
    return if (index < this.length && index >= 0) this[index] else null
}

fun findNextPtr(str: String, index: Int): Int {

    var ptr: Int = index
    var ignore = 0
    while (ptr >= 0) {
        if (str[ptr] != '#') {
            if (ignore == 0)
                break
            else
                ignore--
        } else {
            ignore++
        }
        ptr--
    }
    return ptr
}
```

