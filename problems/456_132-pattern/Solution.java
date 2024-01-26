import java.util.ArrayList;

class Solution {
    public boolean find132pattern(int[] nums) {
        ArrayList<Integer> stack = new ArrayList<>();
        int secondNum = Integer.MIN_VALUE;
        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums[i] < secondNum) {
                return true;
            }

            while (stack.size() != 0 && stack.get(stack.size() - 1) < nums[i]) {
                secondNum = stack.get(stack.size() - 1);
                stack.remove(stack.size() - 1);
            }
            stack.add(nums[i]);
        }

        return false;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.find132pattern(new int[] { 1, 2, 3, 4 }));
        System.out.println(s.find132pattern(new int[] { 3, 1, 4, 2 }));
        System.out.println(s.find132pattern(new int[] { -1, 3, 2, 0 }));
    }
}