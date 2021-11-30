def correctUcBes(n)
	results = []
	1.upto n do |i|
		result = ""
		result += "Fizz" if i % 3 == 0
		result += "Buzz" if i % 5 == 0
		result = i.to_s if result == ""
		results[i-1] = result
	end
	return results
end