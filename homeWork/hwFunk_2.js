// function group(arr, isEqual) {
//     let obj = {};
    
//     let count = arr.length - 1;
//     for(let i = 0; i < arr.length; i += 1) { // создаю массив
//       let key = arr[i].length;
//       // key += 1;
//       const filter = arr.filter( item => isEqual(arr[i], item )) // прохожусь фильтром по массиву, и передаю в нее функцию с 2я аргументами,
//       if(!(obj[key] in obj)) {
//         obj[key] = filter;
//       }
//       // if(isEqual(arr[i], arr[count])) {
//       //   obj[key].push(arr[i])
//       // }
      
      
//     }
//     count -= 1
//     console.log(obj)
//     console.log(count, 'count')
//   }


//   function group(arr, isEqual) {
//     let obj = {};
    
//     let count = arr.length - 1;
//     for(let i = 0; i < arr.length; i += 1) {
//       let key = arr[i].length;
//       key += 1;
//       if(!(obj[key] in obj)) {
//         obj[key] = [];
//       }
//       if(isEqual(arr[i], arr[count])) {
//         obj[key].push(arr[i])
//       }
      
      
//     }
//     count -= 1
//     console.log(obj)
//     console.log(count, 'count')
//   }



function group(arr, isEqual) {
    const bigArr = [];
    for(const item of arr) {
      const condidates = bigArr.find(val => isEqual(item, val[0]));
      console.log(condidates, 'condidates')
      if(condidates === undefined) {
        bigArr.push([item])
      } else {
        condidates.push(item)
      }
    }
    return bigArr
  }

  const words = [
    "the", "quick", "brown", "fox",
    "jumps", "over", "the", "lazy", "dog"
  ];
  
  const result = group(words, (a, b) => a.length === b.length);
  console.log(group(words, (a, b) => a.length === b.length))
  
  const expectedResult = [
    ["the", "fox", "the", "dog"],
    ["quick", "brown", "jumps"],
    ["over", "lazy"],
  ]
  

  //Repeater
  function repeatGenerator(str) {
    let count = 0;
    return function () {
        let char = str[count];
        count += 1;
        if(count === str.length) {
            count = 0
        }
        return char
    }
    
  }

  const gen = repeatGenerator("abc");

console.log(gen()); // "a"
console.log(gen()); // "b"
console.log(gen()); // "c"
console.log(gen()); // "a"
console.log(gen()); // "b"
// console.log(gen()); // "c"
// console.log(gen()); // "a"
// console.log(gen()); // "b"
// console.log(gen()); // "c"
// console.log(gen()); // "a"




//Сurrying - sum
function sum(n) {
    function inner(next) {
      return sum(n + next);
    }
  
    inner[Symbol.toPrimitive] = () => n;
  
    return inner;
  }
  
const obj = {
  x: 7,
  y: 8,
};

obj.f = (a, b) => a + b;
obj["qwerty"] = x => x ** 2;

obj[Symbol.toPrimitive] = () => {
  return "azaza";
}

console.log(`Hello, ${obj}!`);

console.log(sum(1)(2)(3)(4) == 10);
console.log(sum(5)(5)(5) == 15);


const foo = sum(2)(4)(6); // эквивалентно числу 12

// если к числу 12 добавить 100, 200 и 300
// то получим 612   
console.log(foo(100)(200)(300) == 612);

// если к числу 12 добавить 2000 и 5000,
// то получим 7012    
console.log(foo(2000)(5000) == 7012);
