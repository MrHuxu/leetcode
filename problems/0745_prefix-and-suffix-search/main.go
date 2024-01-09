package main

import "sort"

type trieNode struct {
	ch       byte
	idx      int
	children map[byte]*trieNode
}

func (tn trieNode) idxs() []int {
	var ret []int
	if tn.idx != -1 {
		ret = append(ret, tn.idx)
	}
	for _, child := range tn.children {
		ret = append(ret, child.idxs()...)
	}
	return ret
}

type WordFilter struct {
	prefixTrie, suffixTrie *trieNode
}

func Constructor(words []string) WordFilter {
	wf := &WordFilter{
		prefixTrie: &trieNode{children: make(map[byte]*trieNode)},
		suffixTrie: &trieNode{children: make(map[byte]*trieNode)},
	}

	for i, word := range words {
		tmp1 := wf.prefixTrie
		tmp2 := wf.suffixTrie
		for j := range word {
			ch1 := word[j]
			if tmp1.children[ch1] == nil {
				tmp1.children[ch1] = &trieNode{
					idx:      -1,
					children: make(map[byte]*trieNode),
				}
			}
			tmp1 = tmp1.children[ch1]

			ch2 := word[len(word)-1-j]
			if tmp2.children[ch2] == nil {
				tmp2.children[ch2] = &trieNode{
					idx:      -1,
					children: make(map[byte]*trieNode),
				}
			}
			tmp2 = tmp2.children[ch2]
		}
		tmp1.idx = i
		tmp2.idx = i
	}

	return *wf
}

func (this *WordFilter) F(prefix string, suffix string) int {
	tmp := this.prefixTrie
	for i := range prefix {
		ch := prefix[i]
		if tmp.children[ch] == nil {
			return -1
		}
		tmp = tmp.children[ch]
	}
	prefixIdxs := tmp.idxs()

	tmp = this.suffixTrie
	for i := len(suffix) - 1; i >= 0; i-- {
		ch := suffix[i]
		if tmp.children[ch] == nil {
			return -1
		}
		tmp = tmp.children[ch]
	}
	suffixIdxs := tmp.idxs()

	m := make(map[int]bool)
	for _, idx := range prefixIdxs {
		m[idx] = true
	}
	sort.Slice(suffixIdxs, func(i, j int) bool {
		return suffixIdxs[i] > suffixIdxs[j]
	})
	for _, idx := range suffixIdxs {
		if m[idx] {
			return idx
		}
	}
	return -1
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * obj := Constructor(words);
 * param_1 := obj.F(prefix,suffix);
 */
