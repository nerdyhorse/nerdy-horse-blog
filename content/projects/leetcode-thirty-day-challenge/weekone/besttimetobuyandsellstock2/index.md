---
template: post
title: Leetcode Thirty Day Challenge Week 1 Day 5
slug: leetcode-thirty-day-challenge-week-1-day-5
date: "2020-04-05T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Best Time to Buy and Sell Stock II

## Problem
Say you have an array `prices` for which the _ith_ element is the price of a given stock on day _i_.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times).

> Note: You may not engage in multiple transactions at the same time
 (i.e., you must sell the stock before you buy again).
 
## Discussion
Basically this is a problem of local minima and local maxima.
You buy at local minima and sell at local maxima. There are few things
to be taken care of, the beginning and end of the array and plateau conditions.

### Solution
```kotlin
fun main() {
    println(maxProfit(intArrayOf(7, 1, 5, 3, 6, 4)))        // ans: 7
    println(maxProfit(intArrayOf(1, 2, 3, 4, 5)))           // ans: 4
    println(maxProfit(intArrayOf(7, 6, 4, 3, 1)))           // ans: 0
    println(maxProfit(intArrayOf(1, 1, 1, 1)))              // ans: 0
    println(maxProfit(intArrayOf(1, 1, 1, 2, 2)))           // ans: 1
    println(maxProfit(intArrayOf(1, 1, 1, 2, 2, 2, 3, 3)))  // ans: 2
    println(maxProfit(intArrayOf(4)))                       // ans: 0
    println(maxProfit(intArrayOf(3, 3, 3, 2, 2, 2, 1, 1)))  // ans: 0
}

fun maxProfit(prices: IntArray): Int {
    var ans = 0
    var boughtPrice = 0

    if (prices.size == 1)
        return 0

    for ((index, value) in prices.withIndex()) {
        if (index == 0) {
            boughtPrice = value
        } else if (index + 1 >= prices.size) {
            ans += if (prices[index - 1] < value) value - boughtPrice else 0
        } else if (prices[index - 1] >= value && prices[index + 1] > value) {
            boughtPrice = value
        } else if (prices[index - 1] < value && prices[index + 1] <= value)
            ans += value - boughtPrice
    }
    return ans
}
```