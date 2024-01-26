class Solution {
    public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummyHead = new ListNode();

        ListNode iter = dummyHead;
        for (int i = 1; i < left; i++) {
            iter.next = head;
            iter = iter.next;
            head = head.next;
        }

        ListNode reversedHead = null;
        ListNode reversedTail = null;
        for (int i = left; i <= right; i++) {
            if (reversedTail == null) {
                reversedTail = head;
            }

            ListNode tmp = head;
            head = head.next;
            tmp.next = reversedHead;
            reversedHead = tmp;
        }
        iter.next = reversedHead;
        reversedTail.next = head;

        return dummyHead.next;
    }
}