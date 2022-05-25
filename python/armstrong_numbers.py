# How can you make this more scalable and reusable later?

def is_armstrong_number(number):
    """
    This function returns True if the given number is an Armstrong number.

    Args:
        number (int): The number
        
    Returns:
        bool: True if the given number is an Armstrong number
    """

    return number == sum(int(digit) ** len(str(number)) for digit in str(number))


def find_armstrong_numbers(numbers):
    """
    This function returns all Armstrong numbers in the given list.

    Args:
        numbers (list): The list of numbers

    Returns:
        list[int]: List of Armstrong numbers
    """

    return [number for number in numbers if is_armstrong_number(number)]
