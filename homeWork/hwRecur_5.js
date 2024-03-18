function isNonEmptyObject (obj) {
    if(typeof obj !== 'object' || obj === null) {
        return false
    }
    return true
}


function depth(obj) {
    if(!isNonEmptyObject(obj)) {
        return 0
    }
    const arrObj = Object.values(obj);
    // console.log(arrObj)
     const depths = arrObj.map(val => depth(val));
     return depths + 1
}

const obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: {
      f: {
        g: 4,
        h: 5,
      },
    },
    i: 6,
  };
  
  // обратились три раза и дошли до примитива:
  // obj.e.f.g
  
  console.log(depth(obj)); // 3


  function sumTheTreeValues(root ) {
    console.log(root)
    if(root === null ) {
        return 0;
    }

     return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
  }


  
 // console.log(sumTheTreeValues(root)); // 19


 function maxSum(root) {
    console.log(root, 'root')
    if(root === null) {
        return 0
    }
    if(root.left === null && root.right === null) {
        return root.value
    }
    if(root.left !== null && root.right === null) {
        return maxSum(root.left) + root.value
    }
    if(root.left === null && root.right !== null) {
        return maxSum(root.right) + root.value
    }
    if(root.left !== null && root.right !== null) {
        return Math.max(maxSum(root.right), maxSum(root.left)) + root.value
    }
 }
  
  const root = {
    value: 1, // ← 
    left: {
      value: 5,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
    right: {
      value: 2, // ←
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 9, // ←
        left: null,
        right: null,
      },
    },
  };
  
  console.log(maxSum(root)); // 1 + 2 + 9 === 12




//deepCompare



  function deepCompare(o1, o2) {
    if(typeof o1 !== 'object' || typeof o2 !== 'object') {
        return o1 === o2
    }

    // if(Object.keys(o1).length !== Object.keys(o2).length) {
    //     return false
    // }
    
    
    // for(let key in o1) {
    //     if(!(key in o2) || !deepCompare(o1[key], o2[key])) {
    //         return false
    //     }
    // }
    // return true
    }

  

  const o1 = {
    x: 1,
    y: {
      z: "qwe",
      m: {
        t: false,
      }
    },
  };
  
  const o2 = {
    x: 1,
    y: {
      z: "qwe",
      m: {
        t: false,
      }
    },
  };
//   console.log(compareKey(o1, o2), '333')
  console.log(deepCompare(o1, o2)); // true
