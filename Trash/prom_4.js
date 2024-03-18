//_______________
Promise.resolve(1) //f 1
  .then(function(x)  {return x * 2} ) //f 2
  .then((x) => x * 3, x => x + 5) //f  6
  .catch((x) => x + 10) // f 6
  .then((x) => {
    console.log(x);
    return x + 1;
  })//f 7
  .then((x) => {
    throw x * 2;
  }) // R 14
  .then((x) => x * 4, x => { throw x }) // R 14 // 
  .then((x) => x + 1, (x) => x + 3) // F 17 // потому что в нутри ни чего плохого не произошло ни кто не бросил ошибку, после обработки колбэка onRejected  так kак он вернул значение он становится onFulfilled
  .catch((x) => {
    console.log(x);
    throw x + 30;
  }) // f 17
  .catch((x) => {
    console.log(x);
    throw x + 50;
  }) //f 17
  .then((x) => x * 20) //f 340
  .catch((x) => {
    console.log(x);
    return x + 3
  }) // f 340
  .then((x) => {
    console.log(x); // 340
  }) //f undefined
  .then((x) => {console.log(x) }) 


//объяснение всех ситуаций в методе then()

const p = Promise.resolve('Some Data') // в доке про then() где описывается 6 поведений then(), это говорится про промис который передается в then() как пример ниже p.then()
  .then((val) => {
    // ...
    throw `THROW ERROR: ${val}`
  })

p.then(
    value => console.log({value}),
    reason => console.log({reason}),
  )

// 1) returns a value: p gets fulfilled with the returned value as its value.
  const promise1 = new Promise ((resolve, reject) => {
    resolve('dima')
  })
  promise1.then(val => {console.log(val, '1')})
//2) doesn't return anything: p gets fulfilled with undefined as its value.
  const promiseEmpty = new Promise ((resolve, reject) => {
    resolve()
    return 1234;
  })
  //в чем отличие с первой зписью ? 
//   const promiseEmpty = new Promise ((resolve, reject) => {
//    return  resolve()
//   }) // отличается только записью 
  promiseEmpty.then((val) => { console.log(val, '2')})

//3 throws an error: p gets rejected with the thrown error as its value.
 const promRej = Promise.reject('Good day')
.then(() => {}, (val) => {
        console.log('Error:' + val, '3')})
// .catch((error) => console.log(error))

//4) returns an already fulfilled promise: p gets fulfilled with that promise's value as its value.  // Then() Возвращает промис как вэлью даже если он был несколько раз onFulfilled
const prom1 = new Promise ((resolve, reject) => {
    resolve("alredy resolve Promise");
})
const prom2 = new Promise ((resolve) => {
    resolve(prom1)
})
prom2.then((val) => console.log(val, '4'))

// 5) returns an already rejected promise: p gets rejected with that promise's value as its value.

const promiseRej1 = new Promise((res, rej) => {
    rej('prom was rejected');
})

promiseRej1.then(() => {}, (val) => {return val +' 1 TIME' })
.then((val) => {console.log(val)});

// 6) returns another pending promise: p is pending and becomes fulfilled/rejected with that promise's value as its value immediately after that promise becomes fulfilled/rejected.

const promiseData = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('data recived')}, 2000)
})
const promiseDataRepeat = new Promise((resolve) => {
    resolve(promiseData)
})
promiseDataRepeat.then((val) => {console.log(val, '6')})




//пример работы если вызвтать  два then() для одного промиса; он оба их отработает с onfulfilled или onRejected  зовисит от условия в промисе.
// Создаем промис
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 2000);
});

// Добавляем первый обработчик для успешного выполнения промиса
promise.then((value) => {
    console.log('First then handler:', value);
});

// Добавляем второй обработчик для успешного выполнения промиса
promise.then((value) => {
    console.log('Second then handler:', value);
});


//вапрос про способы обработки данных then()
// вапрос про код, из доки где происходит асинхронный вызов.


