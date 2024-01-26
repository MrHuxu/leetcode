import { ListNode, buildList } from './list';

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;

    while (lists.length > 1) {
        const nextLists: Array<ListNode | null> = [];
        for (let i = 0; i < lists.length; i += 2) {
            nextLists.push(i + 1 < lists.length ? merge(lists[i], lists[i + 1]) : lists[i]);
        }
        lists = nextLists;
    }
    return lists[0];
};

const merge = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    if (!l1) return l2;
    if (!l2) return l1;

    return l1.val < l2.val ? new ListNode(l1.val, merge(l1.next, l2)) : new ListNode(l2.val, merge(l1, l2.next));
}

test('23', () => {
    expect(mergeKLists([
        buildList([1, 4, 5]),
        buildList([1, 3, 4]),
        buildList([2, 6])
    ])).toStrictEqual(buildList([1, 1, 2, 3, 4, 4, 5, 6]));
    expect(mergeKLists([])).toStrictEqual(null);
    expect(mergeKLists([null])).toStrictEqual(null);
})