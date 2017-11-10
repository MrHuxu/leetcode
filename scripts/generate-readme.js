/**
 * first of all, goto the the problem set page of LeetCode and set the pagination to show all rows in one page
 * then run this command at the console
 * https://leetcode.com/problemset/algorithms/
 * to get all the links of the ac questions

 * JSON.stringify($.map($('.text-success.fa.fa-check'), span => $(span).parents('tr').children('td')[2].children[0].children[0].href));

 * then copy and paste the string here
 * and use the list to generate table used in README.md
 */

var linkStr = '["https://leetcode.com/problems/two-sum","https://leetcode.com/problems/add-two-numbers","https://leetcode.com/problems/longest-substring-without-repeating-characters","https://leetcode.com/problems/longest-palindromic-substring","https://leetcode.com/problems/zigzag-conversion","https://leetcode.com/problems/reverse-integer","https://leetcode.com/problems/string-to-integer-atoi","https://leetcode.com/problems/palindrome-number","https://leetcode.com/problems/regular-expression-matching","https://leetcode.com/problems/container-with-most-water","https://leetcode.com/problems/integer-to-roman","https://leetcode.com/problems/roman-to-integer","https://leetcode.com/problems/longest-common-prefix","https://leetcode.com/problems/3sum","https://leetcode.com/problems/3sum-closest","https://leetcode.com/problems/letter-combinations-of-a-phone-number","https://leetcode.com/problems/4sum","https://leetcode.com/problems/remove-nth-node-from-end-of-list","https://leetcode.com/problems/valid-parentheses","https://leetcode.com/problems/merge-two-sorted-lists","https://leetcode.com/problems/generate-parentheses","https://leetcode.com/problems/merge-k-sorted-lists","https://leetcode.com/problems/swap-nodes-in-pairs","https://leetcode.com/problems/remove-duplicates-from-sorted-array","https://leetcode.com/problems/remove-element","https://leetcode.com/problems/implement-strstr","https://leetcode.com/problems/divide-two-integers","https://leetcode.com/problems/search-for-a-range","https://leetcode.com/problems/search-insert-position","https://leetcode.com/problems/count-and-say","https://leetcode.com/problems/combination-sum","https://leetcode.com/problems/first-missing-positive","https://leetcode.com/problems/permutations","https://leetcode.com/problems/rotate-image","https://leetcode.com/problems/group-anagrams","https://leetcode.com/problems/maximum-subarray","https://leetcode.com/problems/spiral-matrix","https://leetcode.com/problems/jump-game","https://leetcode.com/problems/length-of-last-word","https://leetcode.com/problems/spiral-matrix-ii","https://leetcode.com/problems/permutation-sequence","https://leetcode.com/problems/rotate-list","https://leetcode.com/problems/unique-paths","https://leetcode.com/problems/unique-paths-ii","https://leetcode.com/problems/minimum-path-sum","https://leetcode.com/problems/text-justification","https://leetcode.com/problems/sqrtx","https://leetcode.com/problems/simplify-path","https://leetcode.com/problems/set-matrix-zeroes","https://leetcode.com/problems/sort-colors","https://leetcode.com/problems/combinations","https://leetcode.com/problems/subsets","https://leetcode.com/problems/word-search","https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii","https://leetcode.com/problems/remove-duplicates-from-sorted-list","https://leetcode.com/problems/merge-sorted-array","https://leetcode.com/problems/gray-code","https://leetcode.com/problems/subsets-ii","https://leetcode.com/problems/decode-ways","https://leetcode.com/problems/reverse-linked-list-ii","https://leetcode.com/problems/restore-ip-addresses","https://leetcode.com/problems/binary-tree-inorder-traversal","https://leetcode.com/problems/validate-binary-search-tree","https://leetcode.com/problems/same-tree","https://leetcode.com/problems/symmetric-tree","https://leetcode.com/problems/binary-tree-level-order-traversal","https://leetcode.com/problems/minimum-depth-of-binary-tree","https://leetcode.com/problems/path-sum","https://leetcode.com/problems/path-sum-ii","https://leetcode.com/problems/flatten-binary-tree-to-linked-list","https://leetcode.com/problems/populating-next-right-pointers-in-each-node","https://leetcode.com/problems/pascals-triangle","https://leetcode.com/problems/pascals-triangle-ii","https://leetcode.com/problems/triangle","https://leetcode.com/problems/best-time-to-buy-and-sell-stock","https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii","https://leetcode.com/problems/valid-palindrome","https://leetcode.com/problems/sum-root-to-leaf-numbers","https://leetcode.com/problems/surrounded-regions","https://leetcode.com/problems/palindrome-partitioning","https://leetcode.com/problems/gas-station","https://leetcode.com/problems/single-number","https://leetcode.com/problems/single-number-ii","https://leetcode.com/problems/word-break","https://leetcode.com/problems/linked-list-cycle","https://leetcode.com/problems/linked-list-cycle-ii","https://leetcode.com/problems/reorder-list","https://leetcode.com/problems/binary-tree-preorder-traversal","https://leetcode.com/problems/binary-tree-postorder-traversal","https://leetcode.com/problems/insertion-sort-list","https://leetcode.com/problems/evaluate-reverse-polish-notation","https://leetcode.com/problems/reverse-words-in-a-string","https://leetcode.com/problems/maximum-product-subarray","https://leetcode.com/problems/find-minimum-in-rotated-sorted-array","https://leetcode.com/problems/min-stack","https://leetcode.com/problems/intersection-of-two-linked-lists","https://leetcode.com/problems/find-peak-element","https://leetcode.com/problems/compare-version-numbers","https://leetcode.com/problems/excel-sheet-column-title","https://leetcode.com/problems/majority-element","https://leetcode.com/problems/excel-sheet-column-number","https://leetcode.com/problems/factorial-trailing-zeroes","https://leetcode.com/problems/largest-number","https://leetcode.com/problems/repeated-dna-sequences","https://leetcode.com/problems/rotate-array","https://leetcode.com/problems/reverse-bits","https://leetcode.com/problems/number-of-1-bits","https://leetcode.com/problems/house-robber","https://leetcode.com/problems/binary-tree-right-side-view","https://leetcode.com/problems/number-of-islands","https://leetcode.com/problems/bitwise-and-of-numbers-range","https://leetcode.com/problems/happy-number","https://leetcode.com/problems/remove-linked-list-elements","https://leetcode.com/problems/count-primes","https://leetcode.com/problems/isomorphic-strings","https://leetcode.com/problems/reverse-linked-list","https://leetcode.com/problems/course-schedule","https://leetcode.com/problems/minimum-size-subarray-sum","https://leetcode.com/problems/kth-largest-element-in-an-array","https://leetcode.com/problems/combination-sum-iii","https://leetcode.com/problems/contains-duplicate","https://leetcode.com/problems/contains-duplicate-ii","https://leetcode.com/problems/contains-duplicate-iii","https://leetcode.com/problems/maximal-square","https://leetcode.com/problems/rectangle-area","https://leetcode.com/problems/basic-calculator","https://leetcode.com/problems/invert-binary-tree","https://leetcode.com/problems/basic-calculator-ii","https://leetcode.com/problems/summary-ranges","https://leetcode.com/problems/majority-element-ii","https://leetcode.com/problems/power-of-two","https://leetcode.com/problems/palindrome-linked-list","https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree","https://leetcode.com/problems/delete-node-in-a-linked-list","https://leetcode.com/problems/product-of-array-except-self","https://leetcode.com/problems/search-a-2d-matrix-ii","https://leetcode.com/problems/valid-anagram","https://leetcode.com/problems/binary-tree-paths","https://leetcode.com/problems/add-digits","https://leetcode.com/problems/ugly-number","https://leetcode.com/problems/ugly-number-ii","https://leetcode.com/problems/missing-number","https://leetcode.com/problems/h-index","https://leetcode.com/problems/h-index-ii","https://leetcode.com/problems/first-bad-version","https://leetcode.com/problems/perfect-squares","https://leetcode.com/problems/move-zeroes","https://leetcode.com/problems/game-of-life","https://leetcode.com/problems/word-pattern","https://leetcode.com/problems/nim-game","https://leetcode.com/problems/bulls-and-cows","https://leetcode.com/problems/longest-increasing-subsequence","https://leetcode.com/problems/range-sum-query-immutable","https://leetcode.com/problems/range-sum-query-2d-immutable","https://leetcode.com/problems/additive-number","https://leetcode.com/problems/range-sum-query-mutable","https://leetcode.com/problems/maximum-product-of-word-lengths","https://leetcode.com/problems/coin-change","https://leetcode.com/problems/power-of-three","https://leetcode.com/problems/odd-even-linked-list","https://leetcode.com/problems/reconstruct-itinerary","https://leetcode.com/problems/increasing-triplet-subsequence","https://leetcode.com/problems/counting-bits","https://leetcode.com/problems/integer-break","https://leetcode.com/problems/reverse-string","https://leetcode.com/problems/reverse-vowels-of-a-string","https://leetcode.com/problems/top-k-frequent-elements","https://leetcode.com/problems/intersection-of-two-arrays","https://leetcode.com/problems/intersection-of-two-arrays-ii","https://leetcode.com/problems/valid-perfect-square","https://leetcode.com/problems/largest-divisible-subset","https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix","https://leetcode.com/problems/ransom-note","https://leetcode.com/problems/lexicographical-numbers","https://leetcode.com/problems/first-unique-character-in-a-string","https://leetcode.com/problems/longest-absolute-file-path","https://leetcode.com/problems/find-the-difference","https://leetcode.com/problems/is-subsequence","https://leetcode.com/problems/decode-string","https://leetcode.com/problems/integer-replacement","https://leetcode.com/problems/evaluate-division","https://leetcode.com/problems/binary-watch","https://leetcode.com/problems/sum-of-left-leaves","https://leetcode.com/problems/convert-a-number-to-hexadecimal","https://leetcode.com/problems/queue-reconstruction-by-height","https://leetcode.com/problems/longest-palindrome","https://leetcode.com/problems/fizz-buzz","https://leetcode.com/problems/arithmetic-slices","https://leetcode.com/problems/add-strings","https://leetcode.com/problems/partition-equal-subset-sum","https://leetcode.com/problems/pacific-atlantic-water-flow","https://leetcode.com/problems/battleships-in-a-board","https://leetcode.com/problems/reconstruct-original-digits-from-english","https://leetcode.com/problems/number-of-segments-in-a-string","https://leetcode.com/problems/find-all-anagrams-in-a-string","https://leetcode.com/problems/arranging-coins","https://leetcode.com/problems/find-all-duplicates-in-an-array","https://leetcode.com/problems/minimum-moves-to-equal-array-elements","https://leetcode.com/problems/max-consecutive-ones","https://leetcode.com/problems/construct-the-rectangle","https://leetcode.com/problems/target-sum","https://leetcode.com/problems/next-greater-element-i","https://leetcode.com/problems/relative-ranks","https://leetcode.com/problems/most-frequent-subtree-sum","https://leetcode.com/problems/find-bottom-left-tree-value","https://leetcode.com/problems/find-largest-value-in-each-tree-row","https://leetcode.com/problems/detect-capital","https://leetcode.com/problems/minesweeper","https://leetcode.com/problems/minimum-absolute-difference-in-bst","https://leetcode.com/problems/convert-bst-to-greater-tree","https://leetcode.com/problems/minimum-time-difference","https://leetcode.com/problems/01-matrix","https://leetcode.com/problems/subarray-sum-equals-k","https://leetcode.com/problems/array-partition-i","https://leetcode.com/problems/binary-tree-tilt","https://leetcode.com/problems/reshape-the-matrix","https://leetcode.com/problems/permutation-in-string","https://leetcode.com/problems/shortest-unsorted-continuous-subarray","https://leetcode.com/problems/fraction-addition-and-subtraction","https://leetcode.com/problems/valid-square","https://leetcode.com/problems/longest-harmonious-subsequence","https://leetcode.com/problems/merge-two-binary-trees","https://leetcode.com/problems/maximum-length-of-pair-chain","https://leetcode.com/problems/print-binary-tree","https://leetcode.com/problems/maximum-width-of-binary-tree","https://leetcode.com/problems/trim-a-binary-search-tree","https://leetcode.com/problems/maximum-swap","https://leetcode.com/problems/second-minimum-node-in-a-binary-tree","https://leetcode.com/problems/number-of-longest-increasing-subsequence","https://leetcode.com/problems/longest-continuous-increasing-subsequence","https://leetcode.com/problems/implement-magic-dictionary","https://leetcode.com/problems/map-sum-pairs","https://leetcode.com/problems/valid-parenthesis-string","https://leetcode.com/problems/valid-palindrome-ii","https://leetcode.com/problems/baseball-game","https://leetcode.com/problems/repeated-string-match","https://leetcode.com/problems/longest-univalue-path","https://leetcode.com/problems/top-k-frequent-words","https://leetcode.com/problems/binary-number-with-alternating-bits","https://leetcode.com/problems/max-area-of-island","https://leetcode.com/problems/count-binary-substrings","https://leetcode.com/problems/degree-of-an-array","https://leetcode.com/problems/partition-to-k-equal-sum-subsets","https://leetcode.com/problems/subarray-product-less-than-k","https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee","https://leetcode.com/problems/1-bit-and-2-bit-characters","https://leetcode.com/problems/longest-word-in-dictionary","https://leetcode.com/problems/accounts-merge"]';

var request = require('request');
var cheerio = require('cheerio');

var generatePromise = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url).on('response', response => {
      response.setEncoding('utf8');
      var chunk = '';
      response.on('data', data => chunk += data);
      response.on('end', () => {
        try {
          var $ = cheerio.load(chunk);
          var title = $('.question-title')[0].children[1].children[1].children[1].children[0].data.split('. ')[1].split('\n')[0];
          var sequence = $('.question-title')[0].children[1].children[1].children[1].children[0].data.split('. ')[0].trim();
          var difficulty = $('#desktop-side-bar ul.side-bar-list li.list-item')[0].children[1].children[0].data;

          var urlArr = url.split('/'), submitSequence = sequence;
          for (var i = 0, times = 3 - sequence.length; i < times; ++i) {
            submitSequence = '0' + submitSequence;
          }
          var submission = `${submitSequence}_${urlArr[urlArr.length - 1]}.js`;

          resolve({
            url        : url,
            title      : title,
            sequence   : sequence,
            difficulty : difficulty,
            submission : submission
          });
        } catch (e) {
          console.log(e);
          resolve({
            url        : undefined,
            title      : url,
            sequence   : undefined,
            difficulty : undefined,
            submission : undefined
          });
        }
      });
    });
  });
};

var links = JSON.parse(linkStr);
var promiseSet = [];
for (var i = 0; i < links.length; ++i) {
  promiseSet.push(generatePromise(links[i]));
}

Promise.all(promiseSet).then((results) => {
  var tableItems = [];
  var links = [];

  tableItems.push('| Sequence      | Title         | Difficulty  | Submission  |\n| ------------- |:------------- | :----------:| :---------- |');
  results.forEach(result => {
    var problemUrlNum = parseInt(result.sequence) * 2 - 1;
    var submissionUrlNum = parseInt(result.sequence) * 2;

    tableItems.push(`\n| ${result.sequence} | [${result.title}][${problemUrlNum}] | ${result.difficulty} | [${result.submission.split('.')[0]}][${submissionUrlNum}] |`);
    links.push(
      `\n[${problemUrlNum}]: ${result.url}\n[${submissionUrlNum}]: https://github.com/MrHuxu/leetcode/blob/master/problems/${result.submission.split('.')[0]}/index.js`
    );
  });

  console.log(tableItems.join(''));
  console.log(links.join(''));
});
