var lengthOfLongestSubstring = function(s) {
    let ans = 0, l = 0, r = 0;
    let n = s.length;
    let map = new Array(256).fill(-1);
    console.log(map);
    while (r < n) {
        console.log("r>>",r);
        console.log("l>>",l);
        console.log("s.charCodeAt(r)>>",s.charCodeAt(r));
        if (map[s.charCodeAt(r)] != -1) {
            l = Math.max(map[s.charCodeAt(r)] + 1, l);
            console.log(">>insde the if l>>",l);
        }
        map[s.charCodeAt(r)] = r;
        ans = Math.max(ans, r - l + 1);
        console.log("ans>>",ans);
        r++;
    }
    return ans;
};

let reutrn = lengthOfLongestSubstring("davdef");
console.log(reutrn);