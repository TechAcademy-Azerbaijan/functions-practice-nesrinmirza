function max (a,b,c,d) {
    if (a>b && a>c && a>d) {
        console.log(a);
    }
    else if (b>a && b>c && b>d) {
        console.log(b);
    }
    else if (c>a && c>b && c>d) {
        console.log(c);
    }
    else {
        console.log(d);
    }
}

max(1,2,3,4)
