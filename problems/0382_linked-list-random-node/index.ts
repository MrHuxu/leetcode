class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class Solution {
    len: number
    used: number
    head: ListNode | null

    constructor(head: ListNode | null) {
        this.used = 0;
        this.head = head;

        this.len = 0;
        let tmp = head;
        while (tmp) {
            this.len++;
            tmp = tmp.next;
        }
    }

    getRandom(): number {
        let num = 0;
        while (true) {
            num = Math.floor(Math.random() * 10000);
            if ((this.used ^ num) !== 0) {
                this.used = this.used | num;
                break;
            }
        }

        let tmp: ListNode = this.head!;
        for (let i = 0; i < num % this.len; i++) {
            tmp = tmp.next!;
        }
        return tmp?.val;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

const obj = new Solution(new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(3)
    )
));

console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());