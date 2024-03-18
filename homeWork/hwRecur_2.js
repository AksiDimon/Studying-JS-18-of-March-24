 function findDeepLength (tree) {
   
    if(tree.left === null && tree.right === null) {
        return tree.value
    }
    if(tree.right !== null && tree.left === null) {
        return findDeepLength(tree.right) + tree.value
    }
    if(tree.right === null && tree.left !== null) {
        return findDeepLength(tree.left) + tree.value
    }
    if(tree.right !== null && tree.left !== null) {
        return Math.max(findDeepLength(tree.left), findDeepLength(tree.right)) + tree.value
    }


 }
 const tree1 = {
    value : 6,
    left: {
        value: 2,
        right: null,
        left: null,
    },
    right: null,
 }
 

 const tree = {
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
  console.log(findDeepLength(tree1))
  console.log(findDeepLength(tree));

  const minusTree = {
    value: 5, //<-
    left: {
      value: 4, //<-
      left: {
          value : -80,
          left: null,
          right: null,
      },
      right: { 
          value: -60,
          left: null,
          right: null,
  
      } // <-
    },
    right: {
      value: 10,
      left: {
          value: -90,
          left: null,
          right: null,
      },
      right: null,
    },
  };
  // console.log(findDeepLength(minusTree));




  //701
// на следующем уроке разобрать как углубляется рекурсия на этой функции и на примере ниже
function isNonEmptyObject (obj) {

  if(typeof obj !== 'object'|| obj === null || Array.isArray(obj)|| Object.keys(obj).length === 0) {
      return false;
  } else {
      return true
  }
  
}

function depth(obj) {
  if(!isNonEmptyObject(obj)) {
      return 0
  }
 
  const values = Object.values(obj); // ["kjoj", { c: "qwe" }]
                                     // ["qwe"]
  const depths = []
  for(const item of values) {
    depths.push(depth(item));
  }
    console.log(obj, depths)
  return Math.max(...depths)  + 1
}
// ['kjoj', {{r: 'yui'} p: 'wer'}, {c: "qwe"}]
//если вызвать только { a: 'kjoj' } он вернет сначала 0 а потом прибавится в ретерн 1.
//А если вызвать  вложенный объект { a: 'kjoj', x: { y: { r: 'yui' }, p: 'wer' }, b: { c: 'qwe' } } то когда рекурсия будет углубляться, он для первого элеметна вернет 0, тк это не объект поудет дальше в следующем элементе вызовет рекурсию  положит в стек 1 то что вернет перавя рекурсия, увидет дальше что есть  еще один объект положит в еще стек 1 дальше увидит что в след объекте  нет объекта r: "yui", для него вернет 0,в стеке для ключа x лежат 1,1,0,0при завершении цикла для этой рекурсии он вконце еще добавит 1 и пойдет к следующему item и так он соберет в массив все глубины объекта.
const o6 = {
  a: "kjoj",
  x: {
      y: {
          r: "yui",
      },
      p: "wer",
  },
  b: {
      c: "qwe",
  },
}

// console.log(depth(o6))


// function smartSum(...arr){
//   console.log(arr, 'arr')
//   let sum = 0
//    for(const item of arr) {
//      if(Array.isArray(item)) {
//        console.log(item, 'item' )
//         sum += smartSum(...item)
//      } else {
//        sum += item 
//      }
//    }
//   return sum
// }

// console.log(smartSum([1,2],3)) //6



 //Flatten Array
 function flattenArr(arr, depth = 1) {
  if(depth === 0) {
      return arr
  }
  let newArr = [];
  for(const item of arr) {
      
      if(Array.isArray(item)) {
          // console.log('@',newArr)
        const itemSomeArr = flattenArr(item, depth - 1);
        newArr.push(...itemSomeArr) //как это  работает что для рекурсии работает spread ?  для чего он я не понимаю. Для того что бы убрать скобки массива. и запушить только содержимое массива
      } else {
          newArr.push(item);
      }
  }
  return newArr
}

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];
//   console.log(x.slice());

//   flattenArr(x) === [1, [2, [3, 4, [5]], 6], [7], 8];
//   console.log(flattenArr(x));

//   flattenArr(x, 0) === [1, [[2, [3, 4, [5]], 6], [7]], [8]];

  flattenArr(x, 2) === [1, 2, [3, 4, [5]], 6, 7, 8];
  console.log(flattenArr(x, 2));
//   flattenArr(x, Infinity) === [1, 2, 3, 4, 5, 6, 7, 8];


//Nested Categories
//id-to-children
function id2children(catalog) {
  let result = {};
  const keyNewObj = catalog.id;
  const children = catalog.children;

  if(children.length === 0) {
    result[keyNewObj] = []
    return result
  } else { 
    
    result[keyNewObj] = children.map(child => {
      return child.id;
    })


  }
   children.forEach(child => Object.assign(result,id2children(child)))
  return result
  

  
}
//ключ id -> знач children 
// объекте массив, и так далее, где то есть данные гдето пусто, если есть данные нужна рекурсия если нет то вернуть []

const catalog = {
  id: "1",
  name: "Электроника",
  children: [
    {
      id: "2",
      name: "Товары для компьютера",
      children: [
        { id: "3", name: "Оперативная память", children: [] },
        { id: "4", name: "Процессоры", children: [] },
      ],
    },
    { id: "5", name: "Мобильные телефоны", children: [] },
  ],
};


console.log(id2children(catalog));

// const expected = {
//   "1": ["2", "5"],
//   "2": ["4", "3"],
//   "3": [],
//   "4": [],
//   "5": [],
// }

//из теории learn Js
function isNested (obj) {
  if(typeof obj !== 'object' || obj === null) {
    return false
  }
  return true
}
// function recSumObj (obj) {
//   if(!isNested(obj)) {
//     return 0
//   }
//    const depth = Object.values(obj).map(val => recSumObj(val));
//    return Math.max(...depth) + 1;
// }

function recSumObj (obj) {
  if(obj.next === null) {
    return 0
  } else {
    return  obj.value + recSumObj(obj.next) // здесь ретерн обязательно нужен, если он ничего не возвращает, этот пример, или что он там вычислит, так и будет весеть в воздухе
  }

}

function smartSum(...arr){
  console.log(arr, 'arr')
  let sum = 0
   for(const item of arr) {
    console.log(item, 'item' )
     if(Array.isArray(item)) {
       
        sum += smartSum(...item) // в sum здесь нужно записывать потому что это для массивов, здесь многго всяких элементов массивов в массиве.
     } else {
       sum += item 
     }
   }
  return sum
}

 console.log(smartSum([1,2],3)) //6



let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  },
  next2: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
console.log(recSumObj(list))