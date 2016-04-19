/**
 * first of all, run this command at the console of leetcode problem set page
 * https://leetcode.com/problemset/algorithms/
 * to get all the links of the ac questions

 * JSON.stringify($.map($('span.ac'), span => $(span).parents('tr').children('td')[2].children[0].href).reverse());

 * then copy and paste the string here
 * and use the list to generate table used in README.md
 */

var linkStr = '["https://leetcode.com/problems/two-sum/","https://leetcode.com/problems/add-two-numbers/","https://leetcode.com/problems/longest-substring-without-repeating-characters/","https://leetcode.com/problems/longest-palindromic-substring/","https://leetcode.com/problems/zigzag-conversion/","https://leetcode.com/problems/reverse-integer/","https://leetcode.com/problems/string-to-integer-atoi/","https://leetcode.com/problems/palindrome-number/","https://leetcode.com/problems/container-with-most-water/","https://leetcode.com/problems/longest-common-prefix/","https://leetcode.com/problems/3sum/","https://leetcode.com/problems/3sum-closest/","https://leetcode.com/problems/letter-combinations-of-a-phone-number/","https://leetcode.com/problems/4sum/","https://leetcode.com/problems/remove-nth-node-from-end-of-list/","https://leetcode.com/problems/valid-parentheses/","https://leetcode.com/problems/merge-two-sorted-lists/","https://leetcode.com/problems/generate-parentheses/","https://leetcode.com/problems/swap-nodes-in-pairs/","https://leetcode.com/problems/remove-duplicates-from-sorted-array/","https://leetcode.com/problems/remove-element/","https://leetcode.com/problems/implement-strstr/","https://leetcode.com/problems/divide-two-integers/","https://leetcode.com/problems/search-for-a-range/","https://leetcode.com/problems/search-insert-position/","https://leetcode.com/problems/count-and-say/","https://leetcode.com/problems/combination-sum/","https://leetcode.com/problems/first-missing-positive/","https://leetcode.com/problems/permutations/","https://leetcode.com/problems/rotate-image/","https://leetcode.com/problems/maximum-subarray/","https://leetcode.com/problems/spiral-matrix/","https://leetcode.com/problems/jump-game/","https://leetcode.com/problems/length-of-last-word/","https://leetcode.com/problems/spiral-matrix-ii/","https://leetcode.com/problems/permutation-sequence/","https://leetcode.com/problems/rotate-list/","https://leetcode.com/problems/unique-paths/","https://leetcode.com/problems/unique-paths-ii/","https://leetcode.com/problems/minimum-path-sum/","https://leetcode.com/problems/simplify-path/","https://leetcode.com/problems/set-matrix-zeroes/","https://leetcode.com/problems/sort-colors/","https://leetcode.com/problems/combinations/","https://leetcode.com/problems/subsets/","https://leetcode.com/problems/word-search/","https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/","https://leetcode.com/problems/remove-duplicates-from-sorted-list/","https://leetcode.com/problems/merge-sorted-array/","https://leetcode.com/problems/gray-code/","https://leetcode.com/problems/subsets-ii/","https://leetcode.com/problems/decode-ways/","https://leetcode.com/problems/reverse-linked-list-ii/","https://leetcode.com/problems/restore-ip-addresses/","https://leetcode.com/problems/binary-tree-inorder-traversal/","https://leetcode.com/problems/symmetric-tree/","https://leetcode.com/problems/binary-tree-level-order-traversal/","https://leetcode.com/problems/minimum-depth-of-binary-tree/","https://leetcode.com/problems/path-sum/","https://leetcode.com/problems/path-sum-ii/","https://leetcode.com/problems/flatten-binary-tree-to-linked-list/","https://leetcode.com/problems/populating-next-right-pointers-in-each-node/","https://leetcode.com/problems/pascals-triangle/","https://leetcode.com/problems/pascals-triangle-ii/","https://leetcode.com/problems/triangle/","https://leetcode.com/problems/best-time-to-buy-and-sell-stock/","https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/","https://leetcode.com/problems/valid-palindrome/","https://leetcode.com/problems/sum-root-to-leaf-numbers/","https://leetcode.com/problems/surrounded-regions/","https://leetcode.com/problems/palindrome-partitioning/","https://leetcode.com/problems/gas-station/","https://leetcode.com/problems/single-number/","https://leetcode.com/problems/single-number-ii/","https://leetcode.com/problems/word-break/","https://leetcode.com/problems/linked-list-cycle/","https://leetcode.com/problems/linked-list-cycle-ii/","https://leetcode.com/problems/reorder-list/","https://leetcode.com/problems/binary-tree-preorder-traversal/","https://leetcode.com/problems/binary-tree-postorder-traversal/","https://leetcode.com/problems/insertion-sort-list/","https://leetcode.com/problems/evaluate-reverse-polish-notation/","https://leetcode.com/problems/reverse-words-in-a-string/","https://leetcode.com/problems/maximum-product-subarray/","https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/","https://leetcode.com/problems/min-stack/","https://leetcode.com/problems/intersection-of-two-linked-lists/","https://leetcode.com/problems/find-peak-element/","https://leetcode.com/problems/compare-version-numbers/","https://leetcode.com/problems/excel-sheet-column-title/","https://leetcode.com/problems/majority-element/","https://leetcode.com/problems/excel-sheet-column-number/","https://leetcode.com/problems/factorial-trailing-zeroes/","https://leetcode.com/problems/largest-number/","https://leetcode.com/problems/repeated-dna-sequences/","https://leetcode.com/problems/rotate-array/","https://leetcode.com/problems/reverse-bits/","https://leetcode.com/problems/number-of-1-bits/","https://leetcode.com/problems/house-robber/","https://leetcode.com/problems/binary-tree-right-side-view/","https://leetcode.com/problems/number-of-islands/","https://leetcode.com/problems/bitwise-and-of-numbers-range/","https://leetcode.com/problems/happy-number/","https://leetcode.com/problems/remove-linked-list-elements/","https://leetcode.com/problems/count-primes/","https://leetcode.com/problems/isomorphic-strings/","https://leetcode.com/problems/reverse-linked-list/","https://leetcode.com/problems/minimum-size-subarray-sum/","https://leetcode.com/problems/kth-largest-element-in-an-array/","https://leetcode.com/problems/combination-sum-iii/","https://leetcode.com/problems/contains-duplicate/","https://leetcode.com/problems/contains-duplicate-ii/","https://leetcode.com/problems/contains-duplicate-iii/","https://leetcode.com/problems/maximal-square/","https://leetcode.com/problems/rectangle-area/","https://leetcode.com/problems/basic-calculator/","https://leetcode.com/problems/invert-binary-tree/","https://leetcode.com/problems/basic-calculator-ii/","https://leetcode.com/problems/summary-ranges/","https://leetcode.com/problems/power-of-two/"]';

var request = require('request');
var cheerio = require('cheerio');

var generatePromise = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url)
    .on('response', response => {
      response.setEncoding('utf8');
      var chunk = '';
      response.on('data', data => chunk += data );
      response.on('end', () => {
        var $ = cheerio.load(chunk);
        var sequence = $('.question-title')[0].children[1].children[0].data.split('. ')[0];
        var title = $('.question-title')[0].children[1].children[0].data.split('. ')[1];
        var difficulty = $('.total-submit.text-info')[1].children[1].children[0].data;
        
        var urlArr = url.split('/'), submitSequence = sequence;
        for (var i = 0, times = 3 - sequence.length; i < times; ++i) {
          submitSequence = '0' + submitSequence;
        }
        var submission = `${submitSequence}_${urlArr[urlArr.length - 2]}.js`;
        
        resolve({
          sequence: sequence,
          title: title,
          difficulty: difficulty,
          submission: submission,
          url: url
        })
      });
    });
  });
};

var links = JSON.parse(linkStr);
var promiseSet = [];
for (var i = 0; i < links.length; ++i) {
  promiseSet.push(generatePromise(links[i]));
}

Promise.all(promiseSet)
.then((results) => {
  var tableItems = [];
  var links = [];
  
  tableItems.push('| Sequence      | Title         | Difficulty  | Submission  |\n| ------------- |:------------- | :----------:| :---------- |');
  results.forEach(result => {
    var problemUrlNum = parseInt(result.sequence) * 2 - 1;
    var submissionUrlNum = parseInt(result.sequence) * 2;
    
    tableItems.push(`\n| ${result.sequence} | [${result.title}][${problemUrlNum}] | ${result.difficulty} | [${result.submission}][${submissionUrlNum}] |`);
    links.push(
      `\n[${problemUrlNum}]: ${result.url}\n[${submissionUrlNum}]: https://github.com/MrHuxu/leetcode/blob/master/submissions/${result.submission}`
    );
  });
  
  console.log(tableItems.join(''));
  console.log(links.join(''));
});