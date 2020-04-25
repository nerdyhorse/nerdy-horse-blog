---
template: post
title: Leetcode Thirty Day Challenge Week 1 Day 7
slug: leetcode-thirty-day-challenge-week-1-day-7
date: "2020-04-07T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Counting Elements

## Problem

Given an integer array `arr`, count element `x` such that `x + 1` is also in `arr`.
If there're duplicates in `arr`, count them seperately. 

**Constraints:**

- `1 <= arr.length <= 1000`
- `0 <= arr[i] <= 1000`

__Examples__

```
Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
```

```
Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
```

```
Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
```

```
Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.
```

## Discussion
This is a simple problem of hashing where we hash the unique numbers which are already there and then check it 
back with one more pass.

For this question I had solved with and without `HashSet`. In the first solution I used my own hash
structure made from boolean array. In the second approach I used the simple `HashSet` apis.

### Solution

```kotlin

fun main() {
    println(countElements(intArrayOf(1, 2, 3)))
    println(countElements(intArrayOf(1, 1, 3, 3, 5, 5, 7, 7)))
    println(countElements(intArrayOf(1, 3, 2, 3, 5, 0)))
    println(countElements(intArrayOf(1, 1, 2, 2)))
}

/*
 * Using custom hash where boolean array is used.
 */

fun countElements(arr: IntArray): Int {
    var count = 0
    val hash = Array(1002) { false }
    for (value in arr) {
        hash[value] = true
    }

    for (value in arr) {
        if (hash[value + 1])
            count++
    }
    return count
}

/*
 * using hashset api
 */

fun countElements2(arr: IntArray): Int {
    var count = 0
    val hash: HashSet<Int> = HashSet()
    for (value in arr) {
        hash.add(value)
    }

    for (value in arr) {
        if (hash.contains(value + 1))
            count++
    }
    return count
}

```

