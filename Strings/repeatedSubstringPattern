Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
---------------------------------------------------------------------------------
JavaScript	
1
/**
2
 * @param {string} s
3
 * @return {boolean}
4
 */
5
var repeatedSubstringPattern = function(s) {
6
    if(s.length==0) return false;
7
    
8
      for(var i = 1; i <= s.length/2; i++){
9
        let bool = true
10
        let str = s.substring(0,i)
11
​
12
        for(var j = 0; j < s.length; j = j+i){
13
            let cmp = s.substring(j,j+i)
14
            if(str !== cmp){
15
                bool = false
16
                break
17
            }
18
        }
19
        if(bool) return true
20
    }
21
    
22
    return false
23
    
24
};


//return (s+s).substring(1, 2 * s.length - 1).indexOf(s) >= 0;
