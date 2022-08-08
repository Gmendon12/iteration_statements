
const Number_Sum = (N) => 
{
	let sum = 0;
	while(N!=0){
	  let num = N%10;
	  N=parseInt(N/10);
	  sum = sum + num;
	}
	return sum;
};