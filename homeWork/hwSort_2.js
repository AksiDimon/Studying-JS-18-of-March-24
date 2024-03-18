//408
function solve(arr){
    let obj = {};
    for(const num of arr) {
        if(!(num in obj)) {
            obj[num] = 0;
        } else {
            obj[num] += 1;
        }
        
    }
     console.log(obj)
    // console.log('Object.keys(obj)',Object.values(obj))
    const sort = arr.sort((a,b) => {
        console.log('obj[a]',obj[a])
        if(obj[a] > obj[b]) {
            return -1
        }
        if(obj[a] < obj[b]) {
            return 1;
        }
        if(a > b) {
            return 1
        }
        if(a < b) {
            return -1
        }
        return 0
    })
  console.log(sort);
//   const result = [];
//   for(const num of sort) {
//     result.push(...obj[num])
//   }
//   console.log(result)

//   const map = sort.map(key => obj[key])
//   return map.flat()
}
// console.log(solve([2,3,5,3,7,9,5,3,7])) //[3,3,3,5,5,7,7,2,9]
// console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1])) //[1,1,1,0,0,6,6,8,8,2,3,5,9]
// console.log(solve([5,9,6,9,6,5,9,9,4,4])) //[9,9,9,9,4,4,5,5,6,6]
// console.log(solve([4,4,2,5,1,1,3,3,2,8])) //[1,1,2,2,3,3,4,4,5,8]
// console.log(solve([ 2, 11, 12, 16, 16, 18, 22, 23, 25, 27, 32, 36, 37, 38, 39, 41, 44, 44, 46 ])) //[16, 16, 44, 44, 2, 11, 12, 18, 22, 23, 25, 27, 32, 36, 37, 38, 39, 41, 46]
// console.log(solve([ 0,
//   5,
//   6,
//   6,
//   7,
//   7,
//   7,
//   9,
//   11,
//   11,
//   12,
//   13,
//   14,
//   14,
//   16,
//   18,
//   18,
//   19,
//   19,
//   20,
//   21,
//   23,
//   23,
//   26,
//   27,
//   27,
//   27,
//   27,
//   27,
//   28,
//   28,
//   30,
//   32,
//   33,
//   35,
//   36,
//   36,
//   37,
//   37,
//   38,
//   39,
//   41,
//   41,
//   43,
//   43,
//   44,
//   48,
//   48,
//   49,
//   50 ])) //[27, 27, 27, 27, 27, 7, 7, 7, 6, 6, 11, 11, 14, 14, 18, 18, 19, 19, 23, 23, 28, 28, 36, 36, 37, 37, 41, 41, 43, 43, 48, 48, 0, 5, 9, 12, 13, 16, 20, 21, 26, 30, 32, 33, 35, 38, 39, 44, 49, 50]







//500
function detectInt(...args) {
    if(args.length === 0) {
        return 1
    }
    for(let i = 1; true; i += 1) {
        const every = args.every(arg => arg(i) === true );
        console.log(every)
        if(every === true) {
            return i
        }
    }
    
    // for(let i = 1; i < 30; i += 1) {
    //     // let mutchsNum = 0
    //     // for(const arg of args) {
    //     //     if(arg(i) === true) {
                
    //     //     }

    //     // }
    //     const every = args.every(arg => arg(i) === true);
    //     // console.log(i, every)
    //     if(every === true) {
    //         return i
    //     }
    // }
    
}
// console.log(detectInt((x) => x > 9)); //10
console.log(
  detectInt(
    (x) => x % 5 == 0,
    (x) => x % 3 == 0
  )
); //15