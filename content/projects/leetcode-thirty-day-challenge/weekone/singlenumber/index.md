---
template: post
title: Leetcode Thirty Day Challenge Week 1 Day 1
slug: leetcode-thirty-day-challenge-week-1-day-1
date: "2020-04-01T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Single Number
## Problem
[Link to the problem](https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3283/)

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

> Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

## Discussion
Without the note it is pretty straight forward question, you save the 
numbers encountered in a hashmap and check it with it whenever it comes up again.

To solve the problem with note is using `xor` operator.
### Xor rules
```
a^a = 0
0^a = a

a^b = c
a^c = b
b^c = a

(a^b)^c = a^(b^c)
```

You can visualise `xor` like `add`, no matter how you add them, you will always 
get the same answer in the end.

To solve this problem we will be using first two rules and the last one.

If we xor all the elements, all the same element will result in 0 (**rule #1**), 
and in the end only the single number remains (**rule #2**)

## Solution

```kotlin
fun main() {
    println(singleNumber(intArrayOf(4, 1, 2, 1, 2)))
    println(singleNumber(intArrayOf(1, 2, 2)))
}

fun singleNumber(nums: IntArray): Int {
    var arr = 0
    nums.forEach { arr = arr xor it }
    return arr
}
```
