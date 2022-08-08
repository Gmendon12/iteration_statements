const Find_Five = (N) => 
{
	 let count = 0;
	 while (N != 0){
	   five = N%10;
	   N=parseInt(N/10)
	   if(five == 5){
	     count=count+1;
	   }
	 }
	 return count;
};
