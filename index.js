
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
console.log(findMedianSortedArrays([3], [-2,-1]))
