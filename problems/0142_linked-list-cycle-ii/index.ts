class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let slow: ListNode | null | undefined = head;
    let fast: ListNode | null | undefined = head.next;
    while (fast !== slow) {
        if (!fast || !fast.next) return null

        fast = fast.next.next;
        slow = slow?.next;
    }

    let nodeInList = fast;
    let listLen = 1;
    let tmp = nodeInList?.next;
    while (tmp !== nodeInList) {
        listLen++;
        tmp = tmp?.next;
    }

    fast = head;
    slow = head;
    for (let i = 0; i < listLen; i++) {
        slow = slow?.next;
    }

    while (fast !== slow) {
        fast = fast?.next;
        slow = slow?.next;
    }

    return fast
};

test('142', () => {
    const node0 = new ListNode(3);
    const node1 = new ListNode(2);
    const node2 = new ListNode(0);
    const node3 = new ListNode(-4);
    node0.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node1;
    expect(detectCycle(node0)?.val).toBe(2);
});
