import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> combinationSum3(int k, int n) {
        if (n < k) {
            return new ArrayList<>();
        }

        return helper(0, k, n);
    }

    private List<List<Integer>> helper(int start, int k, int n) {
        if (k == 0) {
            return n == 0 ? Arrays.asList(new ArrayList<>()) : new ArrayList<>();
        }

        List<List<Integer>> ret = new ArrayList<>();

        for (int i = start + 1; i <= Math.min(n, 9); i++) {
            for (List<Integer> next : helper(i, k - 1, n - i)) {
                next.add(0, i);
                ret.add(next);
            }
        }

        return ret;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().combinationSum3(3, 7));
        System.out.println(new Solution().combinationSum3(3, 9));
        System.out.println(new Solution().combinationSum3(2, 18));
    }
}