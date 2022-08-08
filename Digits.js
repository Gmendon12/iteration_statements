const Find_Digits = (N) => 
{
	let count = 0;
  while(N != 0){
    count++
    N = parseInt(N/10);
    
  }
  return count;

};