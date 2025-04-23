
function path(arr){
    let obj={};
    
    for(let a of arr){
      let path=a["path"].split('.');
      let val=a["value"];
      let temp=obj;

      for(let b=0;b<path;b++){
         console.log(a[b]);
      }
 
    }
    
}
const paths = [
    { path: "user.name.first", value: "John" }
  ];
 path(paths); 
  
//   output:
//   {
//     user: {
//       name: {
//         first: "John",
//         last: "Doe"
//       },
//       age: 30
//     }
//   }
