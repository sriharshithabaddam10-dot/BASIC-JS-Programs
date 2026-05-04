function sumOfDigits(num){
    if(num<0){
        num=-num;
    }
    let sum=0;
    while(num>0){
        let rem=num%10;
        sum=sum+rem;
        num=Math.floor(num/10);
    }
    return sum;
}
console.log(sumOfDigits(-1234));