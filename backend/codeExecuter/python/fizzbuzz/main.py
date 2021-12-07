import user_submitted_code
import known_correct
import unittest
import random

TestCases = [
	0,1,3,10,100,1000,random.randint(1000, 10000)
]

def main():
	for index, testCase in enumerate(TestCases):
		known_correct_result = known_correct.uc_bes(testCase)
		user_submitted_result = user_submitted_code.uc_bes(testCase)
		if(len(known_correct_result) != len(user_submitted_result)):
			error = {"FailedCase": {"TestNo": index, "TestCase": testCase }, "ErrorType": "lenDifference", "InnerError": {"LengthOfKnownCorrect": len(known_correct_result), "LengthOfUserSubmitted": len(user_submitted_result)}}
			raise Exception("<Error>" + str(error) + "</Error>")
		for i in range(testCase):
			if(known_correct_result[i] != user_submitted_result[i]):
				errorArray = []
				correctArray = []
				if(len(user_submitted_result) < 4):
					errorArray += user_submitted_result[0:len(user_submitted_result)]
					correctArray += known_correct_result[0:len(known_correct_result)]
				else:
					errorArray += user_submitted_result[i-4:i+1]
					correctArray += known_correct_result[i-4:i+1]
				error = {"FailedCase": {"TestNo": index, "TestCase": testCase }, "ErrorType": "valueDifference", "InnerError": {"KnownCorrect": correctArray, "UserSubmitted": errorArray}}
				raise Exception("<Error>" + str(error) + "</Error>")
					
if __name__ == '__main__':
	main()