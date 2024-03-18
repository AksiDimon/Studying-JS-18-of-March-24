function timeLimit(fn, ms) {
    return function (...args) {
        return new Promise ((resolve, reject) => { //оборачиваем все это дело в промис
            const limitMs = setTimeout(function () {  //создаем сетТаймаут  с временем в переменной ms после того как это время закончится реджектится Time Limit Exceeded
                    reject("Time Limit Exceeded")
                }, ms)
            return fn(...args).then ( val => {  //работаем с результатом выполнения функции fn
                clearTimeout(limitMs) // clearTimeout отменяет таймаут ранее установленный;
                resolve(val)
                
            }).catch((error) => { // 1) не понимаю что лжеит в error.
                console.log(error, 'error!')
               reject(error);   // 2) как он понимает что catch это reject? 
            })                  // 3) почему catch нужно писать после then, тогда ведь это последовательное выполнение действий, а нам нужно это определить пока время идет у ms, соответственно по логике нам нужно это определить в then
        })
    }
  }
//сначала вызвать функцию fn потом уже вызывать ms в зависимости от того успивает ли fn проходить по времени ms
  // https://maxcode.dev/problems/memo
//похоже на race
// по вывадить console.log() что бы понять что где происходит
  
  const fn = (name) => new Promise(resolve => {
    setTimeout(() => resolve(`Hello, ${name}!`), 500);
  });
  
  const fn250 = timeLimit(fn, 500);
  
  console.time("xxx");
  
  fn250("World").then(
    value => {
      console.timeEnd("xxx");
      console.log("1 >>", value); // "Hello, World"
    }, 
    reason => {
      console.timeEnd("xxx");
      console.log("2 >>", reason); // "Time Limit Exceeded"
    },
  );



// Promise Basics
  function getState(promise) {
    return promise.then(() => "fulfilled")
        .catch(() => 'rejected')
        .finally(() => 'pending')
    
  }
// нужно паписать функцию так что бы когда я ее вызвал то promise начал работать 

// Промис резолвится через 2 секунды
const p = new Promise(resolve => {
  setTimeout(() => resolve("xxx"), 2000);
});

// // Через 1 секунду функция говорит, что он pending
setTimeout(() => {
  getState(p).then(status => console.log(status)); // "pending"
}, 1000);


// // Через 3 секунды тот же промис уже fulfilled
// setTimeout(() => {
//   getState(p).then(status => console.log(status)); // "fulfilled"
// }, 3000);

  const p1 = Promise.resolve();
getState(p1).then(actual => {
  console.log(actual); // "fulfilled"
});

const p2 = Promise.reject();
p2.catch(() => {});

getState(p2).then(actual => {
  console.log({ actual, expected: "rejected" });
});

const p3 = new Promise(() => {});
getState(p3).then(actual => {
  console.log({ actual, expected: "pending" });
});


function myDecorator(func) {
    return function() {
//      console.log('До вызова функции');
      func();
//      console.log('После вызова функции');
    }
  }
  
  function myFunction() {
//    console.log('Вызвана функция');
  }
  
  const decoratedFunction = myDecorator(myFunction); // При вызове myDecorator(myFunction) мы передаем ссылку на функцию myFunction в качестве аргумента в функцию myDecorator. 
  decoratedFunction();
  