function chunk(arr,n){
    let count=0;
    let ans=[];
    let temp=[];
    for (let a=0;a<arr.length;a++){
      if(count<n){
        temp.push(arr[a]);
        count++;
      }
      else{
         count=1;
         ans.push(temp);
         temp=[arr[a]];
      }
    }
    if(temp.length>0){
        ans.push(temp);
    }
    return ans;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(arr,3))


// output: [[1, 2, 3], [4, 5, 6], [7]]