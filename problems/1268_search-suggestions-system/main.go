package main

import (
	"sort"
)

func suggestedProducts(products []string, searchWord string) [][]string {
	sort.Slice(products, func(i, j int) bool {
		return products[i] < products[j]
	})

	var ans [][]string
	tree := buildTrie(products)
	for i := range searchWord {
		if tree == nil {
			ans = append(ans, []string{})
			continue
		}

		ch := searchWord[i]
		tree = tree.children[ch]
		if tree == nil {
			ans = append(ans, []string{})
		} else {
			if len(tree.words) > 3 {
				ans = append(ans, tree.words[:3])
			} else {
				ans = append(ans, tree.words)
			}
		}
	}
	return ans
}

type trieNode struct {
	ch       byte
	words    []string
	children map[byte]*trieNode
}

func buildTrie(words []string) *trieNode {
	root := &trieNode{children: make(map[byte]*trieNode)}

	for _, word := range words {
		tmp := root
		for i := range word {
			ch := word[i]
			if tmp.children[ch] == nil {
				tmp.children[ch] = &trieNode{children: make(map[byte]*trieNode)}
			}
			tmp.words = append(tmp.words, word)
			tmp = tmp.children[ch]
		}
		tmp.words = append(tmp.words, word)
	}

	return root
}
