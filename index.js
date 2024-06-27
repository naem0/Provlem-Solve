
var lengthOfLongestSubstring = function (s) {
    let sArray =[]
    for (let i = 0; i < s.length; i++) {
        sArray.push(s[i]);
        sArray.find((element) => {
            if (element != s[i]) {
                
            }
        });
    };
    return sArray
};
// console.log(lengthOfLongestSubstring('hellllo'))

// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

var findMedianSortedArrays = function(nums1, nums2) {
    const newArray = [...nums1,...nums2].sort(function(a, b){return a-b});
    console.log(newArray)
    const n = newArray.length;
    if (n%2) {
        const m =Math.floor(n/2);
        return (newArray[m]);
    }else{
        const midal = newArray[(n/2)-1]+newArray[(n/2)];
        return midal/2;
    }
};
// console.log(findMedianSortedArrays([3], [-2,-1]))

var myAtoi = function(s) {
    let regex = /^[a-zA-Z]+$/;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (regex.test(element)) {
            break
        }
        if (element==0 && s[i-1]==0) {
            console.log("fast 0")
        }
        console.log(element)
    }
};
// myAtoi('01337c0d3')

// Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    const xString = x.toString();
    const XArray = xString.split('');
    const number = XArray.join('');
    const reversed = XArray.reverse().join('');
    if (number==reversed){
        return true;
    }
    else{
        return false;
    }
};

// console.log(isPalindrome(101))


// Reverse Integer

var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    const reversedString = x.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString) * Math.sign(x);
    if (reversedNumber < INT_MIN || reversedNumber > INT_MAX) {
        return 0;
    }
    return reversedNumber;
};
// console.log(reverse(-34123));

var intToRoman  = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols =['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV','I'];

    let rasult = ""
    for (let i = 0; i < values.length; i++) {
        while ( num >= values[i]) {
            rasult += symbols[i];
            num -= values[i];
        }
    }
    return rasult
};
// console.log(intToRoman(10))

var mergeKLists = function(lists) {
    let newArray=[]
    for (let i = 0; i < lists.length; i++) {
        const nextedArray = lists[i];
        for (let j = 0; j < nextedArray.length; j++) {
            const element = nextedArray[j];
            newArray.push(element)
        }
    }
    return newArray.sort(function(a, b){return a-b})
};
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))