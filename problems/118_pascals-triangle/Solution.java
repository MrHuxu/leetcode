import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ret = new ArrayList<>();

        Integer[] pre = new Integer[] {};
        for (int i = 0; i < numRows; i++) {
            Integer[] curr = new Integer[pre.length + 1];
            if (pre.length == 0) {
                curr[0] = 1;
            } else {
                curr[0] = 1;
                curr[curr.length - 1] = 1;
                for (int j = 1; j < curr.length - 1; j++) {
                    curr[j] = pre[j - 1] + pre[j];
                }
            }
            ret.add(Arrays.asList(curr));
            pre = curr;
        }

        return ret;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().generate(5));
    }
}