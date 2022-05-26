
def is_armstrong_number(number):
    """
    This function returns True if the given number is an Armstrong number.

    Args:
        number (int): The number

    Returns:
        bool: True if the given number is an Armstrong number
    """

    string = str(number)
    return number == sum(int(digit) ** len(string) for digit in string)



def find_armstrong_numbers(numbers):
    """
    This function returns all Armstrong numbers in the given list.

    Args:
        numbers (list): The list of numbers

    Returns:
        list[int]: List of Armstrong numbers
    """

    # return [num for num in numbers if is_armstrong_number(num)]


    result = list()

    for num in numbers:
        digits = [int(digit) for digit in str(num)]

        # digits = list()
        # for digit in str(num):
        #     digits.append(int(digit))

        if sum(digit ** len(digits) for digit in digits) == num:
            result.append(num)

    return result


find_armstrong_numbers([371])