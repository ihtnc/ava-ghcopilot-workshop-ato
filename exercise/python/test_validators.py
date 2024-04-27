import unittest
from validators import check_url, check_email, check_phone

class TestValidators(unittest.TestCase):

    def test_check_url(self):
        self.assertTrue(check_url('https://www.example.com'))
        self.assertTrue(check_url('http://example.com'))
        self.assertFalse(check_url('www.example.com'))
        self.assertFalse(check_url('example'))

    def test_check_email(self):
        self.assertTrue(check_email('test@example.com'))
        self.assertFalse(check_email('test@example'))
        self.assertFalse(check_email('test@.com'))
        self.assertFalse(check_email('test'))

    def test_check_phone(self):
        self.assertTrue(check_phone('(+61) 123-4567'))
        self.assertTrue(check_phone('0412345678'))
        self.assertFalse(check_phone('123-4567'))
        self.assertFalse(check_phone('04123456789'))  # 11 digits
        self.assertTrue(check_phone('041234567'))  # 9 digits

if __name__ == '__main__':
    unittest.main()