import java.util.ArrayDeque;
import java.util.Queue;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;

    public TreeNode() {
    }

    public TreeNode(int val) {
        this.val = val;
    }

    public TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    public final static TreeNode buildByArray(Integer[] vals) {
        if (vals.length == 0 || vals[0] == null) {
            return null;
        }

        TreeNode root = new TreeNode(vals[0]);

        Queue<TreeNode> q = new ArrayDeque<>();
        q.add(root);
        for (int i = 1; i < vals.length; i += 2) {
            TreeNode parent = q.poll();

            if (vals[i] != null) {
                parent.left = new TreeNode(vals[i]);
                q.add(parent.left);
            }

            if (i + 1 < vals.length && vals[i + 1] != null) {
                parent.right = new TreeNode(vals[i + 1]);
                q.add(parent.right);
            }
        }

        return root;
    }
}