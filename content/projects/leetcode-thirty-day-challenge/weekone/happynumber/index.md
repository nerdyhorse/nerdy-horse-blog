---
template: post
title: Leetcode Thirty Day Challenge Week 1 Day 2
slug: leetcode-thirty-day-challenge-week-1-day-2
date: "2020-04-02T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---


# Happy Number

## Problem
[Link to the problem](https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3284/)

Write an algorithm to determine if a number n is __"happy"__.
A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Return `True` if `n` is a happy number, and `False` if not.

__Example__
```
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

## Discussion
Seems like pretty straight forward simulation problem,
keep on looping till either you reach `1` or any other `state` where 
you had reached before

## Solution

```kotlin
fun main() {
    println(isHappy(19))
    println(isHappy(21))
}

fun isHappy(n: Int): Boolean {
    var num: Long = n.toLong()
    val map = HashMap<Long, Boolean>()
    while (num != 1L && !map.containsKey(num)) {
        map[num] = true
        num = getSquaredDigits(num)
    }
    return num == 1L
}

fun getSquaredDigits(n: Long): Long {
    var num = n
    var sum = 0L
    while (num > 0) {
        val d = num % 10
        num /= 10L
        sum += (d * d)
    }
    return sum
}
```
