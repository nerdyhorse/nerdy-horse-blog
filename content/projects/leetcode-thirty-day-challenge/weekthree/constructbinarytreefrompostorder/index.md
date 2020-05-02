---
template: post
title: Leetcode Thirty Day Challenge Week 3 Day 6
slug: leetcode-thirty-day-challenge-week-3-day-6
date: "2020-04-20T23:46:37.121Z"
category: leetcode-thirty-day-challenge
project: leetcode-thirty-day-challenge
tags: ["Programming", "Kotlin"]
---

# Construct Binary Search Tree from Preorder Traversal

## Problem

Return the root node of a binary **search** tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of `node.left` has a `value < node.val`, and any descendant of `node.right` has a `value > node.val`.  Also recall that a preorder traversal displays the value of the node first, then traverses `node.left`, then traverses `node.right`.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

**Constraints:**

- 1 <= preorder.length <= 100
- 1 <= preorder[i] <= 10^8
- The values of preorder are distinct.

__Example__

```
Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
```

<img src="./leetcode-thirty-day-challenge-week-3-day-6-image1.png">

## Discussion
I have solved this using stack. Can be done using recursion too.

## Solution
```kotlin
import utils.TreeNode
import utils.printTree
import java.util.*

fun main() {
    printTree(bstFromPreorder(intArrayOf(8, 5, 1, 7, 10, 12)))
    printTree(bstFromPreorder(intArrayOf(100, 90, 80, 60, 95, 110, 105, 101, 106, 107)))
}

fun bstFromPreorder(preorder: IntArray): TreeNode? {
    val stack: Stack<TreeNode> = Stack()
    var rootNode: TreeNode? = null
    for (itr in preorder) {
        if (stack.isEmpty()) {
            rootNode = TreeNode(itr)
            stack.push(rootNode)
            continue
        }

        if (itr <= stack.peek().`val`) {
            val node = TreeNode(itr)
            stack.peek().left = node
            stack.push(node)
        } else {
            val node = TreeNode(itr)
            var root: TreeNode? = null
            while (stack.isEmpty().not() && stack.peek().`val` < itr) {
                root = stack.pop()
            }

            root?.right = node
            stack.push(node)
        }
    }
    return rootNode
}
```