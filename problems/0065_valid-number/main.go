package main

func isNumber(s string) bool {
	var startIdx, endIdx int
	for ; startIdx < len(s); startIdx++ {
		if s[startIdx] != ' ' {
			break
		}
	}
	for endIdx = len(s) - 1; endIdx >= 0; endIdx-- {
		if s[endIdx] != ' ' {
			break
		}
	}

	if startIdx > endIdx {
		return false
	}
	s = s[startIdx : endIdx+1]

	var hasE bool
	var eIdx int
	for i := range s {
		if s[i] == 'e' || s[i] == 'E' {
			if hasE {
				return false
			}

			if !validateFirstPart(s[0:i]) {
				return false
			}

			hasE = true
			eIdx = i
			continue
		}

		if s[i] == '.' || s[i] == '+' || s[i] == '-' || (s[i] >= '0' && s[i] <= '9') {
			continue
		} else {
			return false
		}
	}

	if hasE {
		return validateSecondPart(s[eIdx+1 : len(s)])
	}
	return validateFirstPart(s)
}

func validateFirstPart(s string) bool {
	var hasNum, hasDot bool
	for i := range s {
		ch := s[i]

		switch {
		case ch == '+', ch == '-':
			if i != 0 {
				return false
			}

		case ch == '.':
			if hasDot {
				return false
			}
			hasDot = true

		case ch >= '0' && ch <= '9':
			hasNum = true

		default:
			return false
		}
	}

	return hasNum
}

func validateSecondPart(s string) bool {
	var hasNum bool
	for i := range s {
		ch := s[i]

		switch {
		case ch == '+', ch == '-':
			if i != 0 {
				return false
			}

		case ch >= '0' && ch <= '9':
			hasNum = true

		default:
			return false
		}
	}

	return hasNum
}
