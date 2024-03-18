//work with methood  at()) and slice(). Slice() cut with brackets, at() cut without brackets 
const arr = [1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
console.log(arr.slice(0,10));
console.log(arr.at(1));



//TASK: put in obj only uniq data.
function uniqObj (o) {
    let resultObj = {}
    for(const obj of o) {
        Object.assign(resultObj, obj) // Object.assign кладет в первый объект все что есть во втором объекте, если какие то ключи совпадают то он берет ключи и значения из 2 объета
    }
return resultObj;
}


var a = { 1: '1', 2: '2', 3: '3' },
  b = { 3: '4', 5: '6', 6: '7', 7: '8' },
  c = { 5: '9', 8: '9', 6: '12', 23: '35' },
  o = [a, b, c];
console.log(uniqObj(o))





//TASK: разобрать строку и оставить только уникальные значения в строке
// для работы с массивами или строками очень подойдет new Set();
// work with type of colection new Set. 
// in new Set have only Uniq Data  and it Never repeat.
function uniqStr (str) {
    const arr = str.split(' ')
    const set = new Set();  // обязательно стоздаем пустую колекцию new Set()
    for(const val of arr) {
        set.add(val) // и как с массивами push-ли, тут также только add в коллекцию newSet() обязательно через цикл пропустить!
    }
    return Array.from(set).join(' ') // Array.from(set) означает что мы хотим превратить в arr из коллекции new Set().
}

console.log(uniqStr('alpha beta beta gamma 12 gamma gamma 12 delta alpha 3 beta beta 0 gamma gamma gamma delta'))




//может ли метод map()  в js ходить по объектам?  ДА может, только нужно перевести в массив ключи, с помощью Object.keys(obj)
const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const keys = Object.keys(obj);
  console.log(keys); 
  const values = keys.map(key =>{
//МЕТОД map() может дтать нам пройти по каждому ключу объекта и мы сможем собрать в новый массив их значения.
    return obj[key]
  });
  
  console.log(values); // [1, 2, 3]
  



  //315
  function findPair(arr1,arr2){
    let arrSum = [];
    let obj = {};
    const arr = [];
    for(let i = 0; i < arr1.length; i += 1) {

        for(let j = 0; j < arr2.length; j += 1) {
            if(i === j) {
              if(!(arr1[i] + arr2[j] in obj)) {
                obj[arr1[i] + arr2[j]] = [[arr1[i], arr2[j]]]
            } else {
                obj[arr1[i] + arr2[j]].push([arr1[i], arr2[j]])
            }
            }
            
        }
    }
    console.log(obj)
    const key = Object.keys(obj);
    const maxKeyInObj = Math.max(...key);
    // if(maxKeyInObj in obj && obj[maxKeyInObj].length === 1) {
    //     return [];
    // }
    
    if(maxKeyInObj in obj ) {
        return obj[maxKeyInObj]
    }
  }

//   console.log(findPair([1,2,3,4,5],[9,8,0,0,0]))//[[1,9],[2,8]]
//   console.log(findPair([1,2,3,4,5],[0,0,0,0,0]))//[]
//   console.log(findPair([1,2,3,4,5],[5,4,3,2,1]))//[[1,5],[2,4],[3,3],[4,2],[5,1]]
//   console.log(findPair([0,1,3,4,5],[1,0,3,2,1]))//[[3,3],[4,2],[5,1]]
console.log(findPair([1,2,3,4,5],[-1,2,-3,4,-5])) // [[1,-1],[3,-3],[5,-5]]
// console.log(findPair([1,2,3,0,5,-2],[-1,2,-3,4,-5,6])) //[[2,2],[0,4],[-2,6]]


