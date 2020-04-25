---
template: post
title: Leetcode Thirty Day Challenge Week 2 Day 1
slug: leetcode-thirty-day-challenge-week-2-day-1
date: "2020-04-08T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Middle of the link list

## Problem

Given a non-empty, singly linked list with head node `head`, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

> Note: The number of nodes in the given list will be between 1 and 100.

__Example__

```
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
```

```
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
```

## Discussion
It follows a simple fast and slow pointer approach. One pointer moves the twice
the speed of the slower pointer. Once the fast pointer is at the end of the link list
the slower pointer must be pointing to the middle node

## Solution

```kotlin
private class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

private fun middleNode(head: ListNode?): ListNode? {
    var slowPtr: ListNode? = head
    var fastPtr: ListNode? = head?.next

    while (fastPtr != null) {
        slowPtr = slowPtr?.next
        fastPtr = fastPtr.next?.next
    }
    return slowPtr
}
```