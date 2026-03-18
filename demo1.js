 export default function IsPalindrome(n) {
    //let s = Math.abs(n).toString();
    let s = "" + n;  //  string
    //let s = n.toString(); // string 
    let len = s.length;

    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - i - 1])
            return false;
    }
    return true;
}






let n = 123221;
if (IsPalindrome(n) === true) {
    console.log("True");
}
else {
    console.log("False");
}