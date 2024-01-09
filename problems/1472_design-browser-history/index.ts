class BrowserHistory {
    data: string[];
    pos: number;

    constructor(homepage: string) {
        this.data = [homepage];
        this.pos = 0;
    }

    visit(url: string): void {
        this.data = [...this.data.slice(0, ++this.pos), url];
    }

    back(steps: number): string {
        this.pos = this.pos - steps >= 0 ? this.pos - steps : 0;
        return this.data[this.pos];
    }

    forward(steps: number): string {
        this.pos = this.pos + steps < this.data.length ? this.pos + steps : this.data.length - 1;
        return this.data[this.pos];
    }
}

var browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
console.log(browserHistory.back(1));                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(browserHistory.back(1));                   // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1));                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2));                // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2));                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(browserHistory.back(7));                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */