import user_submitted_code
import known_correct
import unittest

class TestFizzBuzz(unittest.TestCase):
	def test_case1(self):
		self.assertEqual(user_submitted_code.uc_bes(0), known_correct.uc_bes(0))
	def test_case2(self):
		self.assertEqual(user_submitted_code.uc_bes(1), known_correct.uc_bes(1))
	def test_case3(self):
		self.assertEqual(user_submitted_code.uc_bes(100), known_correct.uc_bes(100))
	# def test_case4(self):
	# 	self.assertEqual(user_submitted_code.fizzBuzz(10000), known_correct.fizzBuzz(10000))

if __name__ == '__main__':
	unittest.main()