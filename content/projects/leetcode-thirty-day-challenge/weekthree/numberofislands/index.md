---
template: post
title: Leetcode Thirty Day Challenge Week 3 Day 3
slug: leetcode-thirty-day-challenge-week-3-day-3
date: "2020-04-17T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Number of Islands

## Problem
Given a 2d grid map of `'1's` (land) and `'0's` (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

__Example__
```
Input:
11110
11010
11000
00000

Output: 1
```

```
Input:
11000
11000
00100
00011

Output: 3
```

## Discussion
Very classic problem, I used recursion to mark on and traverse through the lands to count them

## Soluton
```kotlin
fun main() {
    var input = arrayOf(
        charArrayOf('1', '1', '1', '1', '0'),
        charArrayOf('1', '1', '0', '1', '0'),
        charArrayOf('1', '1', '0', '0', '0'),
        charArrayOf('0', '0', '0', '0', '0')
    )

    println(numIslands(input))      // ans: 1

    input = arrayOf(
        charArrayOf('1', '1', '0', '0', '0'),
        charArrayOf('1', '1', '0', '0', '0'),
        charArrayOf('0', '0', '1', '0', '0'),
        charArrayOf('0', '0', '0', '1', '1')
    )

    println(numIslands(input))      // ans: 3
}

fun numIslands(grid: Array<CharArray>): Int {
    var counter = 0

    for (i in grid.indices) {
        for (j in grid[i].indices) {
            if (grid.isLand(i, j)) {
                counter++
                countRecursively(i, j, grid)
            }
        }
    }
    return counter
}

fun countRecursively(i: Int, j: Int, grid: Array<CharArray>) {
    grid[i][j] = '2' // using this to mark the grid that it has been traversed

    for (row in -1..1 step 2) {
        if (grid.isLand(i + row, j)) {
            countRecursively(i + row, j, grid)
        }
    }

    for (col in -1..1 step 2) {
        if (grid.isLand(i, j + col)) {
            countRecursively(i, j + col, grid)
        }
    }
}

fun Array<CharArray>.isLand(i: Int, j: Int): Boolean {
    val value = this.getOrNull(i)?.getOrNull(j) ?: '0'
    return value == '1'
}

```

