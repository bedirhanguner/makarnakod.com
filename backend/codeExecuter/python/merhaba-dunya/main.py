import user_submitted_code
import known_correct
import unittest
from io import StringIO
from unittest.mock import patch
import random

def main():
	knownCorrectPrint = ""
	userSubmittedPrint = ""
	with patch('sys.stdout', new = StringIO()) as fake_out:
		known_correct.yazdir()
		knownCorrectPrint = fake_out.getvalue()
	with patch('sys.stdout', new = StringIO()) as fake_out:
		user_submitted_code.yazdir()
		userSubmittedPrint = fake_out.getvalue()
	if knownCorrectPrint != userSubmittedPrint:
		error = "{{FailedCase: {{TestNo: {0}, TestCase: {1}}}, ErrorType: 'valueDifference', InnerError: {{KnownCorrect: {2}, UserSubmitted: {3}}}}}".format(0, 0, knownCorrectPrint, userSubmittedPrint)
		raise SystemExit("<Error>" + error + "</Error>")

if __name__ == '__main__':
	main()