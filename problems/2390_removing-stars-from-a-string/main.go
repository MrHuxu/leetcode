package main

func removeStars(s string) string {
	var stack []byte
	for _, ch := range s {
		if ch == '*' && len(stack) > 0 {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, byte(ch))
		}
	}
	return string(stack)
}
