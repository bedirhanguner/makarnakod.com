require './known_correct.rb'
require './user_submitted_code.rb'

testCases = [
	0,1,3,10,100,1000,rand(1000..10000)
]

testCases.each_with_index do |testCase, index|
	known_correct_result = correctUcBes(testCase)
	user_submitted_result = ucBes(testCase)
	if(known_correct_result.length() != user_submitted_result.length())
		error = "{FailedCase: {TestNo: #{index}, TestCase: #{testCase}}, ErrorType: 'lenDifference', InnerError: {LengthOfKnownCorrect: #{known_correct_result.length()}, LengthOfUserSubmitted: #{user_submitted_result.length()}}}"
		raise ("<Error>" + error.to_s + "</Error>")
	end
	(0..testCase).each do |i|
		if(known_correct_result[i] != user_submitted_result[i])
			errorArray = []
			correctArray = []
			if(user_submitted_result.length() < 4)
				errorArray += user_submitted_result[0..user_submitted_result.length()]
				correctArray += known_correct_result[0..known_correct_result.length()]
			else
				errorArray += user_submitted_result[i-4..i+1]
				correctArray += known_correct_result[i-4..i+1]
			end
			error = "{FailedCase: {TestNo: #{index}, TestCase: #{testCase}}, ErrorType: 'valueDifference', InnerError: {KnownCorrect: #{correctArray}, UserSubmitted: #{errorArray}}}"
			raise ("<Error>" + error.to_s + "</Error>")
		end
	end
end