package main

func mergeAlternately(word1 string, word2 string) string {
    ret := make([]byte, len(word1) + len(word2))
    var idx1, idx2 int
    for i := 0; i < len(ret); i++ {
        if i % 2 == 0 {
            if idx1 < len(word1) {
                ret[i] = word1[idx1]
                idx1++
            } else {
                ret[i] = word2[idx2]
                idx2++
            }
        } else {
            if idx2 < len(word2) {
                ret[i] = word2[idx2]
                idx2++
            } else {
                ret[i] = word1[idx1]
                idx1++
            }
        }
    }
    return string(ret)
}