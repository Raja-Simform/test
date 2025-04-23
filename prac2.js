 function path(arr){
     let obj={};
     for(let a of arr){
       let pathstr=a["path"].split('.');
       let value=a["value"];
       let temp=obj;
       for(let b=0;b<pathstr.length-1;b++){
        if(!temp[pathstr[b]]){
         temp[pathstr[b]]={}
        }
        temp=temp[pathstr[b]];        
        }
        temp[pathstr[pathstr.length-1]]=value;
     }
     return obj;
  }

  const paths = [
    { path: "user.name.first", value: "John" },
    { path: "user.name.last", value: "Doe" },
    { path: "user.age", value: 30 }
  ];
  console.log(path(paths));
  
  // output:
  // {
  //   user: {
  //     name: {
  //       first: "John",
  //       last: "Doe"
  //     },
  //     age: 30
  //   }
  // }
