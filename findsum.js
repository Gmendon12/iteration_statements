const findSum = (n) => {
    let sum = 0;
    let even = 2;
    while (even <= n){
      sum = sum + even;
      even += 2;
    }
    return sum;
};