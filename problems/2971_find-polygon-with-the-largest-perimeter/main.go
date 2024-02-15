func largestPerimeter(nums []int) int64 {
    sort.Ints(nums)
    ret, pre_sum := int64(-1), int64(0)
    for _, num := range nums {
        tmp := int64(num)
        if pre_sum > tmp {
            ret = pre_sum + tmp
        }
        pre_sum += tmp
    }
    return ret
}