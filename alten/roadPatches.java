// write your code in Java SE 8

// instruction: "..XX..X", where X = pithole, . = good road
// road repair machine can fix 3 subsequent parts of the road
// function needs to return the number of patches are needed to repair all pitholes

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
  }
}
