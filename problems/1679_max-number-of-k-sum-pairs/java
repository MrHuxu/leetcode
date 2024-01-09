import java.util.HashMap;
import java.util.Map;

class Solution {
    public int maxOperations(int[] nums, int k) {
        int ret = 0;

        Map<Integer, Integer> numCnt = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            if (numCnt.containsKey(k - num) && numCnt.get(k - num) > 0) {
                numCnt.computeIfPresent(k - num, (key, val) -> val - 1);
                ret++;
            } else {
                numCnt.put(num, numCnt.getOrDefault(num, 0) + 1);
            }
        }

        return ret;
    }
}