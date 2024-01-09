package main

import (
	"fmt"
	"testing"
)

type Trie struct {
	isEnd bool
	data  map[byte]*Trie
}

func Constructor() Trie {
	return Trie{data: make(map[byte]*Trie)}
}

func (this *Trie) Insert(word string) {
	if len(word) == 0 {
		this.isEnd = true
		return
	}

	if this.data[word[0]] == nil {
		this.data[word[0]] = &Trie{data: make(map[byte]*Trie)}
	}
	this.data[word[0]].Insert(word[1:])
}

func (this *Trie) Search(word string) bool {
	if len(word) == 0 {
		return this.isEnd
	}

	if this.data[word[0]] == nil {
		return false
	}
	return this.data[word[0]].Search(word[1:])
}

func (this *Trie) StartsWith(prefix string) bool {
	if len(prefix) == 0 {
		return true
	}

	if this.data[prefix[0]] == nil {
		return false
	}
	return this.data[prefix[0]].StartsWith(prefix[1:])
}

func Test208(t *testing.T) {
	trie := Constructor()
	trie.Insert("apple")
	fmt.Println(trie.Search("apple"))
	fmt.Println(trie.Search("app"))
	fmt.Println(trie.StartsWith("app"))
	trie.Insert("app")
	fmt.Println(trie.Search("app"))
	t.Error()
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
