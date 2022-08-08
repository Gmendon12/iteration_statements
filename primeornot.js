const Prime_Check = (N) => 
{
	 for (var i=2; i<N; i++)
	 {
	   if(N % i !== 0){
	     return "YES";
	   }
	   else
	   {
	     return "NO" ;
	   }
	 }
};