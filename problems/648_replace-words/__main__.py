class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        dictionary.sort(key=len)
        words = sentence.split(" ")
        for i, word in enumerate(words):
            for root in dictionary:
                if word.startswith(root):
                    words[i] = root
                    break
        return " ".join(words)
