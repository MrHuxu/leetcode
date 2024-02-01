func divideArray(nums []int, k int) [][]int {
    ret := [][]int{}
    sort.Ints(nums)
    for i := 0; i < len(nums) / 3; i++ {
        left, right := 3 * i, 3 * i + 2
        if nums[right] - nums[left] > k {
            return nil
        }
        ret = append(ret, nums[left:right + 1])
    }
    return ret
}