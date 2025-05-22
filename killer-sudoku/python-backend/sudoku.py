from itertools import combinations

def find_combinations_for_sum(target_sum):
    numbers = list(range(1, 10))
    results = []

    for r in range(1, len(numbers) + 1):
        for combo in combinations(numbers, r):
            if sum(combo) == target_sum:
                results.append(combo)

    return results

# User input
target = int(input("Enter the target sum: "))
combinations_found = find_combinations_for_sum(target)

# Output the results
if combinations_found:
    print(f"\nCombinations that sum to {target}:")
    for combo in combinations_found:
        print(" + ".join(map(str, combo)), "=", target)
else:
    print(f"\nNo combinations found that sum to {target}.")
