/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

function binarySearch(array, n) {
    let left = 0
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if (array[mid] === n) {
            return mid;
        } else if (array[mid] > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return null;

}

console.log(binarySearch([1, 3, 16, 22, 31, 33, 34], 31))