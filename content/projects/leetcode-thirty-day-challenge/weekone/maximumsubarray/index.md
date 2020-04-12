---
template: post
title: Leetcode Thirty Day Challenge Week 1 Day 3
slug: leetcode-thirty-day-challenge-week-1-day-3
date: "2020-04-03T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---


# Maximum Subarray

## Problem
Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the 
largest sum and return its sum.

__Example__
```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

## Discussion
It basically involves traversing through the array as long as sum is greater than 0, 
once it falls below it we record the sum if it is greater than previously calculated sum.

It also has a __follow up__ on to solve this via `divide and conquer` approach, in the solution below
I'll include both, but note recursive solutions are inherently slower and can only work with limited 
data set size.

The divide and conquer approach is pretty basically like you find the longest length on the left sub part
then on the right subpart and then in the middle 
by going mid to left on the left and part and mid to right on the right part.


### Solution
```kotlin
fun main() {
    println(maxSubArray(intArrayOf(-2, 1, -3, 4, -1, 2, 1, -5, 4)))
    println(maxSubArray(intArrayOf(-2, -1, -3, -4, -1, -2, -1, -5, -4)))
    println(maxSubArray(intArrayOf(1, 2, 3, 4, 5)))
    println(maxSubArray(intArrayOf(-11)))
    
    println(maxSubArrayRecursion(intArrayOf(-2, 1, -3, 4, -1, 2, 1, -5, 4)))
    println(maxSubArrayRecursion(intArrayOf(-2, -1, -3, -4, -1, -2, -1, -5, -4)))
    println(maxSubArrayRecursion(intArrayOf(1, 2, 3, 4, 5)))
    println(maxSubArrayRecursion(intArrayOf(-1)))
}

fun maxSubArray(nums: IntArray): Int {
    var ans = Int.MIN_VALUE
    var sum = 0

    var i = 0
    var j = 0

    while (i < nums.size && j < nums.size) {
        sum += nums[j]
        ans = max(ans, sum)
        ++j
        if (sum <= 0) {
            i = j
            sum = 0
        }
    }
    return ans
}

/*
 * =============================
 * Just for education purposes.
 * Heuristic: Divide & Conquer
 * =============================
 *
 * Recursions are always slow.
 * Should not be used when data set can be large.
 */

fun maxSubArrayRecursion(nums: IntArray): Int {
    return getMaxSubArrayRecursion(nums, 0, nums.size - 1)
}

fun getMaxSubArrayRecursion(nums: IntArray, left: Int, right: Int): Int {
    if (left == right)
        return nums[left]

    val mid: Int = (left + right) / 2

    return maxTrips(
        getMaxSubArrayRecursion(nums, left, mid),
        getMaxSubArrayRecursion(nums, mid + 1, right),
        findPivotPointSum(nums, left, mid, right)
    )
}

fun maxTrips(a: Int, b: Int, c: Int): Int {
    return max(max(a, b), c)
}

fun findPivotPointSum(nums: IntArray, left: Int, mid: Int, right: Int): Int {
    var sum = 0
    var i = mid

    var leftSum: Int = Int.MIN_VALUE
    while (i >= left) {
        sum += nums[i]
        leftSum = max(leftSum, sum)
        i--
    }

    sum = 0
    i = mid + 1

    var rightSum: Int = Int.MIN_VALUE
    while (i <= right) {
        sum += nums[i]
        rightSum = max(rightSum, sum)
        i++
    }
    return leftSum + rightSum
}
```  

