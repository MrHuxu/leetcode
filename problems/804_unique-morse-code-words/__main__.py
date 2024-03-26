letters = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
]


class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        return len(
            set(
                [
                    "".join([letters[ord(ch) - ord("a")] for ch in word])
                    for word in words
                ]
            )
        )
