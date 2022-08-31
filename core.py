import random


def generate_guess() -> int:
	return random.randrange(0, 100)


def evaluate_guess(actual: int, expected: int) -> int:
	if actual == expected:
		return 0
	elif actual < expected:
		return 1
	else:
		return 2