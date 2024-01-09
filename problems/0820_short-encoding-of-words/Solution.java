import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int minimumLengthEncoding(String[] words) {
        Arrays.sort(words, (a, b) -> b.length() - a.length());
        // System.out.println(Arrays.toString(words));

        int ret = 0;
        Set<String> exist = new HashSet<>();
        for (String word : words) {
            if (exist.contains(word)) {
                continue;
            }

            ret += word.length() + 1;
            for (int i = 0; i < word.length(); i++) {
                exist.add(word.substring(i));
            }
        }

        return ret;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().minimumLengthEncoding(new String[]{"time", "me"}));
        System.out.println(new Solution().minimumLengthEncoding(new String[]{"time", "me", "bell"}));
        System.out.println(new Solution().minimumLengthEncoding(new String[]{"t"}));
    }
}