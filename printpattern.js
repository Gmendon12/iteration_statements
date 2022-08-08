const Print_pattern = (N) => 
{
  let i;
  let j;
  for (i=0;i<N;i++){
    let sum = "";
    for (j=0;j<=i;j++){
      sum = sum + "*"
    }
    console.log(sum);
  }
};