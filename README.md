# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for (j = i; j > 0 && arr[j - 1] > val; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

---

Answer:

The worst case, which is $\Theta(n^2)$, occurs when, for each iteration of the outer loop in the above code, there needs to be as many swaps (iterations of the inner loop) as there are elements in the array. In other words, there are _n_ swaps occurring _n_ times.

I would venture to guess that, on average, there are $\frac{n}{2}$ swaps per element in the list, meaning that the *i*th element in the list has that many elements in the sorted part that it needs to swap with. This means that there would be $\frac{n^2}{2}$ operations. Neglecting constants, the average time complexity would be asymptotically the same as the worst case: $\Theta(n^2)$.

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**
