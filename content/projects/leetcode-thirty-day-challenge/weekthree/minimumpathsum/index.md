---
template: post
title: Leetcode Thirty Day Challenge Week 3 Day 4
slug: leetcode-thirty-day-challenge-week-3-day-4
date: "2020-04-18T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---


# Minimum Path Sum

## Problems
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

**Note**: You can only move either down or right at any point in time.

__Example__
```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

## Discussion
Its kind of DP where value for the current cell is minimum of its above and left plus its own value.

## Solution
```kotlin
import kotlin.math.min

fun main() {
    var grid = arrayOf(
        intArrayOf(1, 3, 1),
        intArrayOf(1, 5, 1),
        intArrayOf(4, 2, 1)
    )
    println(minPathSum(grid))       // ans: 7

    grid = arrayOf(
        intArrayOf(1, 3, 1),
        intArrayOf(1, 1, 1),
        intArrayOf(4, 2, 1)
    )
    println(minPathSum(grid))       // ans: 5
}

fun minPathSum(grid: Array<IntArray>): Int {
    val memo: Array<IntArray> = Array(grid.size) { i -> IntArray(grid[i].size) }
    for (i in grid.indices) {
        for (j in grid[i].indices) {
            if (i == 0 && j == 0) {
                memo[i][j] = grid[i][j]
                continue
            }

            memo[i][j] = min(memo.safeGet(i - 1, j), memo.safeGet(i, j - 1)) + grid[i][j]
        }
    }
    return memo[memo.lastIndex][memo[memo.lastIndex].lastIndex]
}

fun Array<IntArray>.safeGet(i: Int, j: Int): Int {
    return this.getOrNull(i)?.getOrNull(j) ?: Int.MAX_VALUE
}
```