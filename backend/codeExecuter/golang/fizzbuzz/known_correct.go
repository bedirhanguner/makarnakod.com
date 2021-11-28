package main

import "strconv"

func KnownCorrectUcBes(n int) []string {
	var results = make([]string, n)
	for i := 1; i <= n; i++ {
		result := ""
		if i%3 == 0 {
			result += "üç"
		}
		if i%5 == 0 {
			result += "beş"
		}
		if result == "" {
			result = strconv.FormatInt(int64(i), 10)
		}
		results[i-1] = result
	}
	return results
}
