require './known_correct.rb'
require './user_submitted_code.rb'

testCases = [0,1,100]

for testCase in testCases
	if correctUcBes(testCase) != ucBes(testCase)
		raise "Arrays are not the same for input #{testCase}"
	end
end
