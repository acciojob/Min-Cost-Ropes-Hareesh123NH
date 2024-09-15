function mincost(arr)
{ 
//write your code here
	arr.sort((a,b)=> a-b);
	let result=0;
	while(arr.length>=2){
		let a1=arr.shift();
		let a2=arr.shift();
		let cost=a2+a1;
		result+=cost;
		arr.push(cost);
		arr.sort((a,b)=>a-b);
	}

	return result;
// return the min cost
  
}

module.exports=mincost;
