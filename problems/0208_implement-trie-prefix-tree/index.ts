class Trie {
    isEnd: boolean = false;
    data: Map<string, Trie>;

    constructor() {
        this.data = new Map();
    }

    insert(word: string): void {
        if (!word.length) {
            this.isEnd = true;
            return;
        }

        if (!this.data.has(word[0])) this.data.set(word[0], new Trie());
        this.data.get(word[0])?.insert(word.slice(1));
    }

    search(word: string): boolean {
        if (!word.length) return this.isEnd;
        if (!this.data.has(word[0])) return false;
        return this.data.get(word[0])!.search(word.slice(1));
    }

    startsWith(prefix: string): boolean {
        if (!prefix.length) return true;
        if (!this.data.has(prefix[0])) return false;
        return this.data.get(prefix[0])!.startsWith(prefix.slice(1));
    }
}

const trie = new Trie()
console.log(trie.insert('apple'));
console.log(trie.search('apple'));
console.log(trie.search('app'));
console.log(trie.startsWith('app'));
console.log(trie.insert('app'));
console.log(trie.search('app'));

/*
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]
*/


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */