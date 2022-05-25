import unittest

from armstrong_numbers import find_armstrong_numbers, is_armstrong_number


class TestArmstrongNumbers(unittest.TestCase):

    def test_is_armstrong_number(self):
        self.assertTrue(is_armstrong_number(0))
        self.assertTrue(is_armstrong_number(1))
        self.assertTrue(is_armstrong_number(153))
        self.assertTrue(is_armstrong_number(370))
        self.assertTrue(is_armstrong_number(371))
        self.assertTrue(is_armstrong_number(407))
        self.assertTrue(is_armstrong_number(9))
        self.assertFalse(is_armstrong_number(10))
        self.assertFalse(is_armstrong_number(11))
        self.assertFalse(is_armstrong_number(12))

    def test_find_armstrong_numbers(self):
        self.assertEqual(
            find_armstrong_numbers(list(range(0, 8))),
            [0, 1, 2, 3, 4, 5, 6, 7],
        )
        self.assertEqual(
            find_armstrong_numbers(list(range(0, 100))),
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        )
        self.assertEqual(
            find_armstrong_numbers(list(range(0, 999))),
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407],
        )


if __name__ == "__main__":
    unittest.main()
