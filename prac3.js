

function getElementsByTagName1(node,tagname,arr=[]){
    if(node.children===null || typeof(node.children)!=="object"){
        return;
    }
    else if(node.children==='a'){
        arr.push(node.chiren);
        return;
    }
    else{
       getElementsByTagName1(node.children,tagname);
    }

}
// getElementsByTagName(document.body, 'a'); 