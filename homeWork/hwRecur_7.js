//Deep compare
function deepCompare(o1, o2) {
    if(typeof o1 !== 'object' || typeof o2 !== 'object') { // если какой то из входящих знаений не объект то мы отправляем их на логическое сравнение, o1 === o2. Если они равны например строки и тд то выдает true, если нет false.
        return o1 === o2
    }
    if(Object.keys(o1).length !== Object.keys(o2).length) { // если длиннна массива ключей o1 !== длинне массива ключей o2 вернем false.
        return false
    }

    for(const key in o1) {
        //  console.log(key, '@@@')
        if(!(key in o2) || !deepCompare(o1[key], o2[key])){
            return false
        }
    }
    return true
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
  
  console.log(deepCompare(o1, o2)); // true


//flattenObj
  function flattenObj(obj, keys = '') { //если в рекурсии используется такой патерен, объявлять переменную в скобках функции, можно ли так же объявлять переменную в других функциях, где нет рикурсии ? или это применимо только для рекурсии?

    let newObj = {}
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
           const rec = flattenObj(obj[key], keys + key + '/' );
           newObj = {rec};
        } else {
            newObj[`${keys}${key}`] = obj[key];
        }
    }
    return newObj;
  }


  const obj1 = {
  m: {
    o: {
      w: 4n,
      g: true,
    },
    f: 571,
  },
};

flattenObj(obj1) === {
  "m/o/w": 4n,
  "m/o/g": true,
  "m/f": 571,
};

console.log(flattenObj(obj1))



//deep Clone
function clone(obj ) {
   let newObj = {}
    for(const key in obj) {
        if(!(key in newObj)) {
            newObj[key] = obj[key]
        }
        if(typeof obj[key] === 'object') {
            
            newObj[key] = clone(obj[key]);
        }
    }
    return newObj
}

const obj = {
    m: {
      p: 4
    },
    x: 1,
    y: {
      f: {
        u: 100
      },
      t: 7,
      z: 4
    }
  }
  
  const objCopy = clone(obj);
  console.log(objCopy);
  
  objCopy.y.z = 100;
  
  console.log(objCopy.y.z); // 100
  console.log(obj.y.z);     // 4

  
  const obj2 = {
    a: 1,
  };
  obj2.b = obj2;
  
//   const obj2Copy = clone(obj2);
  
//   obj2Copy.b.b.b.b.b.b.b.a = 2;
//   console.log(objCopy.a); // 2
//   console.log(obj.a);     // 1


