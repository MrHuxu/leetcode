class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {
    }

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};

/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        Node levelStart = root;
        while (levelStart != null) {
            Node iter = levelStart;

            Node prevNode = null;
            Node nextLevelStart = null;
            while (iter != null) {
                if (iter.left != null) {
                    if (nextLevelStart == null) {
                        nextLevelStart = iter.left;
                    }

                    if (prevNode == null) {
                        prevNode = iter.left;
                    } else {
                        prevNode.next = iter.left;
                        prevNode = prevNode.next;
                    }
                }
                if (iter.right != null) {
                    if (nextLevelStart == null) {
                        nextLevelStart = iter.right;
                    }

                    if (prevNode == null) {
                        prevNode = iter.right;
                    } else {
                        prevNode.next = iter.right;
                        prevNode = prevNode.next;
                    }
                }

                iter = iter.next;
            }

            levelStart = nextLevelStart;
        }

        return root;
    }
}