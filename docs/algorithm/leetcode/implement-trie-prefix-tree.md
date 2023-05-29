---
title: 208. 实现Trie
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/implement-trie-prefix-tree/)
:::

```typescript
interface TrieNode {
    [key: string] : TrieNode | boolean;
};
class Trie {
    children: TrieNode
    constructor() {
        this.children = {
            isEndOfWord: false
        };
    }

    insert(word: string): void {
        let insertNode: TrieNode = this.children;
        // 在你的代码中，你假设如果一个节点没有孩子，那么就表示该节点是一个单词的结尾。但这种方式并不总是正确的。例如，如果你先插入单词"apple"，然后插入单词"app"，那么在你搜索"app"的时候就会返回false，因为"app"这个节点下面还有节点"l"和"e"。
        // 为了解决这个问题，我们可以在每个节点上增加一个标志位来表示这个节点是否是一个单词的结尾。
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if(!insertNode[char]) {
                insertNode[char] = {};
            }
            insertNode = insertNode[char] as TrieNode;
        }
        insertNode.isEndOfWord = true;
    }

    search(word: string): boolean {
        let startNode: TrieNode = this.children;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if(!startNode[char]) {
                return false;
            }
            startNode = startNode[char] as TrieNode;
        }
        return Boolean(startNode.isEndOfWord);
    }

    startsWith(prefix: string): boolean {
        let startNode: TrieNode = this.children;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if(!startNode[char]) {
                return false;
            }
            startNode = startNode[char] as TrieNode;
        }
        return true;
    }
}
```
