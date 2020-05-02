---
template: post
title: Leetcode Thirty Day Challenge Week 3 Day 5
slug: leetcode-thirty-day-challenge-week-3-day-5
date: "2020-04-19T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Search in Rotated Sorted Array

## Problem
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of `O(log n)`.

__Example__

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

## Discussion
Its basic binary search, what it requires is searching the point where it breaks
and then normal binary search on each halves from the pivot point. There are methods where we can do it
in lesser passes of binary search than in this solution (here we do 3). But I find this
simple and works at same time complexity.

## Solution
```kotlin

package leetcode.thirtydaychallenge.weekthree

fun main() {
    println(search(intArrayOf(1, 2, 3, 4, 5), 4))
    println(search(intArrayOf(1, 2, 3, 4, 0), 4))
    println(search(intArrayOf(3, 4, 5, 1, 2), 4))
    println(search(intArrayOf(1), 1))

    println(search(intArrayOf(1, 2, 3, 4, 5), 14))
    println(search(intArrayOf(1, 2, 3, 4, 0), 14))
    println(search(intArrayOf(3, 4, 5, 1, 2), 14))
    println(search(intArrayOf(1), 11))
}

fun search(nums: IntArray, target: Int): Int {
    var pivot = pivotPoint(nums)
    pivot = if (pivot >= 0) pivot else 0
    val left = binarySearch(nums, 0, pivot - 1, target)
    val right = binarySearch(nums, pivot, nums.lastIndex, target)

    return when {
        left > -1 -> left
        right > -1 -> right
        else -> -1
    }
}

fun binarySearch(nums: IntArray, l: Int, h: Int, target: Int): Int {
    var low = l
    var high = h
    while (low <= high) {
        val mid = (low + high) shr 1
        if (nums[mid] == target)
            return mid

        if (target > nums[mid])
            low = mid + 1
        else
            high = mid - 1
    }
    return -1
}

fun pivotPoint(nums: IntArray): Int {
    var low = 0
    var high = nums.lastIndex

    while (low < high) {
        val mid = (low + high) shr 1

        if (mid > low && nums[mid] < nums[mid - 1])
            return mid
        if (mid < high && nums[mid] > nums[mid + 1])
            return mid + 1

        if (nums[mid] > nums[low]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return if (low == high) low else -1
}
```

