function isNonEmptyObject (obj) {
    if(typeof obj !== 'object') {
        return false;
    }
    return true;
}

// console.log(isNonEmptyObject("qwerty"))
// console.log(isNonEmptyObject({}))
// console.log(isNonEmptyObject(6))
// console.log(isNonEmptyObject(null))
// console.log(isNonEmptyObject(undefined))
// console.log(isNonEmptyObject([6,7,8,9]))

// console.log(isNonEmptyObject({a: 1, b: 2}))

function depth(obj) {
    if(!isNonEmptyObject(obj)) {
        return 0
    }
    const arrObj = Object.values(obj); // берем все значения у первых объектов. Для того что бы в большейшем посчитать сколько объектов-детей в этих значениях.
    console.log('000',arrObj);
    const findDepth = arrObj.map(val => depth(val));
    console.log('022',  findDepth);
    return Math.max(...findDepth) + 1;
}


// 0. для не объектов и пустых объектов вернуть 0
// 1. взять все значения
// 2. для каждого из них посчить глубину ← тут рекурсия
// 3. из глубин найти максимальную
// 4. прибавить 1 и вернуть ответ

const o3 = { // max(0, 1, 1, 1, 2, 2, 0) + 1
    a: 1, // 0
    c : { // 1
        k: 5,
        c: 2,
    },
    c0 : { // 1
        k: 5,
        c: 2,
    },
    c1 : { // 1
        k: 5,
        c: 2,
    },
    k: { // 2
        c: 9,
        k: 6,
        j: {
            y: 4,
            g: 9,
        },
    },
    b: { // 2
        a: 3,
        b: 1,
        c: {
            a: 6,
            s: 7,
        },
        r : 5,
    },
    p : 9, // 0
}
const o1 = {
    a: 1,
    b: 2,
}; // depth === 1


const o2 = {
    a: {
        d: 6,
        f: 1,
    },
    b: {
        c: 2,
    },
}; // depth === 2



// console.log(Object.keys(obj).length, '12')
//  console.log(depth(o3)) //2
//  var emptyObj = {}; //0










//702

function isObject (tree) {
    if(typeof tree !== 'object'|| Array.isArray(tree)) {
        return false;
    } else  {
       return  true
    }
}

function recordDepth(tree, x = 0) {
    if(!isObject(tree)) {
        return ;  // проверит break
    }


    tree.depth = x;

    for(let item in tree) {
        recordDepth(tree[item], x + 1)
    }
    return tree
}


  
const treSome = {
    a: 1,
    c: { k: 5, c: 2, depth: 1 },
    c0: { k: 5, c: 2, depth: 1 },
    c1: { k: 5, c: 2, depth: 1 }, 
    k: { c: 9, k: 6, j: { y: 4, g: 9, depth: 2, }, Depth: 1 },
    b: { a: 3, b: 1, c: { a: 6, s: 7, depth: 2, }, r: 5, Depth: 1,  },
    p: 9, 
    depth: 0
  }
console.log(recordDepth(o3)) 
// { a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 },

// function smartSum(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         console.log(sum, item)
//       if (Array.isArray(item)) {
        
//         sum += smartSum(item); // почему именно в sum нужно приписывать рекурсию ? нельзя просто вызвать рекурсию ?
//       } else {
//         sum += item;
//       }
//     }
//     return sum;
//   }
  
//   const arr1 = [1, [2, [[3, [4]], 5, 6], 7], [[[8]]]];
  
//   console.log(smartSum(arr1)); // 36


  //703
// tree-max-path
function maxSum(root) {
    if(root === null) {
        return 0
    }
    let sum = 0;
    let sumLeft = 0;
    let sumRight= 0;
    // left.push(maxSum(root.left))
    //     right.push(maxSum(root.right))
    for(const key in root) {
        if(typeof root[key] === "number") {
            sum += root[key]
        }
        if(typeof root[key] === 'object') {
            maxSum(root[key]);
        }


        sumLeft += maxSum(root.left)
        sumRight += maxSum(root.right)
        
    }
    console.log(sum)
    // console.log(left, right)
    
     // TODO: implementation
    
}

//пройтись по перым ключам
// если там нет написать рекурсию для левых 
// написать рекурсию для правых 


// 4 if  
//1 ребенок для left
// 1 ребенок для right
// либо никого 



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
  
  
