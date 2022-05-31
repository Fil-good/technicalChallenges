// write your code in Java SE 8

class Solution {
    public int solution(String S) {
        int numberOfPatches = 0;
        for(int i=0, n=S.length();i<n;i++) {
            if(S.charAt(i)=='X') {
                numberOfPatches += 1;
                    i+=2;
            }
        }


        return numberOfPatches;
