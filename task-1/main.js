function disk(n) {
   let a = parseInt(n/100)
   let b = parseInt(n/10)%10
   let c =n%10
   
    console.log(a*100 + (b/2)*30 + c*2)
}
disk(345)
