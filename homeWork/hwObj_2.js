function direction(facing, turn){
    
  }

// console.log(direction("S", 180)) // 'N
// console.log(direction("SE", -45)) // 'E'
// console.log(direction("W", 495)) //'NE'
// console.log(direction("N", -450)) //'W'



//403
//??? не понимаю что не так с функцией? ниже объяснение
function sortArray(array) {
    const odds = array.filter(num => num % 2 !== 0);
    let oddsSort = odds.sort((a,b) => {
        if(a > b) {
            return 1
        }
        if(a < b) {
            return -1
        }
        return 0;
    })
    //??? почему работает с   const odds, result.push(Math.min(...odds)), но если удалить let oddsSort то функция работает не правильно ?
    console.log('odds',odds)
    let result = [];
    for(const num of array) {
        if(num % 2 !== 0) {
            result.push(Math.min(...oddsSort))
            oddsSort.shift(Math.min(...oddsSort))
        } else {
            result.push(num)
        }
        
    }
    return result;
  }
//   console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4];
//   console.log(sortArray([5, 3, 1, 8, 0])) //[1, 3, 5, 8, 0];
//   console.log(sortArray([]))//[];
//   console.log(sortArray([5, 3, 2, 8, 1, 4, 11]))//[ 1, 3, 2, 8, 5, 4, 11 ];
//   console.log(sortArray([]))//[];



const oddsSort = [5, 3, 2, 8, 1, 4, 11]

oddsSort.shift(...oddsSort);

console.log('try',oddsSort)


//402

function Student(age, gpa, fullName) {
    return {
        age,
        gpa,
        fullName,
    }
};

var students = [
    new Student(23, 88, "David Goodman"), 
    new Student(25, 82, "Mark Rose"), 
    new Student(22, 90, "Jane Doe"),
    new Student(25, 90, "Jane Dane"),
];

function sort(students) {
    const sort = students.sort((a, b) => {
        // console.log('a',a, 'b', b);
        if(a.gpa > b.gpa) {
            return -1
        }
        if(a.gpa < b.gpa) {
            return 1
        }
        if(a.fullName.split(' ')[1][0] > b.fullName.split(' ')[1][0]) {
            return 1
        }
        if(a.fullName.split(' ')[1][0] < b.fullName.split(' ')[1][0]) {
            return -1
        }
        if(a.age > b.age) {
            return 1
        }
        if(a.age < b.age) {
            return -1
        }
    })
    // !!! в массивие лежат объекты в объектах несколько ключей со знач., Что бы собрать массив из определенных (нужных) ключей из каждого объекта,
    // Проходимся по массиву sort мэпом, val это каждый элемент (объект) этого массива, и обращаемся по ключу, к каждому объекту в массиве, вот так; 
    const ListFullNames = sort.map(val => val.fullName); 
    return ListFullNames.toString();
};

console.log(sort(students))
// "Jane Doe,Jane Dane,David Goodman,Mark Rose"


 //405
  //отсортировать строку по возростанию
  function findLetters (val) {
    if(val >= 'A' && val <= 'Z') {
        return true;
    }
    if(val >= 'a' && val <= 'z') {
        return true;
    }
    return false;
  };

  function alphabetized(s) {
    const arrLetters = s.split('');
    const cleanArr = arrLetters.filter(val => findLetters(val));
    const sort = cleanArr.sort((a,b) => {
        if(a.toLowerCase() > b.toLowerCase()) {
            return 1
        }
        if(a.toLowerCase() < b.toLowerCase()) {
            return -1;
        } 
        return 0;
    })
    return sort.join('');
}
// console.log(alphabetized('The Holy Bible')) //'BbeehHilloTy';
// console.log(alphabetized('!@#$%^&*()_+=-`,')) // ''


//406 
// пройтись по массиву и определить в какой страке больше всего гласных, и вернуть массив по уменьшению  колличества гласных 
function sortStringsByVowels(strings){
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    const sort = strings.sort((a,b) => {
        if(a > b) {
            return -1
        }
        if(a < b) {
            return 1
        }
        return 0;
    })
    console.log(sort)
    // for(const word of strings) {
    //     const compare = word.match(vowels);
        // console.log(compare)
        // const letter = word.split('');
        // const recede = letter.reduce((acc,letter) =>{
        //     if(vowels.includes(letter)) {
        //         acc += 1
        //     }
        //     return acc
        // },0)
        // console.log(recede)
    // }
    
    }

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]))//["iiii","eee","aa","oo"]
// console.log(sortStringsByVowels(["a","e","ii","ooo","u"]))//["ooo","ii","a","e","u"]
// console.log(sortStringsByVowels(["ioue","ee","uoiea"]))//["uoiea", "ioue","ee"]
// console.log(sortStringsByVowels(["high","day","boot"]))//["boot","high","day"]
// console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]))//["uuu","Yuuuge!!","none"]
// console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]))//["GREEEN","AIBRH","YOUNG",""]
// console.log(sortStringsByVowels(["jyn","joan","jimmy","joey"]))//["joan","joey","jimmy","jyn"]
// console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]))// ["iiutrqy","uijijeoj","lkjlkjww2"]

// const number = 7;
// console.log('🤖',number.toString(2))


//404 
//отсоритроввать массив по увеличению количеста нулей в двоичном представлении 
function sortByBit(arr) {
    // const map = arr.map(num => num.toString(2).replaceAll('0',''));
    // console.log(map)
    // console.log(map.sort())
    
    const sort = arr.sort((a,b) => {
        if(a.toString(2).replaceAll('0','') > b.toString(2)) {
            return 1
        }
        if(a.toString(2).replaceAll('0','') < b.toString(2)) {
            return -1
        }
        return 0
    })
    console.log(sort)
   
}
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])) // [1, 8, 3, 3, 5, 6, 9, 7]

