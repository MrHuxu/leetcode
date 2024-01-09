import java.util.Collections;
import java.util.PriorityQueue;

class Solution {
    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        for (int i = 0; i < heights.length - 1; i++) {
            if (heights[i] >= heights[i + 1])
                continue;

            bricks -= heights[i + 1] - heights[i];
            pq.add(heights[i + 1] - heights[i]);
            if (bricks < 0) {
                bricks += pq.poll();
                if (ladders > 0)
                    ladders--;
                else
                    return i;
            }
        }

        return heights.length - 1;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().furthestBuilding(new int[] { 4, 2, 7, 6, 9, 14, 12 }, 5, 1));
        System.out.println(new Solution().furthestBuilding(new int[] { 4, 12, 2, 7, 3, 18, 20, 3, 19 }, 10, 2));
    }
}