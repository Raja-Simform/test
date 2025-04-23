


// getElementsByTagName(document.body, 'a'); 

function getElementsByTagName1(node, tagName, arr = []) {
    if (!node || typeof node !== "object") {
      return arr;
    }

    if (node.tagName && node.tagName.toLowerCase() === tagName.toLowerCase()) {
      arr.push(node);
    }
  
    if (node.children && typeof node.children === "object") {
      for (let i = 0; i < node.children.length; i++) {
        getElementsByTagName1(node.children[i], tagName, arr);
      }
    }
  
    return arr;
  }
  