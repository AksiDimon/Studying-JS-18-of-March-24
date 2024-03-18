// Promise Basics
//state
//промис может находиться в 1 из 3 состояний
function getState(promise) {
    return Promise.race([
      promise.then(() => 'fulfilled' , () => 'rejected'),
      new Promise((resolve) => setTimeout(() => {resolve('pending')}, 0))
    ])
  }

// // Промис резолвится через 2 секунды
// const p = new Promise(resolve => {
//   setTimeout(() => resolve("xxx"), 2000);
// });

// // // Через 1 секунду функция говорит, что он pending
// setTimeout(() => {
//   getState(p).then(status => console.log(status)); // "pending"
// }, 1000);


// // Через 3 секунды тот же промис уже fulfilled
// setTimeout(() => {
//   getState(p).then(status => console.log(status)); // "fulfilled"
// }, 3000);

  const p1 = Promise.resolve();
getState(p1).then(actual => {
  console.log({ actual, expected: "fulfilled" });
});

const p2 = Promise.reject();
getState(p2).then(actual => {
  console.log({ actual, expected: "rejected" });
});

const p3 = new Promise(() => {});
getState(p3).then(actual => {
  console.log({ actual, expected: "pending" });
});




// Создаем промис, который сразу же будет выполнен с значением 42
let resolvedPromise = Promise.resolve(42);

// Создаем новый промис, который принимает другой промис
let myPromise = new Promise((resolve, reject) => {
    resolve(resolvedPromise), // передаем resolvedPromise
    reject('error')
});

// Обработка промиса
resolvedPromise.then((result) => {
    console.log("Promise fulfilled with value: " + result); // результат 42
}).catch((error) => {
    console.log("Promise rejected with error: " + error.message);
});
