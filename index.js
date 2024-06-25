
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
    const XArray= xString.split('');
    const number = XArray.join('');
    const reversed = XArray.reverse().join('');
    if (number==reversed){
        return true;
    }
    else{
        return false;
    }
};

console.log(isPalindrome(101))
