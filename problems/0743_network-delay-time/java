import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;

class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        Map<Integer, Map<Integer, Integer>> edges = new HashMap<>();
        for (int[] time : times) {
            edges.putIfAbsent(time[0], new HashMap<>());
            edges.get(time[0]).put(time[1], time[2]);
        }

        Map<Integer, Integer> visited = new HashMap<>();
        Queue<Integer[]> queue = new ArrayDeque<>();
        visited.put(k, 0);
        queue.add(new Integer[] { k, 0 });
        while (queue.size() != 0) {
            Integer[] item = queue.poll();

            if (!edges.containsKey(item[0])) {
                continue;
            }

            for (Map.Entry<Integer, Integer> entry : edges.get(item[0]).entrySet()) {
                if (!visited.containsKey(entry.getKey()) || entry.getValue() + item[1] < visited.get(entry.getKey())) {
                    visited.put(entry.getKey(), entry.getValue() + item[1]);
                    queue.add(new Integer[] { entry.getKey(), entry.getValue() + item[1] });
                }
            }
        }

        if (visited.size() < n) {
            return -1;
        }

        Integer[] values = visited.values().toArray(new Integer[0]);
        Arrays.sort(values);
        return values[n - 1];
    }
}