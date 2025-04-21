✅ Basic Recursion Practice (Revise)
These are warm-ups but essential to gain confidence and speed.

1. Print numbers from 1 to N using recursion
   Test Cases:
   Input: N = 5 → Output: 1 2 3 4 5
   Input: N = 3 → Output: 1 2 3

2. Print numbers from N to 1 using recursion
   Test Cases:
   Input: N = 5 → Output: 5 4 3 2 1
   Input: N = 3 → Output: 3 2 1

3. Sum of first N natural numbers
   Test Cases:
   Input: N = 5 → Output: 15
   Input: N = 3 → Output: 6

4. Factorial of a number N
   Test Cases:
   Input: N = 5 → Output: 120
   Input: N = 3 → Output: 6

5. Fibonacci of N (0-based)
   Test Cases:
   Input: N = 5 → Output: 5
   Input: N = 7 → Output: 13

6. Check if number is palindrome (using recursion)
   Test Cases:
   Input: N = 121 → Output: true
   Input: N = 123 → Output: false

7. Sum of digits of N
   Test Cases:
   Input: 1234 → Output: 10
   Input: 567 → Output: 18

⚡ Moderate-Level Recursive Intuition Builders 8. Rope Cutting Problem (cut rope with a, b, c lengths, max pieces)
Test Cases:
Input: n=5, a=2, b=5, c=1 → Output: 5
Input: n=23, a=12, b=9, c=11 → Output: 2

9. Subsets of a given string/array
   Test Cases:
   Input: "abc" → Output: ["", "a", "b", "ab", "c", "ac", "bc", "abc"]
   Input: "xy" → Output: ["", "x", "y", "xy"]

10. Subset Sum Problem // Needs revision
    Find how many subsets sum to target.
    Test Cases:
    Input: arr=[1,2,3], sum=3 → Output: 2 ([1,2], [3])
    Input: arr=[2,3,5], sum=8 → Output: 1 ([3,5])

11. All Permutations of a string/array
    Test Cases:
    Input: "abc" → Output: All 6 permutations
    Input: "ab" → Output: "ab", "ba"

12. Generate all balanced parentheses (good question, revise approach)
    Test Cases:
    Input: n=2 → Output: ["(())", "()()"]
    Input: n=3 → Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

13. Count all paths in a NxM grid (Right or Down only)
    Test Cases:
    Input: n=2, m=2 → Output: 2
    Input: n=3, m=3 → Output: 6

14. Print all possible binary strings of length N (no two 1’s adjacent) (Good question, found answer but needed optimizsed approach)
    Test Cases:
    Input: n = 3 → Output: ["000", "001", "010", "100", "101"]
    Input: n = 2 → Output: ["00", "01", "10"]

15. Count ways to climb stairs (1 or 2 steps)
    Test Cases:
    Input: n = 4 → Output: 5
    Input: n = 3 → Output: 3

16. Tower of Hanoi (print moves) (Not doing this as solution not possible intuitively.)
    Test Cases:
    Input: n=2 → Output: 3 moves
    Input: n=3 → Output: 7 moves

17. Print all palindromic partitions of a string
    Test Cases:
    Input: "aab" → Output: [["a","a","b"],["aa","b"]]
    Input: "race" → Output: [["r","a","c","e"]]

18. Print all strings from keypad combinations
    E.g., like T9 keyboard: "23" → Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
    Test Cases:
    Input: "2" → Output: ["a", "b", "c"]
    Input: "23" → Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

19. All Dice Combinations to Sum N (Roll dice until you hit N)
    Test Cases:
    Input: N = 4 → Output: Ways to roll (e.g., 1+1+1+1, 2+2, etc.)
    Input: N = 3 → Output: Valid dice sequences

🔥 Advanced/Interview-Level 20. N-Queens Problem (place N queens on N×N board)
Test Cases:
Input: N = 4 → Output: All valid board arrangements
Input: N = 1 → Output: Single queen on single board

21. Sudoku Solver using recursion + backtracking
    Test with any partially filled grid
    Input: Grid with blanks
    Output: Completed Sudoku

22. Rat in a Maze (0: block, 1: path)
    Find all paths from top-left to bottom-right.
    Test Cases:
    Input:

csharp
Copy
Edit
[
[1, 0, 0],
[1, 1, 0],
[0, 1, 1]
]
→ Output: ["DDRDR", "DRDDR"]
Input: All 0s → Output: []

23. Word Break Problem (Check if word can be broken into valid dict words)
    Test Cases:
    Input: "applepenapple", dict = ["apple", "pen"] → Output: true
    Input: "catsandog", dict = ["cats", "dog", "sand", "and", "cat"] → Output: false

24. Josephus Problem (Elimination game, last person left)
    Test Cases:
    Input: n = 5, k = 2 → Output: 3
    Input: n = 7, k = 3 → Output: 4

25. K-th Symbol in Grammar
    Given nth row, find k-th symbol.
    Test Cases:
    Input: n = 4, k = 5 → Output: 1
    Input: n = 2, k = 2 → Output: 1

✅ What's Next?
If you master these 25 problems:

You’ll truly get recursion intuition — decision trees, backtracking, base conditions.

You’ll naturally step into recursion + DP, which unlocks hardcore DSA.
