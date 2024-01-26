class WordDictionary {
    data: Map<string, WordDictionary>;
    isEnd: boolean = false;

    constructor() {
        this.data = new Map();
    }

    addWord(word: string): void {
        if (!word.length) {
            this.isEnd = true;
            return;
        }
        if (!this.data.has(word[0])) this.data.set(word[0], new WordDictionary());
        this.data.get(word[0])!.addWord(word.slice(1));
    }

    search(word: string): boolean {
        if (!word.length) return this.isEnd;
        if (word[0] !== '.') {
            if (!this.data.has(word[0])) return false;
            return this.data.get(word[0])!.search(word.slice(1));
        }
        for (let subDictionary of this.data.values()) {
            if (subDictionary.search(word.slice(1))) {
                return true;
            }
        }
        return false;
    }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */