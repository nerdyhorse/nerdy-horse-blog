---
template: post
title: Leetcode Thirty Day Challenge Week 3 Day 1
slug: leetcode-thirty-day-challenge-week-3-day-1
date: "2020-04-15T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Product of Array Except Self

## Prolem
Given an array `nums` of n integers where n > 1,  return an array `output` such that `output[i]` is equal to the product of all the elements of nums except `nums[i]`.

**Constraint**: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

**Note**: Please solve it without **division** and in `O(n)`.

**Follow up:**
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

__Example__
```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

## Discussion
So here I have solved using three ways
- using division
- not using division
- not using division or anyother extra space other then the output array

## Solution
Below is the one using division
```kotlin
fun productExceptSelf(nums: IntArray): IntArray {
    var zeroCount = 0
    var prodWithoutZero = 1

    for (num in nums) {
        if (num == 0) {
            zeroCount++
        } else {
            prodWithoutZero *= num
        }
    }

    val ans: IntArray = IntArray(nums.size)
    for (index in nums.indices) {
        when {
            zeroCount >= 2 -> {
                ans[index] = 0
            }
            zeroCount == 0 -> {
                ans[index] = prodWithoutZero / nums[index]
            }
            else -> {
                ans[index] = if (nums[index] == 0) prodWithoutZero else 0
            }
        }
    }
    return ans
}
```

Now below is the one by not using division but uses extra memory. The idea is to store left cumulative product except self and right 
cumulative product except self and then return prod of both left and right.

```kotlin
fun productExceptSelfNoDiv(nums: IntArray): IntArray {
    val leftProd = IntArray(nums.size) { 1 }
    val rightProd = IntArray(nums.size) { 1 }
    val ans = IntArray(nums.size)

    for (i in 1..nums.lastIndex) {
        leftProd[i] = leftProd[i - 1] * nums[i - 1]
        rightProd[nums.lastIndex - i] = rightProd[nums.size - i] * nums[nums.size - i]
    }

    for (index in ans.indices) {
        ans[index] = leftProd[index] * rightProd[index]
    }
    return ans
}
```


Now below is using no division and not extra memory except the output array. The idea is same as above
We would store right cumualative product except self in the output array itself and calculate left cumulative product
in place while iterating for result.

```kotlin
fun productExceptSelfNoDivNoSpace(nums: IntArray): IntArray {
    val ans = IntArray(nums.size)
    for (index in nums.indices.reversed()) {
        if (index == nums.lastIndex) {
            ans[index] = 1
        } else {
            ans[index] = ans[index + 1] * nums[index + 1]
        }
    }

    var leftProd = nums[0]
    for (index in 1..nums.lastIndex) {
        ans[index] *= leftProd
        leftProd *= nums[index]
    }
    return ans
}
```