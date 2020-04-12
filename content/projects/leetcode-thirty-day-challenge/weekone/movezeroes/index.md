---
template: post
title: Leetcode Thirty Day Challenge Week 1 Day 4
slug: leetcode-thirty-day-challenge-week-1-day-4
date: "2020-04-04T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Move Zeroes

## Problem

Given an array `nums`, write a function to move all `0's` to the end of it while maintaining 
the relative order of the non-zero elements.

__Example__
```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

__Note:__
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.


## Discussion
We won't be creating a new memory space as the problem states not to do one
Hence we will do operations on the given array itself. I thought of solving this problem in two ways
### Approach 1
Here I am basically moving the elements up and filling up the void with `0s`. We can do this 
as the elements are simple numbers, and we don't actually have to swap it. A cheesy approach.

### Approach 2
Assuming we actually have to swap the elements in this approach I will be swapping the elemets
rather than filling it up with values. Just for fun.

## Solution
```kotlin
fun main() {
    driver(intArrayOf(0, 0, 3))             // ans: 3, 0, 0
    driver(intArrayOf(3, 1, 0))             // ans: 3, 1, 0
    driver(intArrayOf(0, 1, 0, 3, 12))      // ans: 1, 3, 12, 0, 0

    println("============= now with swaps =============")

    driverWithSwap(intArrayOf(0, 0, 3))             // ans: 3, 0, 0
    driverWithSwap(intArrayOf(3, 1, 0))             // ans: 3, 1, 0
    driverWithSwap(intArrayOf(0, 1, 0, 3, 12))      // ans: 1, 3, 12, 0, 0
}

fun driver(nums: IntArray) {
    moveZeroes(nums)
    nums.printWithSpace()
}

fun driverWithSwap(nums: IntArray) {
    moveZeroesWithSwap(nums)
    nums.printWithSpace()
}

fun moveZeroes(nums: IntArray) {
    var ptr = 0
    for (value in nums) {
        if (value != 0)
            nums[ptr++] = value
    }

    for (itr in ptr until nums.size)
        nums[itr] = 0
}

/*
 * ==============
 * JUST FOR FUN
 * ==============
 *
 * Basically if this problem was needed to be solved with swap
 * For example instead of being a simple values it was objects.
 *
 */

fun moveZeroesWithSwap(nums: IntArray) {
    var zeroPtr = 0
    var nonZeroPtr = 0

    while (nonZeroPtr < nums.size && zeroPtr < nums.size) {
        nonZeroPtr = findPtr(nums, nonZeroPtr) { it != 0 }
        zeroPtr = findPtr(nums, zeroPtr) { it == 0 }

        if (zeroPtr >= nums.size || nonZeroPtr >= nums.size)
            break

        if (zeroPtr < nonZeroPtr) {
            nums[zeroPtr] = nums[zeroPtr] xor nums[nonZeroPtr]
            nums[nonZeroPtr] = nums[zeroPtr] xor nums[nonZeroPtr]
            nums[zeroPtr] = nums[zeroPtr] xor nums[nonZeroPtr]

            zeroPtr++
            nonZeroPtr++
        } else if (zeroPtr > nonZeroPtr) {
            nonZeroPtr++
        }
    }
}

fun findPtr(nums: IntArray, ptr: Int, predicate: (value: Int) -> Boolean): Int {
    var mPtr = ptr
    while (mPtr < nums.size) {
        if (predicate(nums[mPtr])) {
            break
        }
        mPtr++
    }
    return mPtr
}
``` 
