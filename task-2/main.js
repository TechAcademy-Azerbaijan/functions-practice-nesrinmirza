function sade (n) {
    count = 0;
    for (let i = 2; i <= n; i++) {
        if (n%i==0) {
            count++;
        }
    }
    if (count>1) {
        console.log("NO");
    }
    else if (count==1) {
      console.log("YES");  
    }
}
sade(18)
