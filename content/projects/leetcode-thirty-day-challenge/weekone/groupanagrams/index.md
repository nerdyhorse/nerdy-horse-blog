---
template: post
title: Leetcode Thirty Day Challenge Week 1 Day 6
slug: leetcode-thirty-day-challenge-week-1-day-6
date: "2020-04-06T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Group Anagrams

## Problem

Given an array of strings, group anagrams together.

__Example__
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

## Discussion
Lets consider we create some kind of hash which returns the same value as long as all the characters and with its frequency is same. So that I made a 
encode function which would return `1a1e1l2p` for `apple`. 

## Solution

```kotlin
fun main() {
    val ans = groupAnagrams(arrayOf("eat", "tea", "tan", "ate", "nat", "bat"))
    for (itr1 in ans) {
        for (itr2 in itr1)
            print("$itr2 ")
        println()
    }
}

fun groupAnagrams(strs: Array<String>): List<List<String>> {
    val ans: ArrayList<ArrayList<String>> = ArrayList()
    val map: HashMap<String, Int> = HashMap()
    for (value in strs) {
        val encodedStr = encoder(value)
        if (map.containsKey(encodedStr)) {
            ans[map[encodedStr]!!].add(value)
        } else {
            val innerList = ArrayList<String>()
            innerList.add(value)
            ans.add(innerList)
            map[encodedStr] = ans.size - 1
        }
    }
    return ans
}

fun encoder(str: String): String {
    val arr = IntArray(26)
    for (value in str) {
        arr[value - 'a'] += 1
    }
    var code = ""
    for ((index, value) in arr.withIndex()) {
        if (value == 0)
            continue

        code += "$value${'a' + index}"
    }
    return code
}
```

