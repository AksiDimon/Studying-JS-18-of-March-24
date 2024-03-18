// 513
function frequency(arr, options = {}) {
    // console.log(arr, options)
    let obj = new Map();

    const {
        criteria = (x) => x,
        compareTo = (a1, a2, v1, v2) => a1 < a2 ? 1 : -1,
    } = options
    for(const item of arr) {
        let key = criteria(item); // ??? почему здесь нужно писать просто criteria, а не обращаться сначала к options.criteria(item) ?
        //  console.log(key)
         const value = obj.get(key) ?? 0;
        //  console.log('000',value)
        obj.set(key, value + 1)
    }
    // console.log( obj)ж
    const arrFromObj = Array.from(obj);
    const sort = arrFromObj.sort((a,b) => {
        console.log(a[0], b[0])
        return compareTo(a[0], b[0], b[1], b[2])
    })
    return sort
  }
  
  
  function isEven(number) {
    return number % 2 === 0;
  }
  
  function parity(number) {
    return isEven(number) ? 'even' : 'odd';
  }
  
  console.log(frequency([1, 2, 3, 4, 5, 6, 7], { criteria: parity }));
  // console.log(frequency([1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 1, 2], {}));
//   console.log(frequency([1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 1, 2]));
//   console.log(frequency([1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 1, 2]));
  
//   console.log(frequency([1]));
  
//   function frequencyCompare(value1, value2, freq1, freq2) {
//     return freq2 - freq1;
//   }
  
//   console.log(frequency(
//     ['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'],
//     { compareTo: frequencyCompare },
//   ));
// //   [["Peter", 3], ["Anna", 2], ["Rose", 1]]



function span(arr, predicate) {
    const bigArr = [[], []];
    for(let i = 0; i < arr.length; i += 1) {
        // console.log(bigArr)
      if(!(predicate(arr[i]))) {
        bigArr[0].push(arr.slice(0,i))
        bigArr[1].push(arr.slice(i))
      } 
       
    }
    return bigArr
  }
// function span(arr, predicate) {
//     const bigArr = [];
//     for(let i = 0; i < arr.length; i += 1) {
//         console.log(bigArr)
//       console.log(predicate(arr[i]), 'simple');
//       console.log(!(predicate(arr[i] )), 'with !')
//     }
    
//   }

//   function isEven(x) {
//     return x % 2 === 0;
//   }

 const array2 = [ 1, 4, 5, 7, 6 ];
  console.log(span(array2, isEven)) // [ [], [ 1, 4, 5, 7, 6 ] ]

//   const array1 = [ 2, 4, 6, 1, 4, 8 ]
//   console.log(span(array1, isEven));  //[ [ 2, 4, 6 ], [ 1, 4, 8 ] ]

//   const emptyArr = [];
//   function tr() { return true; }
//   console.log(span(emptyArr, tr )) // [ [], [] ]

 