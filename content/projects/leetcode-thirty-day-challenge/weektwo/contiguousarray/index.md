---
template: post
title: Leetcode Thirty Day Challenge Week 2 Day 6
slug: leetcode-thirty-day-challenge-week-2-day-6
date: "2020-04-13T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Contiguous Array

## Problem

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

__Example__

```
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
```

```
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

> **Note**: The length of the given binary array will not exceed 50,000.

## Discussion
The idea is to perform a cumulative sum of the numbers where 0 will be considered -1.
Then we will store the index of each new value in map. Whenever we get a sum we check in the map if 
already present, if yes that means the difference is 0 hene it has same numbers of `0s` and `1s`.
We return the one with maximum differnece in the index.

## Solution

```kotlin
import kotlin.math.max

fun main() {
    println(findMaxLength(intArrayOf(0, 1)))
    println(findMaxLength(intArrayOf(0, 1, 0)))
    println(findMaxLength(intArrayOf(0, 0, 0)))
    println(findMaxLength(intArrayOf(1, 1, 1)))
    println(findMaxLength(intArrayOf(1, 1, 1, 1, 0, 1, 0, 0, 1)))
    println(findMaxLength(intArrayOf(1, 0, 1, 1, 1, 1, 0)))
    println(findMaxLength(intArrayOf(1, 0, 1, 1, 1, 1, 0, 0, 0)))
}

fun findMaxLength(nums: IntArray): Int {
    var cSum = 0
    var ans = 0
    val map: HashMap<Int, Int> = HashMap()
    map[0] = -1
    for ((index, value) in nums.withIndex()) {
        cSum += if (value == 1) 1 else -1
        if (map.containsKey(cSum)) {
            ans = max(ans, index - map[cSum]!!)
        } else {
            map[cSum] = index
        }
    }
    return ans
}
```
