function singleNonDuplicate(nums: number[]): number {
    if (nums.length === 1 || nums[0] !== nums[1]) return nums[0];
    if (nums[nums.length - 1] !== nums[nums.length - 2]) return nums[nums.length - 1];

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1])
            return nums[i];
    }
};