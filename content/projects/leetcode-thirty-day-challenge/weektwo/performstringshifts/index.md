---
template: post
title: Leetcode Thirty Day Challenge Week 2 Day 7
slug: leetcode-thirty-day-challenge-week-2-day-7
date: "2020-04-14T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Perform String Shifts

## Problem

You are given a string `s` containing lowercase English letters, and a matrix `shift`, where `shift[i] = [direction, amount]`:

- `direction` can be `0` (for left shift) or `1` (for right shift). 
- `amount` is the amount by which string `s` is to be shifted.
- A left shift by 1 means remove the first character of `s` and append it to the end.
- Similarly, a right shift by 1 means remove the last character of `s` and add it to the beginning.

Return the final string after all operations.

**Constraints:**

- `1 <= s.length <= 100`
- `s` only contains lower case English letters.
- `1 <= shift.length <= 100`
- `shift[i].length == 2`
- `0 <= shift[i][0] <= 1`
- `0 <= shift[i][1] <= 100`

__Example__

```
Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
```

```
Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
```

## Discussion

Here the idea is to do simulation only on the starting pointer of the string
We move the pointer left and right based on the input and doing modulus of the length
of the string so that it rounds up. We then print the substrings of the string
based on the starting pointer

## Solution

```kotlin
fun main() {
    println(
        stringShift(
            "abcdefg", arrayOf(
                intArrayOf(1, 1),
                intArrayOf(1, 1),
                intArrayOf(0, 2),
                intArrayOf(1, 3)
            )
        )
    )
}

fun stringShift(s: String, shift: Array<IntArray>): String {
    var ptr = 0
    for (itr in shift) {
        ptr += if (itr[0] == 0) itr[1] else (-1) * itr[1]
        ptr %= s.length
    }
    ptr = if (ptr >= 0) ptr else s.length + ptr
    return "${s.substring(ptr)}${s.substring(0, ptr)}"
}
```

