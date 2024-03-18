function race(iterable) {
    return new Promise ((resolve, reject) => {
        for(const p of iterable) {
            Promise.resolve(p).then(resolve, reject);
        }
    })
}
// метод filter () не статический класс потому что он изменяет не посредственно  массив который ему передали
// статический метод Promise.resolve()  или Array.isArray(),
const arr = new Array();
arr.push(1)
arr.push(2)

Number.isNaN()

/// https://developer.mozilla.org/en-US/docs/Glossary/Static_method
/// https://www.techopedia.com/definition/24034/static-method-java



456.576846.toFixed(2)

Array.from("qwerty"); // статический метод, потому что он иде из коробки с конструктором Array

Array.isArray(123) // статический метод, потому что он иде из коробки с конструктором Array
// определение статического метода - Если метод начисаетная с большой буквы и по имени Класса и точка, за которой следует имя метода например: Array.isArray() , то это статический метод. 


// можно ли записать так ? 
// function race(iterable) {
//     for(const p of iterable) {
//         return Promise.resolve(p);
//     }
// }






const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "🍎"));
const p2 = new Promise(r => setTimeout(r, rand(), "🍋"));
const p3 = new Promise(r => setTimeout(r, rand(), "🍉"));
// const p4 = new Promise(r => setTimeout(r, rand(), "D"));

// race([p1, p2, p3, p4]).then(
//     value => console.log("1 >>>", value),
//     reason => console.log("2 >>>", reason),
// );


// simple-all
function all(iterable) {
    const arr = [];
    let count = 0
    
    const prom = new Promise((resolve) => {
        if(iterable.length === 0) {
                resolve(arr)
            }
        for(let i = 0; i < iterable.length; i += 1) {
            iterable[i].then(function(item) { // почему шеуь принимает ? 
                console.log(item);

                arr[i] = item  //
                
                count += 1
                if(count === iterable.length){
                    resolve(arr)
                }
            })
        }

        // когда все p завершат свою работу, тогда должен вернуть результат, а до этого рано что то возвращать
    })
    
    return prom
}

all([p1, p2, p3]).then(arr => {
    console.log("???????", arr); // arr === ["🍎", "🍋", "🍉"]
  });
  



//1) из документации mdn про  Promise.resolve не понимаю что здесь происходит

// const p1 = Promise.resolve({
//     then(onFulfill, onReject) {
//       onFulfill("fulfilled!"); // почему здесь не resolve ?  просто Fulfill означает работа с фаилами выполнена,  а resolve что одобрено 
//     },
//   });
//   console.log(p1 instanceof Promise); // true, object casted to a Promise
  
//   p1.then(
//     (v) => {
//       console.log(v); // "fulfilled!"
//     },
//     (e) => {
//       // not called
//     },
//   );
  
  //2) 
  const p = new Promise((resolve, reject) => {
    const backEndData = {
        server: 'aws',
        port: 2000,
        status: 'preparing',
    }
    resolve(backEndData); // этот промис возвращает объект

  })

  p.then(data => { //здесь  data это то что возвращается выше в resolve(backEndData);
    const p2 = new Promise ((resolve, reject) => { // 
        data.modifide = true;
        resolve(data);
    })
  })
//почему ниже он не принимает const p2 которая выше ? 
//   p2.then(claintData => { // я не понимаю почему у меня p2 не обращается по промису выше? хотя в видео у владлена также, и у него происходит обращение к const p2 выше
//     console.log('data recived', claintData)
//   }) 