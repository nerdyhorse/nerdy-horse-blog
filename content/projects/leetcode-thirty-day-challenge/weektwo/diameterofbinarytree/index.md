---
template: post
title: Leetcode Thirty Day Challenge Week 2 Day 4
slug: leetcode-thirty-day-challenge-week-2-day-4
date: "2020-04-11T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Diameter of the binary tree

## Problem
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

__Example__

Given a binary tree
```
          1
         / \
        2   3
       / \     
      4   5    
```
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

> **Note**: The length of path between two nodes is represented by the number of edges between them.

## Discussion
The approach I took was to simply get the max depth of each subtree recusively, and then check if 
depth of left subtree + depth of right subtree + 1 is greater than current max and then set the max of true

Finally returns the current max value.

## Solution
```kotlin
import kotlin.math.max

private data class TreeNode(val `val`: Int) {
    val left: TreeNode? = null
    val right: TreeNode? = null
}

private fun diameterOfBinaryTree(root: TreeNode?): Int {
    val map: HashMap<TreeNode?, Int> = HashMap()
    if (root == null)
        return 0

    return travelBinaryTree(root, map, Int.MIN_VALUE)
}

private fun travelBinaryTree(root: TreeNode, map: HashMap<TreeNode?, Int>, maxValue: Int): Int {
    var maxx = maxValue
    if (root.left != null) {
        maxx = max(maxx, travelBinaryTree(root.left, map, maxx))
    }

    if (root.right != null) {
        maxx = max(maxx, travelBinaryTree(root.right, map, maxx))
    }

    val leftHeight: Int = map.getOrDefault(root.left, 0)
    val rightHeight: Int = map.getOrDefault(root.right, 0)
    map[root] = max(leftHeight, rightHeight) + 1
    maxx = max(maxx, leftHeight + rightHeight)

    return maxx
}
```
