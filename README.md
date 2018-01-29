# My LeetCode

[![Build Status](https://www.travis-ci.org/MrHuxu/leetcode.svg?branch=master)](https://www.travis-ci.org/MrHuxu/leetcode)

## Description
This is the repo of my LeetCode solutions, and currently I just use JavaScript to solve the questions, maybe in the future, I will use other languages I like to get the ALL PASS grade.

## Features

First of all, you need to install all dependencis:

    npm i

### Fetch Problems in Terminal

By executing the command you can browse all the problems in your terminal, and select any one to solve.

    npm run fetch-question

![](https://raw.githubusercontent.com/MrHuxu/img-repo/master/leetcode/leetcode%20fetch%20question.gif)

### Test Cases

I've used [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) to test the programs, the test cases are defined in the `problems/*/test-cases.js`:

    npm test                    # test all test cases
    npm test [problem number]   # test single problem

![](https://raw.githubusercontent.com/MrHuxu/img-repo/master/leetcode/leetcode%20test.gif)

## Submissions

| Sequence | Title | Difficulty | Submission |
| - | :- | :-: | :- |
| 1 | [Two Sum][1] | Easy | [001_two-sum][2] |
| 2 | [Add Two Numbers][3] | Medium | [002_add-two-numbers][4] |
| 3 | [Longest Substring Without Repeating Characters][5] | Medium | [003_longest-substring-without-repeating-characters][6] |
| 5 | [Longest Palindromic Substring][9] | Medium | [005_longest-palindromic-substring][10] |
| 6 | [ZigZag Conversion][11] | Medium | [006_zigzag-conversion][12] |
| 7 | [Reverse Integer][13] | Easy | [007_reverse-integer][14] |
| 8 | [String to Integer (atoi)][15] | Medium | [008_string-to-integer-atoi][16] |
| 9 | [Palindrome Number][17] | Easy | [009_palindrome-number][18] |
| 10 | [Regular Expression Matching][19] | Hard | [010_regular-expression-matching][20] |
| 11 | [Container With Most Water][21] | Medium | [011_container-with-most-water][22] |
| 12 | [Integer to Roman][23] | Medium | [012_integer-to-roman][24] |
| 13 | [Roman to Integer][25] | Easy | [013_roman-to-integer][26] |
| 14 | [Longest Common Prefix][27] | Easy | [014_longest-common-prefix][28] |
| 15 | [3Sum][29] | Medium | [015_3sum][30] |
| 16 | [3Sum Closest][31] | Medium | [016_3sum-closest][32] |
| 17 | [Letter Combinations of a Phone Number][33] | Medium | [017_letter-combinations-of-a-phone-number][34] |
| 18 | [4Sum][35] | Medium | [018_4sum][36] |
| 19 | [Remove Nth Node From End of List][37] | Medium | [019_remove-nth-node-from-end-of-list][38] |
| 20 | [Valid Parentheses][39] | Easy | [020_valid-parentheses][40] |
| 21 | [Merge Two Sorted Lists][41] | Easy | [021_merge-two-sorted-lists][42] |
| 22 | [Generate Parentheses][43] | Medium | [022_generate-parentheses][44] |
| 23 | [Merge k Sorted Lists][45] | Hard | [023_merge-k-sorted-lists][46] |
| 24 | [Swap Nodes in Pairs][47] | Medium | [024_swap-nodes-in-pairs][48] |
| 26 | [Remove Duplicates from Sorted Array][51] | Easy | [026_remove-duplicates-from-sorted-array][52] |
| 27 | [Remove Element][53] | Easy | [027_remove-element][54] |
| 28 | [Implement strStr()][55] | Easy | [028_implement-strstr][56] |
| 29 | [Divide Two Integers][57] | Medium | [029_divide-two-integers][58] |
| 34 | [Search for a Range][67] | Medium | [034_search-for-a-range][68] |
| 35 | [Search Insert Position][69] | Easy | [035_search-insert-position][70] |
| 38 | [Count and Say][75] | Easy | [038_count-and-say][76] |
| 39 | [Combination Sum][77] | Medium | [039_combination-sum][78] |
| 41 | [First Missing Positive][81] | Hard | [041_first-missing-positive][82] |
| 43 | [Multiply Strings][85] | Medium | [043_multiply-strings][86] |
| 46 | [Permutations][91] | Medium | [046_permutations][92] |
| 48 | [Rotate Image][95] | Medium | [048_rotate-image][96] |
| 49 | [Group Anagrams][97] | Medium | [049_group-anagrams][98] |
| 53 | [Maximum Subarray][105] | Easy | [053_maximum-subarray][106] |
| 54 | [Spiral Matrix][107] | Medium | [054_spiral-matrix][108] |
| 55 | [Jump Game][109] | Medium | [055_jump-game][110] |
| 56 | [Merge Intervals][111] | Medium | [056_merge-intervals][112] |
| 58 | [Length of Last Word][115] | Easy | [058_length-of-last-word][116] |
| 59 | [Spiral Matrix II][117] | Medium | [059_spiral-matrix-ii][118] |
| 60 | [Permutation Sequence][119] | Medium | [060_permutation-sequence][120] |
| 61 | [Rotate List][121] | Medium | [061_rotate-list][122] |
| 62 | [Unique Paths][123] | Medium | [062_unique-paths][124] |
| 63 | [Unique Paths II][125] | Medium | [063_unique-paths-ii][126] |
| 64 | [Minimum Path Sum][127] | Medium | [064_minimum-path-sum][128] |
| 66 | [Plus One][131] | Easy | [066_plus-one][132] |
| 67 | [Add Binary][133] | Easy | [067_add-binary][134] |
| 68 | [Text Justification][135] | Hard | [068_text-justification][136] |
| 69 | [Sqrt(x)][137] | Easy | [069_sqrtx][138] |
| 71 | [Simplify Path][141] | Medium | [071_simplify-path][142] |
| 73 | [Set Matrix Zeroes][145] | Medium | [073_set-matrix-zeroes][146] |
| 75 | [Sort Colors][149] | Medium | [075_sort-colors][150] |
| 77 | [Combinations][153] | Medium | [077_combinations][154] |
| 78 | [Subsets][155] | Medium | [078_subsets][156] |
| 79 | [Word Search][157] | Medium | [079_word-search][158] |
| 80 | [Remove Duplicates from Sorted Array II][159] | Medium | [080_remove-duplicates-from-sorted-array-ii][160] |
| 83 | [Remove Duplicates from Sorted List][165] | Easy | [083_remove-duplicates-from-sorted-list][166] |
| 86 | [Partition List][171] | Medium | [086_partition-list][172] |
| 88 | [Merge Sorted Array][175] | Easy | [088_merge-sorted-array][176] |
| 89 | [Gray Code][177] | Medium | [089_gray-code][178] |
| 90 | [Subsets II][179] | Medium | [090_subsets-ii][180] |
| 91 | [Decode Ways][181] | Medium | [091_decode-ways][182] |
| 92 | [Reverse Linked List II][183] | Medium | [092_reverse-linked-list-ii][184] |
| 93 | [Restore IP Addresses][185] | Medium | [093_restore-ip-addresses][186] |
| 94 | [Binary Tree Inorder Traversal][187] | Medium | [094_binary-tree-inorder-traversal][188] |
| 95 | [Unique Binary Search Trees II][189] | Medium | [095_unique-binary-search-trees-ii][190] |
| 96 | [Unique Binary Search Trees][191] | Medium | [096_unique-binary-search-trees][192] |
| 98 | [Validate Binary Search Tree][195] | Medium | [098_validate-binary-search-tree][196] |
| 100 | [Same Tree][199] | Easy | [100_same-tree][200] |
| 101 | [Symmetric Tree][201] | Easy | [101_symmetric-tree][202] |
| 102 | [Binary Tree Level Order Traversal][203] | Medium | [102_binary-tree-level-order-traversal][204] |
| 103 | [Binary Tree Zigzag Level Order Traversal][205] | Medium | [103_binary-tree-zigzag-level-order-traversal][206] |
| 104 | [Maximum Depth of Binary Tree][207] | Easy | [104_maximum-depth-of-binary-tree][208] |
| 105 | [Construct Binary Tree from Preorder and Inorder Traversal][209] | Medium | [105_construct-binary-tree-from-preorder-and-inorder-traversal][210] |
| 106 | [Construct Binary Tree from Inorder and Postorder Traversal][211] | Medium | [106_construct-binary-tree-from-inorder-and-postorder-traversal][212] |
| 107 | [Binary Tree Level Order Traversal II][213] | Easy | [107_binary-tree-level-order-traversal-ii][214] |
| 110 | [Balanced Binary Tree][219] | Easy | [110_balanced-binary-tree][220] |
| 111 | [Minimum Depth of Binary Tree][221] | Easy | [111_minimum-depth-of-binary-tree][222] |
| 112 | [Path Sum][223] | Easy | [112_path-sum][224] |
| 113 | [Path Sum II][225] | Medium | [113_path-sum-ii][226] |
| 114 | [Flatten Binary Tree to Linked List][227] | Medium | [114_flatten-binary-tree-to-linked-list][228] |
| 116 | [Populating Next Right Pointers in Each Node][231] | Medium | [116_populating-next-right-pointers-in-each-node][232] |
| 118 | [Pascal's Triangle][235] | Easy | [118_pascals-triangle][236] |
| 119 | [Pascal's Triangle II][237] | Easy | [119_pascals-triangle-ii][238] |
| 120 | [Triangle][239] | Medium | [120_triangle][240] |
| 121 | [Best Time to Buy and Sell Stock][241] | Easy | [121_best-time-to-buy-and-sell-stock][242] |
| 122 | [Best Time to Buy and Sell Stock II][243] | Easy | [122_best-time-to-buy-and-sell-stock-ii][244] |
| 125 | [Valid Palindrome][249] | Easy | [125_valid-palindrome][250] |
| 129 | [Sum Root to Leaf Numbers][257] | Medium | [129_sum-root-to-leaf-numbers][258] |
| 130 | [Surrounded Regions][259] | Medium | [130_surrounded-regions][260] |
| 131 | [Palindrome Partitioning][261] | Medium | [131_palindrome-partitioning][262] |
| 134 | [Gas Station][267] | Medium | [134_gas-station][268] |
| 136 | [Single Number][271] | Easy | [136_single-number][272] |
| 137 | [Single Number II][273] | Medium | [137_single-number-ii][274] |
| 139 | [Word Break][277] | Medium | [139_word-break][278] |
| 141 | [Linked List Cycle][281] | Easy | [141_linked-list-cycle][282] |
| 142 | [Linked List Cycle II][283] | Medium | [142_linked-list-cycle-ii][284] |
| 143 | [Reorder List][285] | Medium | [143_reorder-list][286] |
| 144 | [Binary Tree Preorder Traversal][287] | Medium | [144_binary-tree-preorder-traversal][288] |
| 145 | [Binary Tree Postorder Traversal][289] | Hard | [145_binary-tree-postorder-traversal][290] |
| 147 | [Insertion Sort List][293] | Medium | [147_insertion-sort-list][294] |
| 150 | [Evaluate Reverse Polish Notation][299] | Medium | [150_evaluate-reverse-polish-notation][300] |
| 151 | [Reverse Words in a String][301] | Medium | [151_reverse-words-in-a-string][302] |
| 152 | [Maximum Product Subarray][303] | Medium | [152_maximum-product-subarray][304] |
| 153 | [Find Minimum in Rotated Sorted Array][305] | Medium | [153_find-minimum-in-rotated-sorted-array][306] |
| 155 | [Min Stack][309] | Easy | [155_min-stack][310] |
| 158 | [Read N Characters Given Read4 II - Call multiple times][315] | Hard | [158_read-n-characters-given-read4-ii-call-multiple-times][316] |
| 160 | [Intersection of Two Linked Lists][319] | Easy | [160_intersection-of-two-linked-lists][320] |
| 162 | [Find Peak Element][323] | Medium | [162_find-peak-element][324] |
| 165 | [Compare Version Numbers][329] | Medium | [165_compare-version-numbers][330] |
| 169 | [Majority Element][337] | Easy | [169_majority-element][338] |
| 171 | [Excel Sheet Column Number][341] | Easy | [171_excel-sheet-column-number][342] |
| 172 | [Factorial Trailing Zeroes][343] | Easy | [172_factorial-trailing-zeroes][344] |
| 179 | [Largest Number][357] | Medium | [179_largest-number][358] |
| 187 | [Repeated DNA Sequences][373] | Medium | [187_repeated-dna-sequences][374] |
| 189 | [Rotate Array][377] | Easy | [189_rotate-array][378] |
| 190 | [Reverse Bits][379] | Easy | [190_reverse-bits][380] |
| 191 | [Number of 1 Bits][381] | Easy | [191_number-of-1-bits][382] |
| 198 | [House Robber][395] | Easy | [198_house-robber][396] |
| 199 | [Binary Tree Right Side View][397] | Medium | [199_binary-tree-right-side-view][398] |
| 200 | [Number of Islands][399] | Medium | [200_number-of-islands][400] |
| 201 | [Bitwise AND of Numbers Range][401] | Medium | [201_bitwise-and-of-numbers-range][402] |
| 202 | [Happy Number][403] | Easy | [202_happy-number][404] |
| 203 | [Remove Linked List Elements][405] | Easy | [203_remove-linked-list-elements][406] |
| 204 | [Count Primes][407] | Easy | [204_count-primes][408] |
| 205 | [Isomorphic Strings][409] | Easy | [205_isomorphic-strings][410] |
| 206 | [Reverse Linked List][411] | Easy | [206_reverse-linked-list][412] |
| 207 | [Course Schedule][413] | Medium | [207_course-schedule][414] |
| 209 | [Minimum Size Subarray Sum][417] | Medium | [209_minimum-size-subarray-sum][418] |
| 215 | [Kth Largest Element in an Array][429] | Medium | [215_kth-largest-element-in-an-array][430] |
| 216 | [Combination Sum III][431] | Medium | [216_combination-sum-iii][432] |
| 217 | [Contains Duplicate][433] | Easy | [217_contains-duplicate][434] |
| 219 | [Contains Duplicate II][437] | Easy | [219_contains-duplicate-ii][438] |
| 220 | [Contains Duplicate III][439] | Medium | [220_contains-duplicate-iii][440] |
| 221 | [Maximal Square][441] | Medium | [221_maximal-square][442] |
| 223 | [Rectangle Area][445] | Medium | [223_rectangle-area][446] |
| 224 | [Basic Calculator][447] | Hard | [224_basic-calculator][448] |
| 226 | [Invert Binary Tree][451] | Easy | [226_invert-binary-tree][452] |
| 227 | [Basic Calculator II][453] | Medium | [227_basic-calculator-ii][454] |
| 228 | [Summary Ranges][455] | Medium | [228_summary-ranges][456] |
| 229 | [Majority Element II][457] | Medium | [229_majority-element-ii][458] |
| 231 | [Power of Two][461] | Easy | [231_power-of-two][462] |
| 234 | [Palindrome Linked List][467] | Easy | [234_palindrome-linked-list][468] |
| 235 | [Lowest Common Ancestor of a Binary Search Tree][469] | Easy | [235_lowest-common-ancestor-of-a-binary-search-tree][470] |
| 237 | [Delete Node in a Linked List][473] | Easy | [237_delete-node-in-a-linked-list][474] |
| 238 | [Product of Array Except Self][475] | Medium | [238_product-of-array-except-self][476] |
| 240 | [Search a 2D Matrix II][479] | Medium | [240_search-a-2d-matrix-ii][480] |
| 242 | [Valid Anagram][483] | Easy | [242_valid-anagram][484] |
| 257 | [Binary Tree Paths][513] | Easy | [257_binary-tree-paths][514] |
| 258 | [Add Digits][515] | Easy | [258_add-digits][516] |
| 263 | [Ugly Number][525] | Easy | [263_ugly-number][526] |
| 264 | [Ugly Number II][527] | Medium | [264_ugly-number-ii][528] |
| 268 | [Missing Number][535] | Easy | [268_missing-number][536] |
| 274 | [H-Index][547] | Medium | [274_h-index][548] |
| 275 | [H-Index II][549] | Medium | [275_h-index-ii][550] |
| 278 | [First Bad Version][555] | Easy | [278_first-bad-version][556] |
| 279 | [Perfect Squares][557] | Medium | [279_perfect-squares][558] |
| 283 | [Move Zeroes][565] | Easy | [283_move-zeroes][566] |
| 289 | [Game of Life][577] | Medium | [289_game-of-life][578] |
| 290 | [Word Pattern][579] | Easy | [290_word-pattern][580] |
| 292 | [Nim Game][583] | Easy | [292_nim-game][584] |
| 299 | [Bulls and Cows][597] | Medium | [299_bulls-and-cows][598] |
| 300 | [Longest Increasing Subsequence][599] | Medium | [300_longest-increasing-subsequence][600] |
| 303 | [Range Sum Query - Immutable][605] | Easy | [303_range-sum-query-immutable][606] |
| 304 | [Range Sum Query 2D - Immutable][607] | Medium | [304_range-sum-query-2d-immutable][608] |
| 306 | [Additive Number][611] | Medium | [306_additive-number][612] |
| 307 | [Range Sum Query - Mutable][613] | Medium | [307_range-sum-query-mutable][614] |
| 318 | [Maximum Product of Word Lengths][635] | Medium | [318_maximum-product-of-word-lengths][636] |
| 322 | [Coin Change][643] | Medium | [322_coin-change][644] |
| 326 | [Power of Three][651] | Easy | [326_power-of-three][652] |
| 328 | [Odd Even Linked List][655] | Medium | [328_odd-even-linked-list][656] |
| 332 | [Reconstruct Itinerary][663] | Medium | [332_reconstruct-itinerary][664] |
| 334 | [Increasing Triplet Subsequence][667] | Medium | [334_increasing-triplet-subsequence][668] |
| 336 | [Palindrome Pairs][671] | Hard | [336_palindrome-pairs][672] |
| 338 | [Counting Bits][675] | Medium | [338_counting-bits][676] |
| 343 | [Integer Break][685] | Medium | [343_integer-break][686] |
| 344 | [Reverse String][687] | Easy | [344_reverse-string][688] |
| 345 | [Reverse Vowels of a String][689] | Easy | [345_reverse-vowels-of-a-string][690] |
| 347 | [Top K Frequent Elements][693] | Medium | [347_top-k-frequent-elements][694] |
| 349 | [Intersection of Two Arrays][697] | Easy | [349_intersection-of-two-arrays][698] |
| 350 | [Intersection of Two Arrays II][699] | Easy | [350_intersection-of-two-arrays-ii][700] |
| 367 | [Valid Perfect Square][733] | Easy | [367_valid-perfect-square][734] |
| 368 | [Largest Divisible Subset][735] | Medium | [368_largest-divisible-subset][736] |
| 378 | [Kth Smallest Element in a Sorted Matrix][755] | Medium | [378_kth-smallest-element-in-a-sorted-matrix][756] |
| 383 | [Ransom Note][765] | Easy | [383_ransom-note][766] |
| 386 | [Lexicographical Numbers][771] | Medium | [386_lexicographical-numbers][772] |
| 387 | [First Unique Character in a String][773] | Easy | [387_first-unique-character-in-a-string][774] |
| 388 | [Longest Absolute File Path][775] | Medium | [388_longest-absolute-file-path][776] |
| 389 | [Find the Difference][777] | Easy | [389_find-the-difference][778] |
| 392 | [Is Subsequence][783] | Medium | [392_is-subsequence][784] |
| 394 | [Decode String][787] | Medium | [394_decode-string][788] |
| 397 | [Integer Replacement][793] | Medium | [397_integer-replacement][794] |
| 399 | [Evaluate Division][797] | Medium | [399_evaluate-division][798] |
| 401 | [Binary Watch][801] | Easy | [401_binary-watch][802] |
| 404 | [Sum of Left Leaves][807] | Easy | [404_sum-of-left-leaves][808] |
| 405 | [Convert a Number to Hexadecimal][809] | Easy | [405_convert-a-number-to-hexadecimal][810] |
| 406 | [Queue Reconstruction by Height][811] | Medium | [406_queue-reconstruction-by-height][812] |
| 409 | [Longest Palindrome][817] | Easy | [409_longest-palindrome][818] |
| 412 | [Fizz Buzz][823] | Easy | [412_fizz-buzz][824] |
| 413 | [Arithmetic Slices][825] | Medium | [413_arithmetic-slices][826] |
| 415 | [Add Strings][829] | Easy | [415_add-strings][830] |
| 416 | [Partition Equal Subset Sum][831] | Medium | [416_partition-equal-subset-sum][832] |
| 417 | [Pacific Atlantic Water Flow][833] | Medium | [417_pacific-atlantic-water-flow][834] |
| 419 | [Battleships in a Board][837] | Medium | [419_battleships-in-a-board][838] |
| 423 | [Reconstruct Original Digits from English][845] | Medium | [423_reconstruct-original-digits-from-english][846] |
| 434 | [Number of Segments in a String][867] | Easy | [434_number-of-segments-in-a-string][868] |
| 438 | [Find All Anagrams in a String][875] | Easy | [438_find-all-anagrams-in-a-string][876] |
| 441 | [Arranging Coins][881] | Easy | [441_arranging-coins][882] |
| 442 | [Find All Duplicates in an Array][883] | Medium | [442_find-all-duplicates-in-an-array][884] |
| 453 | [Minimum Moves to Equal Array Elements][905] | Easy | [453_minimum-moves-to-equal-array-elements][906] |
| 485 | [Max Consecutive Ones][969] | Easy | [485_max-consecutive-ones][970] |
| 492 | [Construct the Rectangle][983] | Easy | [492_construct-the-rectangle][984] |
| 494 | [Target Sum][987] | Medium | [494_target-sum][988] |
| 496 | [Next Greater Element I][991] | Easy | [496_next-greater-element-i][992] |
| 506 | [Relative Ranks][1011] | Easy | [506_relative-ranks][1012] |
| 508 | [Most Frequent Subtree Sum][1015] | Medium | [508_most-frequent-subtree-sum][1016] |
| 513 | [Find Bottom Left Tree Value][1025] | Medium | [513_find-bottom-left-tree-value][1026] |
| 515 | [Find Largest Value in Each Tree Row][1029] | Medium | [515_find-largest-value-in-each-tree-row][1030] |
| 520 | [Detect Capital][1039] | Easy | [520_detect-capital][1040] |
| 529 | [Minesweeper][1057] | Medium | [529_minesweeper][1058] |
| 530 | [Minimum Absolute Difference in BST][1059] | Easy | [530_minimum-absolute-difference-in-bst][1060] |
| 538 | [Convert BST to Greater Tree][1075] | Easy | [538_convert-bst-to-greater-tree][1076] |
| 539 | [Minimum Time Difference][1077] | Medium | [539_minimum-time-difference][1078] |
| 542 | [01 Matrix][1083] | Medium | [542_01-matrix][1084] |
| 560 | [Subarray Sum Equals K][1119] | Medium | [560_subarray-sum-equals-k][1120] |
| 561 | [Array Partition I][1121] | Easy | [561_array-partition-i][1122] |
| 563 | [Binary Tree Tilt][1125] | Easy | [563_binary-tree-tilt][1126] |
| 566 | [Reshape the Matrix][1131] | Easy | [566_reshape-the-matrix][1132] |
| 567 | [Permutation in String][1133] | Medium | [567_permutation-in-string][1134] |
| 581 | [Shortest Unsorted Continuous Subarray][1161] | Easy | [581_shortest-unsorted-continuous-subarray][1162] |
| 592 | [Fraction Addition and Subtraction][1183] | Medium | [592_fraction-addition-and-subtraction][1184] |
| 593 | [Valid Square][1185] | Medium | [593_valid-square][1186] |
| 594 | [Longest Harmonious Subsequence][1187] | Easy | [594_longest-harmonious-subsequence][1188] |
| 617 | [Merge Two Binary Trees][1233] | Easy | [617_merge-two-binary-trees][1234] |
| 621 | [Task Scheduler][1241] | Medium | [621_task-scheduler][1242] |
| 633 | [Sum of Square Numbers][1265] | Easy | [633_sum-of-square-numbers][1266] |
| 637 | [Average of Levels in Binary Tree][1273] | Easy | [637_average-of-levels-in-binary-tree][1274] |
| 640 | [Solve the Equation][1279] | Medium | [640_solve-the-equation][1280] |
| 646 | [Maximum Length of Pair Chain][1291] | Medium | [646_maximum-length-of-pair-chain][1292] |
| 647 | [Palindromic Substrings][1293] | Medium | [647_palindromic-substrings][1294] |
| 648 | [Replace Words][1295] | Medium | [648_replace-words][1296] |
| 650 | [2 Keys Keyboard][1299] | Medium | [650_2-keys-keyboard][1300] |
| 653 | [Two Sum IV - Input is a BST][1305] | Easy | [653_two-sum-iv-input-is-a-bst][1306] |
| 654 | [Maximum Binary Tree][1307] | Medium | [654_maximum-binary-tree][1308] |
| 655 | [Print Binary Tree][1309] | Medium | [655_print-binary-tree][1310] |
| 657 | [Judge Route Circle][1313] | Easy | [657_judge-route-circle][1314] |
| 659 | [Split Array into Consecutive Subsequences][1317] | Medium | [659_split-array-into-consecutive-subsequences][1318] |
| 661 | [Image Smoother][1321] | Easy | [661_image-smoother][1322] |
| 662 | [Maximum Width of Binary Tree][1323] | Medium | [662_maximum-width-of-binary-tree][1324] |
| 665 | [Non-decreasing Array][1329] | Easy | [665_non-decreasing-array][1330] |
| 667 | [Beautiful Arrangement II][1333] | Medium | [667_beautiful-arrangement-ii][1334] |
| 669 | [Trim a Binary Search Tree][1337] | Easy | [669_trim-a-binary-search-tree][1338] |
| 670 | [Maximum Swap][1339] | Medium | [670_maximum-swap][1340] |
| 671 | [Second Minimum Node In a Binary Tree][1341] | Easy | [671_second-minimum-node-in-a-binary-tree][1342] |
| 673 | [Number of Longest Increasing Subsequence][1345] | Medium | [673_number-of-longest-increasing-subsequence][1346] |
| 674 | [Longest Continuous Increasing Subsequence][1347] | Easy | [674_longest-continuous-increasing-subsequence][1348] |
| 676 | [Implement Magic Dictionary][1351] | Medium | [676_implement-magic-dictionary][1352] |
| 677 | [Map Sum Pairs][1353] | Medium | [677_map-sum-pairs][1354] |
| 678 | [Valid Parenthesis String][1355] | Medium | [678_valid-parenthesis-string][1356] |
| 680 | [Valid Palindrome II][1359] | Easy | [680_valid-palindrome-ii][1360] |
| 682 | [Baseball Game][1363] | Easy | [682_baseball-game][1364] |
| 684 | [Redundant Connection][1367] | Medium | [684_redundant-connection][1368] |
| 686 | [Repeated String Match][1371] | Easy | [686_repeated-string-match][1372] |
| 687 | [Longest Univalue Path][1373] | Easy | [687_longest-univalue-path][1374] |
| 692 | [Top K Frequent Words][1383] | Medium | [692_top-k-frequent-words][1384] |
| 693 | [Binary Number with Alternating Bits][1385] | Easy | [693_binary-number-with-alternating-bits][1386] |
| 695 | [Max Area of Island][1389] | Easy | [695_max-area-of-island][1390] |
| 696 | [Count Binary Substrings][1391] | Easy | [696_count-binary-substrings][1392] |
| 697 | [Degree of an Array][1393] | Easy | [697_degree-of-an-array][1394] |
| 698 | [Partition to K Equal Sum Subsets][1395] | Medium | [698_partition-to-k-equal-sum-subsets][1396] |
| 712 | [Minimum ASCII Delete Sum for Two Strings][1423] | Medium | [712_minimum-ascii-delete-sum-for-two-strings][1424] |
| 713 | [Subarray Product Less Than K][1425] | Medium | [713_subarray-product-less-than-k][1426] |
| 714 | [Best Time to Buy and Sell Stock with Transaction Fee][1427] | Medium | [714_best-time-to-buy-and-sell-stock-with-transaction-fee][1428] |
| 717 | [1-bit and 2-bit Characters][1433] | Easy | [717_1-bit-and-2-bit-characters][1434] |
| 718 | [Maximum Length of Repeated Subarray][1435] | Medium | [718_maximum-length-of-repeated-subarray][1436] |
| 720 | [Longest Word in Dictionary][1439] | Easy | [720_longest-word-in-dictionary][1440] |
| 721 | [Accounts Merge][1441] | Medium | [721_accounts-merge][1442] |
| 722 | [Remove Comments][1443] | Medium | [722_remove-comments][1444] |
| 724 | [Find Pivot Index][1447] | Easy | [724_find-pivot-index][1448] |
| 726 | [Number of Atoms][1451] | Hard | [726_number-of-atoms][1452] |
| 728 | [Self Dividing Numbers][1455] | Easy | [728_self-dividing-numbers][1456] |
| 734 | [Sentence Similarity][1467] | Easy | [734_sentence-similarity][1468] |
| 735 | [Asteroid Collision][1469] | Medium | [735_asteroid-collision][1470] |
| 739 | [Daily Temperatures][1477] | Medium | [739_daily-temperatures][1478] |
| 740 | [Delete and Earn][1479] | Medium | [740_delete-and-earn][1480] |
| 742 | [Closest Leaf in a Binary Tree][1483] | Medium | [742_closest-leaf-in-a-binary-tree][1484] |
| 743 | [Network Delay Time][1485] | Medium | [743_network-delay-time][1486] |
| 744 | [Find Smallest Letter Greater Than Target][1487] | Easy | [744_find-smallest-letter-greater-than-target][1488] |
| 746 | [Min Cost Climbing Stairs][1491] | Easy | [746_min-cost-climbing-stairs][1492] |
| 747 | [Largest Number At Least Twice of Others][1493] | Easy | [747_largest-number-at-least-twice-of-others][1494] |
| 748 | [Shortest Completing Word][1495] | Medium | [748_shortest-completing-word][1496] |
| 752 | [Open the Lock][1503] | Medium | [752_open-the-lock][1504] |
| 754 | [Reach a Number][1507] | Medium | [754_reach-a-number][1508] |
| 756 | [Pyramid Transition Matrix][1511] | Medium | [756_pyramid-transition-matrix][1512] |
| 760 | [Find Anagram Mappings][1519] | Easy | [760_find-anagram-mappings][1520] |
| 762 | [Prime Number of Set Bits in Binary Representation][1523] | Easy | [762_prime-number-of-set-bits-in-binary-representation][1524] |
| 763 | [Partition Labels][1525] | Medium | [763_partition-labels][1526] |
| 764 | [Largest Plus Sign][1527] | Medium | [764_largest-plus-sign][1528] |
| 766 | [Toeplitz Matrix][1531] | Easy | [766_toeplitz-matrix][1532] |
| 767 | [Reorganize String][1533] | Medium | [767_reorganize-string][1534] |
| 769 | [Max Chunks To Make Sorted][1537] | Medium | [769_max-chunks-to-make-sorted][1538] |
| 771 | [Jewels and Stones][1541] | Easy | [771_jewels-and-stones][1542] |
| 775 | [Global and Local Inversions][1549] | Medium | [775_global-and-local-inversions][1550] |

[1]: https://leetcode.com/problems/two-sum/
[2]: https://github.com/MrHuxu/leetcode/blob/master/problems/001_two-sum/index.js
[3]: https://leetcode.com/problems/add-two-numbers/
[4]: https://github.com/MrHuxu/leetcode/blob/master/problems/002_add-two-numbers/index.js
[5]: https://leetcode.com/problems/longest-substring-without-repeating-characters/
[6]: https://github.com/MrHuxu/leetcode/blob/master/problems/003_longest-substring-without-repeating-characters/index.js
[9]: https://leetcode.com/problems/longest-palindromic-substring/
[10]: https://github.com/MrHuxu/leetcode/blob/master/problems/005_longest-palindromic-substring/index.js
[11]: https://leetcode.com/problems/zigzag-conversion/
[12]: https://github.com/MrHuxu/leetcode/blob/master/problems/006_zigzag-conversion/index.js
[13]: https://leetcode.com/problems/reverse-integer/
[14]: https://github.com/MrHuxu/leetcode/blob/master/problems/007_reverse-integer/index.js
[15]: https://leetcode.com/problems/string-to-integer-atoi/
[16]: https://github.com/MrHuxu/leetcode/blob/master/problems/008_string-to-integer-atoi/index.js
[17]: https://leetcode.com/problems/palindrome-number/
[18]: https://github.com/MrHuxu/leetcode/blob/master/problems/009_palindrome-number/index.js
[19]: https://leetcode.com/problems/regular-expression-matching/
[20]: https://github.com/MrHuxu/leetcode/blob/master/problems/010_regular-expression-matching/index.js
[21]: https://leetcode.com/problems/container-with-most-water/
[22]: https://github.com/MrHuxu/leetcode/blob/master/problems/011_container-with-most-water/index.js
[23]: https://leetcode.com/problems/integer-to-roman/
[24]: https://github.com/MrHuxu/leetcode/blob/master/problems/012_integer-to-roman/index.js
[25]: https://leetcode.com/problems/roman-to-integer/
[26]: https://github.com/MrHuxu/leetcode/blob/master/problems/013_roman-to-integer/index.js
[27]: https://leetcode.com/problems/longest-common-prefix/
[28]: https://github.com/MrHuxu/leetcode/blob/master/problems/014_longest-common-prefix/index.js
[29]: https://leetcode.com/problems/3sum/
[30]: https://github.com/MrHuxu/leetcode/blob/master/problems/015_3sum/index.js
[31]: https://leetcode.com/problems/3sum-closest/
[32]: https://github.com/MrHuxu/leetcode/blob/master/problems/016_3sum-closest/index.js
[33]: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
[34]: https://github.com/MrHuxu/leetcode/blob/master/problems/017_letter-combinations-of-a-phone-number/index.js
[35]: https://leetcode.com/problems/4sum/
[36]: https://github.com/MrHuxu/leetcode/blob/master/problems/018_4sum/index.js
[37]: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
[38]: https://github.com/MrHuxu/leetcode/blob/master/problems/019_remove-nth-node-from-end-of-list/index.js
[39]: https://leetcode.com/problems/valid-parentheses/
[40]: https://github.com/MrHuxu/leetcode/blob/master/problems/020_valid-parentheses/index.js
[41]: https://leetcode.com/problems/merge-two-sorted-lists/
[42]: https://github.com/MrHuxu/leetcode/blob/master/problems/021_merge-two-sorted-lists/index.js
[43]: https://leetcode.com/problems/generate-parentheses/
[44]: https://github.com/MrHuxu/leetcode/blob/master/problems/022_generate-parentheses/index.js
[45]: https://leetcode.com/problems/merge-k-sorted-lists/
[46]: https://github.com/MrHuxu/leetcode/blob/master/problems/023_merge-k-sorted-lists/index.js
[47]: https://leetcode.com/problems/swap-nodes-in-pairs/
[48]: https://github.com/MrHuxu/leetcode/blob/master/problems/024_swap-nodes-in-pairs/index.js
[51]: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
[52]: https://github.com/MrHuxu/leetcode/blob/master/problems/026_remove-duplicates-from-sorted-array/index.js
[53]: https://leetcode.com/problems/remove-element/
[54]: https://github.com/MrHuxu/leetcode/blob/master/problems/027_remove-element/index.js
[55]: https://leetcode.com/problems/implement-strstr/
[56]: https://github.com/MrHuxu/leetcode/blob/master/problems/028_implement-strstr/index.js
[57]: https://leetcode.com/problems/divide-two-integers/
[58]: https://github.com/MrHuxu/leetcode/blob/master/problems/029_divide-two-integers/index.js
[67]: https://leetcode.com/problems/search-for-a-range/
[68]: https://github.com/MrHuxu/leetcode/blob/master/problems/034_search-for-a-range/index.js
[69]: https://leetcode.com/problems/search-insert-position/
[70]: https://github.com/MrHuxu/leetcode/blob/master/problems/035_search-insert-position/index.js
[75]: https://leetcode.com/problems/count-and-say/
[76]: https://github.com/MrHuxu/leetcode/blob/master/problems/038_count-and-say/index.js
[77]: https://leetcode.com/problems/combination-sum/
[78]: https://github.com/MrHuxu/leetcode/blob/master/problems/039_combination-sum/index.js
[81]: https://leetcode.com/problems/first-missing-positive/
[82]: https://github.com/MrHuxu/leetcode/blob/master/problems/041_first-missing-positive/index.js
[85]: https://leetcode.com/problems/multiply-strings/
[86]: https://github.com/MrHuxu/leetcode/blob/master/problems/043_multiply-strings/index.js
[91]: https://leetcode.com/problems/permutations/
[92]: https://github.com/MrHuxu/leetcode/blob/master/problems/046_permutations/index.js
[95]: https://leetcode.com/problems/rotate-image/
[96]: https://github.com/MrHuxu/leetcode/blob/master/problems/048_rotate-image/index.js
[97]: https://leetcode.com/problems/group-anagrams/
[98]: https://github.com/MrHuxu/leetcode/blob/master/problems/049_group-anagrams/index.js
[105]: https://leetcode.com/problems/maximum-subarray/
[106]: https://github.com/MrHuxu/leetcode/blob/master/problems/053_maximum-subarray/index.js
[107]: https://leetcode.com/problems/spiral-matrix/
[108]: https://github.com/MrHuxu/leetcode/blob/master/problems/054_spiral-matrix/index.js
[109]: https://leetcode.com/problems/jump-game/
[110]: https://github.com/MrHuxu/leetcode/blob/master/problems/055_jump-game/index.js
[111]: https://leetcode.com/problems/merge-intervals/
[112]: https://github.com/MrHuxu/leetcode/blob/master/problems/056_merge-intervals/index.js
[115]: https://leetcode.com/problems/length-of-last-word/
[116]: https://github.com/MrHuxu/leetcode/blob/master/problems/058_length-of-last-word/index.js
[117]: https://leetcode.com/problems/spiral-matrix-ii/
[118]: https://github.com/MrHuxu/leetcode/blob/master/problems/059_spiral-matrix-ii/index.js
[119]: https://leetcode.com/problems/permutation-sequence/
[120]: https://github.com/MrHuxu/leetcode/blob/master/problems/060_permutation-sequence/index.js
[121]: https://leetcode.com/problems/rotate-list/
[122]: https://github.com/MrHuxu/leetcode/blob/master/problems/061_rotate-list/index.js
[123]: https://leetcode.com/problems/unique-paths/
[124]: https://github.com/MrHuxu/leetcode/blob/master/problems/062_unique-paths/index.js
[125]: https://leetcode.com/problems/unique-paths-ii/
[126]: https://github.com/MrHuxu/leetcode/blob/master/problems/063_unique-paths-ii/index.js
[127]: https://leetcode.com/problems/minimum-path-sum/
[128]: https://github.com/MrHuxu/leetcode/blob/master/problems/064_minimum-path-sum/index.js
[131]: https://leetcode.com/problems/plus-one/
[132]: https://github.com/MrHuxu/leetcode/blob/master/problems/066_plus-one/index.js
[133]: https://leetcode.com/problems/add-binary/
[134]: https://github.com/MrHuxu/leetcode/blob/master/problems/067_add-binary/index.js
[135]: https://leetcode.com/problems/text-justification/
[136]: https://github.com/MrHuxu/leetcode/blob/master/problems/068_text-justification/index.js
[137]: https://leetcode.com/problems/sqrtx/
[138]: https://github.com/MrHuxu/leetcode/blob/master/problems/069_sqrtx/index.js
[141]: https://leetcode.com/problems/simplify-path/
[142]: https://github.com/MrHuxu/leetcode/blob/master/problems/071_simplify-path/index.js
[145]: https://leetcode.com/problems/set-matrix-zeroes/
[146]: https://github.com/MrHuxu/leetcode/blob/master/problems/073_set-matrix-zeroes/index.js
[149]: https://leetcode.com/problems/sort-colors/
[150]: https://github.com/MrHuxu/leetcode/blob/master/problems/075_sort-colors/index.js
[153]: https://leetcode.com/problems/combinations/
[154]: https://github.com/MrHuxu/leetcode/blob/master/problems/077_combinations/index.js
[155]: https://leetcode.com/problems/subsets/
[156]: https://github.com/MrHuxu/leetcode/blob/master/problems/078_subsets/index.js
[157]: https://leetcode.com/problems/word-search/
[158]: https://github.com/MrHuxu/leetcode/blob/master/problems/079_word-search/index.js
[159]: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
[160]: https://github.com/MrHuxu/leetcode/blob/master/problems/080_remove-duplicates-from-sorted-array-ii/index.js
[165]: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
[166]: https://github.com/MrHuxu/leetcode/blob/master/problems/083_remove-duplicates-from-sorted-list/index.js
[171]: https://leetcode.com/problems/partition-list/
[172]: https://github.com/MrHuxu/leetcode/blob/master/problems/086_partition-list/index.js
[175]: https://leetcode.com/problems/merge-sorted-array/
[176]: https://github.com/MrHuxu/leetcode/blob/master/problems/088_merge-sorted-array/index.js
[177]: https://leetcode.com/problems/gray-code/
[178]: https://github.com/MrHuxu/leetcode/blob/master/problems/089_gray-code/index.js
[179]: https://leetcode.com/problems/subsets-ii/
[180]: https://github.com/MrHuxu/leetcode/blob/master/problems/090_subsets-ii/index.js
[181]: https://leetcode.com/problems/decode-ways/
[182]: https://github.com/MrHuxu/leetcode/blob/master/problems/091_decode-ways/index.js
[183]: https://leetcode.com/problems/reverse-linked-list-ii/
[184]: https://github.com/MrHuxu/leetcode/blob/master/problems/092_reverse-linked-list-ii/index.js
[185]: https://leetcode.com/problems/restore-ip-addresses/
[186]: https://github.com/MrHuxu/leetcode/blob/master/problems/093_restore-ip-addresses/index.js
[187]: https://leetcode.com/problems/binary-tree-inorder-traversal/
[188]: https://github.com/MrHuxu/leetcode/blob/master/problems/094_binary-tree-inorder-traversal/index.js
[189]: https://leetcode.com/problems/unique-binary-search-trees-ii/
[190]: https://github.com/MrHuxu/leetcode/blob/master/problems/095_unique-binary-search-trees-ii/index.js
[191]: https://leetcode.com/problems/unique-binary-search-trees/
[192]: https://github.com/MrHuxu/leetcode/blob/master/problems/096_unique-binary-search-trees/index.js
[195]: https://leetcode.com/problems/validate-binary-search-tree/
[196]: https://github.com/MrHuxu/leetcode/blob/master/problems/098_validate-binary-search-tree/index.js
[199]: https://leetcode.com/problems/same-tree/
[200]: https://github.com/MrHuxu/leetcode/blob/master/problems/100_same-tree/index.js
[201]: https://leetcode.com/problems/symmetric-tree/
[202]: https://github.com/MrHuxu/leetcode/blob/master/problems/101_symmetric-tree/index.js
[203]: https://leetcode.com/problems/binary-tree-level-order-traversal/
[204]: https://github.com/MrHuxu/leetcode/blob/master/problems/102_binary-tree-level-order-traversal/index.js
[205]: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
[206]: https://github.com/MrHuxu/leetcode/blob/master/problems/103_binary-tree-zigzag-level-order-traversal/index.js
[207]: https://leetcode.com/problems/maximum-depth-of-binary-tree/
[208]: https://github.com/MrHuxu/leetcode/blob/master/problems/104_maximum-depth-of-binary-tree/index.js
[209]: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
[210]: https://github.com/MrHuxu/leetcode/blob/master/problems/105_construct-binary-tree-from-preorder-and-inorder-traversal/index.js
[211]: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
[212]: https://github.com/MrHuxu/leetcode/blob/master/problems/106_construct-binary-tree-from-inorder-and-postorder-traversal/index.js
[213]: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
[214]: https://github.com/MrHuxu/leetcode/blob/master/problems/107_binary-tree-level-order-traversal-ii/index.js
[219]: https://leetcode.com/problems/balanced-binary-tree/
[220]: https://github.com/MrHuxu/leetcode/blob/master/problems/110_balanced-binary-tree/index.js
[221]: https://leetcode.com/problems/minimum-depth-of-binary-tree/
[222]: https://github.com/MrHuxu/leetcode/blob/master/problems/111_minimum-depth-of-binary-tree/index.js
[223]: https://leetcode.com/problems/path-sum/
[224]: https://github.com/MrHuxu/leetcode/blob/master/problems/112_path-sum/index.js
[225]: https://leetcode.com/problems/path-sum-ii/
[226]: https://github.com/MrHuxu/leetcode/blob/master/problems/113_path-sum-ii/index.js
[227]: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
[228]: https://github.com/MrHuxu/leetcode/blob/master/problems/114_flatten-binary-tree-to-linked-list/index.js
[231]: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
[232]: https://github.com/MrHuxu/leetcode/blob/master/problems/116_populating-next-right-pointers-in-each-node/index.js
[235]: https://leetcode.com/problems/pascals-triangle/
[236]: https://github.com/MrHuxu/leetcode/blob/master/problems/118_pascals-triangle/index.js
[237]: https://leetcode.com/problems/pascals-triangle-ii/
[238]: https://github.com/MrHuxu/leetcode/blob/master/problems/119_pascals-triangle-ii/index.js
[239]: https://leetcode.com/problems/triangle/
[240]: https://github.com/MrHuxu/leetcode/blob/master/problems/120_triangle/index.js
[241]: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
[242]: https://github.com/MrHuxu/leetcode/blob/master/problems/121_best-time-to-buy-and-sell-stock/index.js
[243]: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
[244]: https://github.com/MrHuxu/leetcode/blob/master/problems/122_best-time-to-buy-and-sell-stock-ii/index.js
[249]: https://leetcode.com/problems/valid-palindrome/
[250]: https://github.com/MrHuxu/leetcode/blob/master/problems/125_valid-palindrome/index.js
[257]: https://leetcode.com/problems/sum-root-to-leaf-numbers/
[258]: https://github.com/MrHuxu/leetcode/blob/master/problems/129_sum-root-to-leaf-numbers/index.js
[259]: https://leetcode.com/problems/surrounded-regions/
[260]: https://github.com/MrHuxu/leetcode/blob/master/problems/130_surrounded-regions/index.js
[261]: https://leetcode.com/problems/palindrome-partitioning/
[262]: https://github.com/MrHuxu/leetcode/blob/master/problems/131_palindrome-partitioning/index.js
[267]: https://leetcode.com/problems/gas-station/
[268]: https://github.com/MrHuxu/leetcode/blob/master/problems/134_gas-station/index.js
[271]: https://leetcode.com/problems/single-number/
[272]: https://github.com/MrHuxu/leetcode/blob/master/problems/136_single-number/index.js
[273]: https://leetcode.com/problems/single-number-ii/
[274]: https://github.com/MrHuxu/leetcode/blob/master/problems/137_single-number-ii/index.js
[277]: https://leetcode.com/problems/word-break/
[278]: https://github.com/MrHuxu/leetcode/blob/master/problems/139_word-break/index.js
[281]: https://leetcode.com/problems/linked-list-cycle/
[282]: https://github.com/MrHuxu/leetcode/blob/master/problems/141_linked-list-cycle/index.js
[283]: https://leetcode.com/problems/linked-list-cycle-ii/
[284]: https://github.com/MrHuxu/leetcode/blob/master/problems/142_linked-list-cycle-ii/index.js
[285]: https://leetcode.com/problems/reorder-list/
[286]: https://github.com/MrHuxu/leetcode/blob/master/problems/143_reorder-list/index.js
[287]: https://leetcode.com/problems/binary-tree-preorder-traversal/
[288]: https://github.com/MrHuxu/leetcode/blob/master/problems/144_binary-tree-preorder-traversal/index.js
[289]: https://leetcode.com/problems/binary-tree-postorder-traversal/
[290]: https://github.com/MrHuxu/leetcode/blob/master/problems/145_binary-tree-postorder-traversal/index.js
[293]: https://leetcode.com/problems/insertion-sort-list/
[294]: https://github.com/MrHuxu/leetcode/blob/master/problems/147_insertion-sort-list/index.js
[299]: https://leetcode.com/problems/evaluate-reverse-polish-notation/
[300]: https://github.com/MrHuxu/leetcode/blob/master/problems/150_evaluate-reverse-polish-notation/index.js
[301]: https://leetcode.com/problems/reverse-words-in-a-string/
[302]: https://github.com/MrHuxu/leetcode/blob/master/problems/151_reverse-words-in-a-string/index.js
[303]: https://leetcode.com/problems/maximum-product-subarray/
[304]: https://github.com/MrHuxu/leetcode/blob/master/problems/152_maximum-product-subarray/index.js
[305]: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
[306]: https://github.com/MrHuxu/leetcode/blob/master/problems/153_find-minimum-in-rotated-sorted-array/index.js
[309]: https://leetcode.com/problems/min-stack/
[310]: https://github.com/MrHuxu/leetcode/blob/master/problems/155_min-stack/index.js
[315]: https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/
[316]: https://github.com/MrHuxu/leetcode/blob/master/problems/158_read-n-characters-given-read4-ii-call-multiple-times/index.js
[319]: https://leetcode.com/problems/intersection-of-two-linked-lists/
[320]: https://github.com/MrHuxu/leetcode/blob/master/problems/160_intersection-of-two-linked-lists/index.js
[323]: https://leetcode.com/problems/find-peak-element/
[324]: https://github.com/MrHuxu/leetcode/blob/master/problems/162_find-peak-element/index.js
[329]: https://leetcode.com/problems/compare-version-numbers/
[330]: https://github.com/MrHuxu/leetcode/blob/master/problems/165_compare-version-numbers/index.js
[337]: https://leetcode.com/problems/majority-element/
[338]: https://github.com/MrHuxu/leetcode/blob/master/problems/169_majority-element/index.js
[341]: https://leetcode.com/problems/excel-sheet-column-number/
[342]: https://github.com/MrHuxu/leetcode/blob/master/problems/171_excel-sheet-column-number/index.js
[343]: https://leetcode.com/problems/factorial-trailing-zeroes/
[344]: https://github.com/MrHuxu/leetcode/blob/master/problems/172_factorial-trailing-zeroes/index.js
[357]: https://leetcode.com/problems/largest-number/
[358]: https://github.com/MrHuxu/leetcode/blob/master/problems/179_largest-number/index.js
[373]: https://leetcode.com/problems/repeated-dna-sequences/
[374]: https://github.com/MrHuxu/leetcode/blob/master/problems/187_repeated-dna-sequences/index.js
[377]: https://leetcode.com/problems/rotate-array/
[378]: https://github.com/MrHuxu/leetcode/blob/master/problems/189_rotate-array/index.js
[379]: https://leetcode.com/problems/reverse-bits/
[380]: https://github.com/MrHuxu/leetcode/blob/master/problems/190_reverse-bits/index.js
[381]: https://leetcode.com/problems/number-of-1-bits/
[382]: https://github.com/MrHuxu/leetcode/blob/master/problems/191_number-of-1-bits/index.js
[395]: https://leetcode.com/problems/house-robber/
[396]: https://github.com/MrHuxu/leetcode/blob/master/problems/198_house-robber/index.js
[397]: https://leetcode.com/problems/binary-tree-right-side-view/
[398]: https://github.com/MrHuxu/leetcode/blob/master/problems/199_binary-tree-right-side-view/index.js
[399]: https://leetcode.com/problems/number-of-islands/
[400]: https://github.com/MrHuxu/leetcode/blob/master/problems/200_number-of-islands/index.js
[401]: https://leetcode.com/problems/bitwise-and-of-numbers-range/
[402]: https://github.com/MrHuxu/leetcode/blob/master/problems/201_bitwise-and-of-numbers-range/index.js
[403]: https://leetcode.com/problems/happy-number/
[404]: https://github.com/MrHuxu/leetcode/blob/master/problems/202_happy-number/index.js
[405]: https://leetcode.com/problems/remove-linked-list-elements/
[406]: https://github.com/MrHuxu/leetcode/blob/master/problems/203_remove-linked-list-elements/index.js
[407]: https://leetcode.com/problems/count-primes/
[408]: https://github.com/MrHuxu/leetcode/blob/master/problems/204_count-primes/index.js
[409]: https://leetcode.com/problems/isomorphic-strings/
[410]: https://github.com/MrHuxu/leetcode/blob/master/problems/205_isomorphic-strings/index.js
[411]: https://leetcode.com/problems/reverse-linked-list/
[412]: https://github.com/MrHuxu/leetcode/blob/master/problems/206_reverse-linked-list/index.js
[413]: https://leetcode.com/problems/course-schedule/
[414]: https://github.com/MrHuxu/leetcode/blob/master/problems/207_course-schedule/index.js
[417]: https://leetcode.com/problems/minimum-size-subarray-sum/
[418]: https://github.com/MrHuxu/leetcode/blob/master/problems/209_minimum-size-subarray-sum/index.js
[429]: https://leetcode.com/problems/kth-largest-element-in-an-array/
[430]: https://github.com/MrHuxu/leetcode/blob/master/problems/215_kth-largest-element-in-an-array/index.js
[431]: https://leetcode.com/problems/combination-sum-iii/
[432]: https://github.com/MrHuxu/leetcode/blob/master/problems/216_combination-sum-iii/index.js
[433]: https://leetcode.com/problems/contains-duplicate/
[434]: https://github.com/MrHuxu/leetcode/blob/master/problems/217_contains-duplicate/index.js
[437]: https://leetcode.com/problems/contains-duplicate-ii/
[438]: https://github.com/MrHuxu/leetcode/blob/master/problems/219_contains-duplicate-ii/index.js
[439]: https://leetcode.com/problems/contains-duplicate-iii/
[440]: https://github.com/MrHuxu/leetcode/blob/master/problems/220_contains-duplicate-iii/index.js
[441]: https://leetcode.com/problems/maximal-square/
[442]: https://github.com/MrHuxu/leetcode/blob/master/problems/221_maximal-square/index.js
[445]: https://leetcode.com/problems/rectangle-area/
[446]: https://github.com/MrHuxu/leetcode/blob/master/problems/223_rectangle-area/index.js
[447]: https://leetcode.com/problems/basic-calculator/
[448]: https://github.com/MrHuxu/leetcode/blob/master/problems/224_basic-calculator/index.js
[451]: https://leetcode.com/problems/invert-binary-tree/
[452]: https://github.com/MrHuxu/leetcode/blob/master/problems/226_invert-binary-tree/index.js
[453]: https://leetcode.com/problems/basic-calculator-ii/
[454]: https://github.com/MrHuxu/leetcode/blob/master/problems/227_basic-calculator-ii/index.js
[455]: https://leetcode.com/problems/summary-ranges/
[456]: https://github.com/MrHuxu/leetcode/blob/master/problems/228_summary-ranges/index.js
[457]: https://leetcode.com/problems/majority-element-ii/
[458]: https://github.com/MrHuxu/leetcode/blob/master/problems/229_majority-element-ii/index.js
[461]: https://leetcode.com/problems/power-of-two/
[462]: https://github.com/MrHuxu/leetcode/blob/master/problems/231_power-of-two/index.js
[467]: https://leetcode.com/problems/palindrome-linked-list/
[468]: https://github.com/MrHuxu/leetcode/blob/master/problems/234_palindrome-linked-list/index.js
[469]: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
[470]: https://github.com/MrHuxu/leetcode/blob/master/problems/235_lowest-common-ancestor-of-a-binary-search-tree/index.js
[473]: https://leetcode.com/problems/delete-node-in-a-linked-list/
[474]: https://github.com/MrHuxu/leetcode/blob/master/problems/237_delete-node-in-a-linked-list/index.js
[475]: https://leetcode.com/problems/product-of-array-except-self/
[476]: https://github.com/MrHuxu/leetcode/blob/master/problems/238_product-of-array-except-self/index.js
[479]: https://leetcode.com/problems/search-a-2d-matrix-ii/
[480]: https://github.com/MrHuxu/leetcode/blob/master/problems/240_search-a-2d-matrix-ii/index.js
[483]: https://leetcode.com/problems/valid-anagram/
[484]: https://github.com/MrHuxu/leetcode/blob/master/problems/242_valid-anagram/index.js
[513]: https://leetcode.com/problems/binary-tree-paths/
[514]: https://github.com/MrHuxu/leetcode/blob/master/problems/257_binary-tree-paths/index.js
[515]: https://leetcode.com/problems/add-digits/
[516]: https://github.com/MrHuxu/leetcode/blob/master/problems/258_add-digits/index.js
[525]: https://leetcode.com/problems/ugly-number/
[526]: https://github.com/MrHuxu/leetcode/blob/master/problems/263_ugly-number/index.js
[527]: https://leetcode.com/problems/ugly-number-ii/
[528]: https://github.com/MrHuxu/leetcode/blob/master/problems/264_ugly-number-ii/index.js
[535]: https://leetcode.com/problems/missing-number/
[536]: https://github.com/MrHuxu/leetcode/blob/master/problems/268_missing-number/index.js
[547]: https://leetcode.com/problems/h-index/
[548]: https://github.com/MrHuxu/leetcode/blob/master/problems/274_h-index/index.js
[549]: https://leetcode.com/problems/h-index-ii/
[550]: https://github.com/MrHuxu/leetcode/blob/master/problems/275_h-index-ii/index.js
[555]: https://leetcode.com/problems/first-bad-version/
[556]: https://github.com/MrHuxu/leetcode/blob/master/problems/278_first-bad-version/index.js
[557]: https://leetcode.com/problems/perfect-squares/
[558]: https://github.com/MrHuxu/leetcode/blob/master/problems/279_perfect-squares/index.js
[565]: https://leetcode.com/problems/move-zeroes/
[566]: https://github.com/MrHuxu/leetcode/blob/master/problems/283_move-zeroes/index.js
[577]: https://leetcode.com/problems/game-of-life/
[578]: https://github.com/MrHuxu/leetcode/blob/master/problems/289_game-of-life/index.js
[579]: https://leetcode.com/problems/word-pattern/
[580]: https://github.com/MrHuxu/leetcode/blob/master/problems/290_word-pattern/index.js
[583]: https://leetcode.com/problems/nim-game/
[584]: https://github.com/MrHuxu/leetcode/blob/master/problems/292_nim-game/index.js
[597]: https://leetcode.com/problems/bulls-and-cows/
[598]: https://github.com/MrHuxu/leetcode/blob/master/problems/299_bulls-and-cows/index.js
[599]: https://leetcode.com/problems/longest-increasing-subsequence/
[600]: https://github.com/MrHuxu/leetcode/blob/master/problems/300_longest-increasing-subsequence/index.js
[605]: https://leetcode.com/problems/range-sum-query-immutable/
[606]: https://github.com/MrHuxu/leetcode/blob/master/problems/303_range-sum-query-immutable/index.js
[607]: https://leetcode.com/problems/range-sum-query-2d-immutable/
[608]: https://github.com/MrHuxu/leetcode/blob/master/problems/304_range-sum-query-2d-immutable/index.js
[611]: https://leetcode.com/problems/additive-number/
[612]: https://github.com/MrHuxu/leetcode/blob/master/problems/306_additive-number/index.js
[613]: https://leetcode.com/problems/range-sum-query-mutable/
[614]: https://github.com/MrHuxu/leetcode/blob/master/problems/307_range-sum-query-mutable/index.js
[635]: https://leetcode.com/problems/maximum-product-of-word-lengths/
[636]: https://github.com/MrHuxu/leetcode/blob/master/problems/318_maximum-product-of-word-lengths/index.js
[643]: https://leetcode.com/problems/coin-change/
[644]: https://github.com/MrHuxu/leetcode/blob/master/problems/322_coin-change/index.js
[651]: https://leetcode.com/problems/power-of-three/
[652]: https://github.com/MrHuxu/leetcode/blob/master/problems/326_power-of-three/index.js
[655]: https://leetcode.com/problems/odd-even-linked-list/
[656]: https://github.com/MrHuxu/leetcode/blob/master/problems/328_odd-even-linked-list/index.js
[663]: https://leetcode.com/problems/reconstruct-itinerary/
[664]: https://github.com/MrHuxu/leetcode/blob/master/problems/332_reconstruct-itinerary/index.js
[667]: https://leetcode.com/problems/increasing-triplet-subsequence/
[668]: https://github.com/MrHuxu/leetcode/blob/master/problems/334_increasing-triplet-subsequence/index.js
[671]: https://leetcode.com/problems/palindrome-pairs/
[672]: https://github.com/MrHuxu/leetcode/blob/master/problems/336_palindrome-pairs/index.js
[675]: https://leetcode.com/problems/counting-bits/
[676]: https://github.com/MrHuxu/leetcode/blob/master/problems/338_counting-bits/index.js
[685]: https://leetcode.com/problems/integer-break/
[686]: https://github.com/MrHuxu/leetcode/blob/master/problems/343_integer-break/index.js
[687]: https://leetcode.com/problems/reverse-string/
[688]: https://github.com/MrHuxu/leetcode/blob/master/problems/344_reverse-string/index.js
[689]: https://leetcode.com/problems/reverse-vowels-of-a-string/
[690]: https://github.com/MrHuxu/leetcode/blob/master/problems/345_reverse-vowels-of-a-string/index.js
[693]: https://leetcode.com/problems/top-k-frequent-elements/
[694]: https://github.com/MrHuxu/leetcode/blob/master/problems/347_top-k-frequent-elements/index.js
[697]: https://leetcode.com/problems/intersection-of-two-arrays/
[698]: https://github.com/MrHuxu/leetcode/blob/master/problems/349_intersection-of-two-arrays/index.js
[699]: https://leetcode.com/problems/intersection-of-two-arrays-ii/
[700]: https://github.com/MrHuxu/leetcode/blob/master/problems/350_intersection-of-two-arrays-ii/index.js
[733]: https://leetcode.com/problems/valid-perfect-square/
[734]: https://github.com/MrHuxu/leetcode/blob/master/problems/367_valid-perfect-square/index.js
[735]: https://leetcode.com/problems/largest-divisible-subset/
[736]: https://github.com/MrHuxu/leetcode/blob/master/problems/368_largest-divisible-subset/index.js
[755]: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
[756]: https://github.com/MrHuxu/leetcode/blob/master/problems/378_kth-smallest-element-in-a-sorted-matrix/index.js
[765]: https://leetcode.com/problems/ransom-note/
[766]: https://github.com/MrHuxu/leetcode/blob/master/problems/383_ransom-note/index.js
[771]: https://leetcode.com/problems/lexicographical-numbers/
[772]: https://github.com/MrHuxu/leetcode/blob/master/problems/386_lexicographical-numbers/index.js
[773]: https://leetcode.com/problems/first-unique-character-in-a-string/
[774]: https://github.com/MrHuxu/leetcode/blob/master/problems/387_first-unique-character-in-a-string/index.js
[775]: https://leetcode.com/problems/longest-absolute-file-path/
[776]: https://github.com/MrHuxu/leetcode/blob/master/problems/388_longest-absolute-file-path/index.js
[777]: https://leetcode.com/problems/find-the-difference/
[778]: https://github.com/MrHuxu/leetcode/blob/master/problems/389_find-the-difference/index.js
[783]: https://leetcode.com/problems/is-subsequence/
[784]: https://github.com/MrHuxu/leetcode/blob/master/problems/392_is-subsequence/index.js
[787]: https://leetcode.com/problems/decode-string/
[788]: https://github.com/MrHuxu/leetcode/blob/master/problems/394_decode-string/index.js
[793]: https://leetcode.com/problems/integer-replacement/
[794]: https://github.com/MrHuxu/leetcode/blob/master/problems/397_integer-replacement/index.js
[797]: https://leetcode.com/problems/evaluate-division/
[798]: https://github.com/MrHuxu/leetcode/blob/master/problems/399_evaluate-division/index.js
[801]: https://leetcode.com/problems/binary-watch/
[802]: https://github.com/MrHuxu/leetcode/blob/master/problems/401_binary-watch/index.js
[807]: https://leetcode.com/problems/sum-of-left-leaves/
[808]: https://github.com/MrHuxu/leetcode/blob/master/problems/404_sum-of-left-leaves/index.js
[809]: https://leetcode.com/problems/convert-a-number-to-hexadecimal/
[810]: https://github.com/MrHuxu/leetcode/blob/master/problems/405_convert-a-number-to-hexadecimal/index.js
[811]: https://leetcode.com/problems/queue-reconstruction-by-height/
[812]: https://github.com/MrHuxu/leetcode/blob/master/problems/406_queue-reconstruction-by-height/index.js
[817]: https://leetcode.com/problems/longest-palindrome/
[818]: https://github.com/MrHuxu/leetcode/blob/master/problems/409_longest-palindrome/index.js
[823]: https://leetcode.com/problems/fizz-buzz/
[824]: https://github.com/MrHuxu/leetcode/blob/master/problems/412_fizz-buzz/index.js
[825]: https://leetcode.com/problems/arithmetic-slices/
[826]: https://github.com/MrHuxu/leetcode/blob/master/problems/413_arithmetic-slices/index.js
[829]: https://leetcode.com/problems/add-strings/
[830]: https://github.com/MrHuxu/leetcode/blob/master/problems/415_add-strings/index.js
[831]: https://leetcode.com/problems/partition-equal-subset-sum/
[832]: https://github.com/MrHuxu/leetcode/blob/master/problems/416_partition-equal-subset-sum/index.js
[833]: https://leetcode.com/problems/pacific-atlantic-water-flow/
[834]: https://github.com/MrHuxu/leetcode/blob/master/problems/417_pacific-atlantic-water-flow/index.js
[837]: https://leetcode.com/problems/battleships-in-a-board/
[838]: https://github.com/MrHuxu/leetcode/blob/master/problems/419_battleships-in-a-board/index.js
[845]: https://leetcode.com/problems/reconstruct-original-digits-from-english/
[846]: https://github.com/MrHuxu/leetcode/blob/master/problems/423_reconstruct-original-digits-from-english/index.js
[867]: https://leetcode.com/problems/number-of-segments-in-a-string/
[868]: https://github.com/MrHuxu/leetcode/blob/master/problems/434_number-of-segments-in-a-string/index.js
[875]: https://leetcode.com/problems/find-all-anagrams-in-a-string/
[876]: https://github.com/MrHuxu/leetcode/blob/master/problems/438_find-all-anagrams-in-a-string/index.js
[881]: https://leetcode.com/problems/arranging-coins/
[882]: https://github.com/MrHuxu/leetcode/blob/master/problems/441_arranging-coins/index.js
[883]: https://leetcode.com/problems/find-all-duplicates-in-an-array/
[884]: https://github.com/MrHuxu/leetcode/blob/master/problems/442_find-all-duplicates-in-an-array/index.js
[905]: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
[906]: https://github.com/MrHuxu/leetcode/blob/master/problems/453_minimum-moves-to-equal-array-elements/index.js
[969]: https://leetcode.com/problems/max-consecutive-ones/
[970]: https://github.com/MrHuxu/leetcode/blob/master/problems/485_max-consecutive-ones/index.js
[983]: https://leetcode.com/problems/construct-the-rectangle/
[984]: https://github.com/MrHuxu/leetcode/blob/master/problems/492_construct-the-rectangle/index.js
[987]: https://leetcode.com/problems/target-sum/
[988]: https://github.com/MrHuxu/leetcode/blob/master/problems/494_target-sum/index.js
[991]: https://leetcode.com/problems/next-greater-element-i/
[992]: https://github.com/MrHuxu/leetcode/blob/master/problems/496_next-greater-element-i/index.js
[1011]: https://leetcode.com/problems/relative-ranks/
[1012]: https://github.com/MrHuxu/leetcode/blob/master/problems/506_relative-ranks/index.js
[1015]: https://leetcode.com/problems/most-frequent-subtree-sum/
[1016]: https://github.com/MrHuxu/leetcode/blob/master/problems/508_most-frequent-subtree-sum/index.js
[1025]: https://leetcode.com/problems/find-bottom-left-tree-value/
[1026]: https://github.com/MrHuxu/leetcode/blob/master/problems/513_find-bottom-left-tree-value/index.js
[1029]: https://leetcode.com/problems/find-largest-value-in-each-tree-row/
[1030]: https://github.com/MrHuxu/leetcode/blob/master/problems/515_find-largest-value-in-each-tree-row/index.js
[1039]: https://leetcode.com/problems/detect-capital/
[1040]: https://github.com/MrHuxu/leetcode/blob/master/problems/520_detect-capital/index.js
[1057]: https://leetcode.com/problems/minesweeper/
[1058]: https://github.com/MrHuxu/leetcode/blob/master/problems/529_minesweeper/index.js
[1059]: https://leetcode.com/problems/minimum-absolute-difference-in-bst/
[1060]: https://github.com/MrHuxu/leetcode/blob/master/problems/530_minimum-absolute-difference-in-bst/index.js
[1075]: https://leetcode.com/problems/convert-bst-to-greater-tree/
[1076]: https://github.com/MrHuxu/leetcode/blob/master/problems/538_convert-bst-to-greater-tree/index.js
[1077]: https://leetcode.com/problems/minimum-time-difference/
[1078]: https://github.com/MrHuxu/leetcode/blob/master/problems/539_minimum-time-difference/index.js
[1083]: https://leetcode.com/problems/01-matrix/
[1084]: https://github.com/MrHuxu/leetcode/blob/master/problems/542_01-matrix/index.js
[1119]: https://leetcode.com/problems/subarray-sum-equals-k/
[1120]: https://github.com/MrHuxu/leetcode/blob/master/problems/560_subarray-sum-equals-k/index.js
[1121]: https://leetcode.com/problems/array-partition-i/
[1122]: https://github.com/MrHuxu/leetcode/blob/master/problems/561_array-partition-i/index.js
[1125]: https://leetcode.com/problems/binary-tree-tilt/
[1126]: https://github.com/MrHuxu/leetcode/blob/master/problems/563_binary-tree-tilt/index.js
[1131]: https://leetcode.com/problems/reshape-the-matrix/
[1132]: https://github.com/MrHuxu/leetcode/blob/master/problems/566_reshape-the-matrix/index.js
[1133]: https://leetcode.com/problems/permutation-in-string/
[1134]: https://github.com/MrHuxu/leetcode/blob/master/problems/567_permutation-in-string/index.js
[1161]: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
[1162]: https://github.com/MrHuxu/leetcode/blob/master/problems/581_shortest-unsorted-continuous-subarray/index.js
[1183]: https://leetcode.com/problems/fraction-addition-and-subtraction/
[1184]: https://github.com/MrHuxu/leetcode/blob/master/problems/592_fraction-addition-and-subtraction/index.js
[1185]: https://leetcode.com/problems/valid-square/
[1186]: https://github.com/MrHuxu/leetcode/blob/master/problems/593_valid-square/index.js
[1187]: https://leetcode.com/problems/longest-harmonious-subsequence/
[1188]: https://github.com/MrHuxu/leetcode/blob/master/problems/594_longest-harmonious-subsequence/index.js
[1233]: https://leetcode.com/problems/merge-two-binary-trees/
[1234]: https://github.com/MrHuxu/leetcode/blob/master/problems/617_merge-two-binary-trees/index.js
[1241]: https://leetcode.com/problems/task-scheduler/
[1242]: https://github.com/MrHuxu/leetcode/blob/master/problems/621_task-scheduler/index.js
[1265]: https://leetcode.com/problems/sum-of-square-numbers/
[1266]: https://github.com/MrHuxu/leetcode/blob/master/problems/633_sum-of-square-numbers/index.js
[1273]: https://leetcode.com/problems/average-of-levels-in-binary-tree/
[1274]: https://github.com/MrHuxu/leetcode/blob/master/problems/637_average-of-levels-in-binary-tree/index.js
[1279]: https://leetcode.com/problems/solve-the-equation/
[1280]: https://github.com/MrHuxu/leetcode/blob/master/problems/640_solve-the-equation/index.js
[1291]: https://leetcode.com/problems/maximum-length-of-pair-chain/
[1292]: https://github.com/MrHuxu/leetcode/blob/master/problems/646_maximum-length-of-pair-chain/index.js
[1293]: https://leetcode.com/problems/palindromic-substrings/
[1294]: https://github.com/MrHuxu/leetcode/blob/master/problems/647_palindromic-substrings/index.js
[1295]: https://leetcode.com/problems/replace-words/
[1296]: https://github.com/MrHuxu/leetcode/blob/master/problems/648_replace-words/index.js
[1299]: https://leetcode.com/problems/2-keys-keyboard/
[1300]: https://github.com/MrHuxu/leetcode/blob/master/problems/650_2-keys-keyboard/index.js
[1305]: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
[1306]: https://github.com/MrHuxu/leetcode/blob/master/problems/653_two-sum-iv-input-is-a-bst/index.js
[1307]: https://leetcode.com/problems/maximum-binary-tree/
[1308]: https://github.com/MrHuxu/leetcode/blob/master/problems/654_maximum-binary-tree/index.js
[1309]: https://leetcode.com/problems/print-binary-tree/
[1310]: https://github.com/MrHuxu/leetcode/blob/master/problems/655_print-binary-tree/index.js
[1313]: https://leetcode.com/problems/judge-route-circle/
[1314]: https://github.com/MrHuxu/leetcode/blob/master/problems/657_judge-route-circle/index.js
[1317]: https://leetcode.com/problems/split-array-into-consecutive-subsequences/
[1318]: https://github.com/MrHuxu/leetcode/blob/master/problems/659_split-array-into-consecutive-subsequences/index.js
[1321]: https://leetcode.com/problems/image-smoother/
[1322]: https://github.com/MrHuxu/leetcode/blob/master/problems/661_image-smoother/index.js
[1323]: https://leetcode.com/problems/maximum-width-of-binary-tree/
[1324]: https://github.com/MrHuxu/leetcode/blob/master/problems/662_maximum-width-of-binary-tree/index.js
[1329]: https://leetcode.com/problems/non-decreasing-array/
[1330]: https://github.com/MrHuxu/leetcode/blob/master/problems/665_non-decreasing-array/index.js
[1333]: https://leetcode.com/problems/beautiful-arrangement-ii/
[1334]: https://github.com/MrHuxu/leetcode/blob/master/problems/667_beautiful-arrangement-ii/index.js
[1337]: https://leetcode.com/problems/trim-a-binary-search-tree/
[1338]: https://github.com/MrHuxu/leetcode/blob/master/problems/669_trim-a-binary-search-tree/index.js
[1339]: https://leetcode.com/problems/maximum-swap/
[1340]: https://github.com/MrHuxu/leetcode/blob/master/problems/670_maximum-swap/index.js
[1341]: https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
[1342]: https://github.com/MrHuxu/leetcode/blob/master/problems/671_second-minimum-node-in-a-binary-tree/index.js
[1345]: https://leetcode.com/problems/number-of-longest-increasing-subsequence/
[1346]: https://github.com/MrHuxu/leetcode/blob/master/problems/673_number-of-longest-increasing-subsequence/index.js
[1347]: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
[1348]: https://github.com/MrHuxu/leetcode/blob/master/problems/674_longest-continuous-increasing-subsequence/index.js
[1351]: https://leetcode.com/problems/implement-magic-dictionary/
[1352]: https://github.com/MrHuxu/leetcode/blob/master/problems/676_implement-magic-dictionary/index.js
[1353]: https://leetcode.com/problems/map-sum-pairs/
[1354]: https://github.com/MrHuxu/leetcode/blob/master/problems/677_map-sum-pairs/index.js
[1355]: https://leetcode.com/problems/valid-parenthesis-string/
[1356]: https://github.com/MrHuxu/leetcode/blob/master/problems/678_valid-parenthesis-string/index.js
[1359]: https://leetcode.com/problems/valid-palindrome-ii/
[1360]: https://github.com/MrHuxu/leetcode/blob/master/problems/680_valid-palindrome-ii/index.js
[1363]: https://leetcode.com/problems/baseball-game/
[1364]: https://github.com/MrHuxu/leetcode/blob/master/problems/682_baseball-game/index.js
[1367]: https://leetcode.com/problems/redundant-connection/
[1368]: https://github.com/MrHuxu/leetcode/blob/master/problems/684_redundant-connection/index.js
[1371]: https://leetcode.com/problems/repeated-string-match/
[1372]: https://github.com/MrHuxu/leetcode/blob/master/problems/686_repeated-string-match/index.js
[1373]: https://leetcode.com/problems/longest-univalue-path/
[1374]: https://github.com/MrHuxu/leetcode/blob/master/problems/687_longest-univalue-path/index.js
[1383]: https://leetcode.com/problems/top-k-frequent-words/
[1384]: https://github.com/MrHuxu/leetcode/blob/master/problems/692_top-k-frequent-words/index.js
[1385]: https://leetcode.com/problems/binary-number-with-alternating-bits/
[1386]: https://github.com/MrHuxu/leetcode/blob/master/problems/693_binary-number-with-alternating-bits/index.js
[1389]: https://leetcode.com/problems/max-area-of-island/
[1390]: https://github.com/MrHuxu/leetcode/blob/master/problems/695_max-area-of-island/index.js
[1391]: https://leetcode.com/problems/count-binary-substrings/
[1392]: https://github.com/MrHuxu/leetcode/blob/master/problems/696_count-binary-substrings/index.js
[1393]: https://leetcode.com/problems/degree-of-an-array/
[1394]: https://github.com/MrHuxu/leetcode/blob/master/problems/697_degree-of-an-array/index.js
[1395]: https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
[1396]: https://github.com/MrHuxu/leetcode/blob/master/problems/698_partition-to-k-equal-sum-subsets/index.js
[1423]: https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
[1424]: https://github.com/MrHuxu/leetcode/blob/master/problems/712_minimum-ascii-delete-sum-for-two-strings/index.js
[1425]: https://leetcode.com/problems/subarray-product-less-than-k/
[1426]: https://github.com/MrHuxu/leetcode/blob/master/problems/713_subarray-product-less-than-k/index.js
[1427]: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
[1428]: https://github.com/MrHuxu/leetcode/blob/master/problems/714_best-time-to-buy-and-sell-stock-with-transaction-fee/index.js
[1433]: https://leetcode.com/problems/1-bit-and-2-bit-characters/
[1434]: https://github.com/MrHuxu/leetcode/blob/master/problems/717_1-bit-and-2-bit-characters/index.js
[1435]: https://leetcode.com/problems/maximum-length-of-repeated-subarray/
[1436]: https://github.com/MrHuxu/leetcode/blob/master/problems/718_maximum-length-of-repeated-subarray/index.js
[1439]: https://leetcode.com/problems/longest-word-in-dictionary/
[1440]: https://github.com/MrHuxu/leetcode/blob/master/problems/720_longest-word-in-dictionary/index.js
[1441]: https://leetcode.com/problems/accounts-merge/
[1442]: https://github.com/MrHuxu/leetcode/blob/master/problems/721_accounts-merge/index.js
[1443]: https://leetcode.com/problems/remove-comments/
[1444]: https://github.com/MrHuxu/leetcode/blob/master/problems/722_remove-comments/index.js
[1447]: https://leetcode.com/problems/find-pivot-index/
[1448]: https://github.com/MrHuxu/leetcode/blob/master/problems/724_find-pivot-index/index.js
[1451]: https://leetcode.com/problems/number-of-atoms/
[1452]: https://github.com/MrHuxu/leetcode/blob/master/problems/726_number-of-atoms/index.js
[1455]: https://leetcode.com/problems/self-dividing-numbers/
[1456]: https://github.com/MrHuxu/leetcode/blob/master/problems/728_self-dividing-numbers/index.js
[1467]: https://leetcode.com/problems/sentence-similarity/
[1468]: https://github.com/MrHuxu/leetcode/blob/master/problems/734_sentence-similarity/index.js
[1469]: https://leetcode.com/problems/asteroid-collision/
[1470]: https://github.com/MrHuxu/leetcode/blob/master/problems/735_asteroid-collision/index.js
[1477]: https://leetcode.com/problems/daily-temperatures/
[1478]: https://github.com/MrHuxu/leetcode/blob/master/problems/739_daily-temperatures/index.js
[1479]: https://leetcode.com/problems/delete-and-earn/
[1480]: https://github.com/MrHuxu/leetcode/blob/master/problems/740_delete-and-earn/index.js
[1483]: https://leetcode.com/problems/closest-leaf-in-a-binary-tree/
[1484]: https://github.com/MrHuxu/leetcode/blob/master/problems/742_closest-leaf-in-a-binary-tree/index.js
[1485]: https://leetcode.com/problems/network-delay-time/
[1486]: https://github.com/MrHuxu/leetcode/blob/master/problems/743_network-delay-time/index.js
[1487]: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
[1488]: https://github.com/MrHuxu/leetcode/blob/master/problems/744_find-smallest-letter-greater-than-target/index.js
[1491]: https://leetcode.com/problems/min-cost-climbing-stairs/
[1492]: https://github.com/MrHuxu/leetcode/blob/master/problems/746_min-cost-climbing-stairs/index.js
[1493]: https://leetcode.com/problems/largest-number-at-least-twice-of-others/
[1494]: https://github.com/MrHuxu/leetcode/blob/master/problems/747_largest-number-at-least-twice-of-others/index.js
[1495]: https://leetcode.com/problems/shortest-completing-word/
[1496]: https://github.com/MrHuxu/leetcode/blob/master/problems/748_shortest-completing-word/index.js
[1503]: https://leetcode.com/problems/open-the-lock/
[1504]: https://github.com/MrHuxu/leetcode/blob/master/problems/752_open-the-lock/index.js
[1507]: https://leetcode.com/problems/reach-a-number/
[1508]: https://github.com/MrHuxu/leetcode/blob/master/problems/754_reach-a-number/index.js
[1511]: https://leetcode.com/problems/pyramid-transition-matrix/
[1512]: https://github.com/MrHuxu/leetcode/blob/master/problems/756_pyramid-transition-matrix/index.js
[1519]: https://leetcode.com/problems/find-anagram-mappings/
[1520]: https://github.com/MrHuxu/leetcode/blob/master/problems/760_find-anagram-mappings/index.js
[1523]: https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
[1524]: https://github.com/MrHuxu/leetcode/blob/master/problems/762_prime-number-of-set-bits-in-binary-representation/index.js
[1525]: https://leetcode.com/problems/partition-labels/
[1526]: https://github.com/MrHuxu/leetcode/blob/master/problems/763_partition-labels/index.js
[1527]: https://leetcode.com/problems/largest-plus-sign/
[1528]: https://github.com/MrHuxu/leetcode/blob/master/problems/764_largest-plus-sign/index.js
[1531]: https://leetcode.com/problems/toeplitz-matrix/
[1532]: https://github.com/MrHuxu/leetcode/blob/master/problems/766_toeplitz-matrix/index.js
[1533]: https://leetcode.com/problems/reorganize-string/
[1534]: https://github.com/MrHuxu/leetcode/blob/master/problems/767_reorganize-string/index.js
[1537]: https://leetcode.com/problems/max-chunks-to-make-sorted/
[1538]: https://github.com/MrHuxu/leetcode/blob/master/problems/769_max-chunks-to-make-sorted/index.js
[1541]: https://leetcode.com/problems/jewels-and-stones/
[1542]: https://github.com/MrHuxu/leetcode/blob/master/problems/771_jewels-and-stones/index.js
[1549]: https://leetcode.com/problems/global-and-local-inversions/
[1550]: https://github.com/MrHuxu/leetcode/blob/master/problems/775_global-and-local-inversions/index.js