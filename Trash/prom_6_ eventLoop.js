//________________________
//Event Loop

function solution() {
    return [
      ['A','B','C','F','D','B','E'], // ← Task 1
      ['I','G','H','J','L','K'], // ← Task 2
    ]
  }

//   console.log('A');

// const intervalId = setInterval(() => {
//   console.log('B'); // 1 , 5
// }, 10);

// setTimeout(() => {
//   const promise = new Promise((resolve) => {
//     console.log('C'); // 2
//     resolve('D');
//   }); // fulfilled<D>
// // все колбэки внутри методов then() catch() finally() - это микро задача. а Promise это просто объект, так же например как и метод map он работает с массивами. и это не микро и не макра задача.
//   promise.then((value) => {
//     console.log(value); //4 <D>
//     setTimeout(() => {
//       console.log('E'); //6
//       clearInterval(intervalId);
//     }, 10);
//   });

//   console.log('F'); //3
// }, 10);

setTimeout(() => {
    console.log('G'); //2
    Promise.resolve().then(() => console.log('H')); // 3 //пока эта микрозадача не закончится, слдедующую мекро задачу взять нельзя.
  }, 0);
  
  new Promise(function (resolve, reject) {
    console.log('I'); //1
    setTimeout(function () {
      console.log('J'); //4
      resolve('K');
    }, 0);
  }).then((res) => {
    console.log('L'); //5
    setTimeout(() => {
      console.log(res); //6
    }, 0);
  });
  

// function promise ()  {
//  return  new Promise((resolve) => {
//     console.log('Cims');
//     resolve('Dima');
//   }).then(console.log)
// }  


//   function count (s) {
//     let count = 0;
//     for(let i = 0; i < 5; i += 1) {
//         console.log(`${ i} : C`, 'log')
//         count += 1
//     }
//     return count
//   }

//   console.log(count('str'))








//_______________________
//объяснение всех ситуаций в методе then()
// 1) returns a value: p gets fulfilled with the returned value as its value.
const p = Promise.resolve(1) // в доке про then() где описывается 6 поведений then(), это говорится про промис который передается в then() как пример ниже p.then()
  .then((x) => {
    // как раз в этом месте и происходят все это 6 поведений для then()  в данном случаии 'p' из доки они имелии ввиду const p = Promise.resolve()
    // ...
    throw x + 1
  })

p.then(
    value => console.log({value}), 
    reason => console.log({reason}),
  )



//______________________
  const first = () => new Promise(r => setTimeout(r, 3000, 'first'));
  const second = () => new Promise(r => setTimeout(r, 2000, 'second'));

  first().then(function (val) {
    console.log(val, '!@#')
     second();
  }).then((val) => console.log(val, '±±±'));



  function third() {
    return "third";
  }
  
  first().then(third()) //так как здесь мы передаем third() со скобками, функция вызывается Cразу. Это не правильно. Вместо того что бы передавать ссылку на функцию, вот так; third, и когда она завершится  тогда она поподет со значением onFulfilled этого промиса в следующий then()

  .then(console.log); // так как third() это не функция, then() подставляет колбэк (x) => x, а в X передается результат промиса first
  first().then(third).then(console.log); // так как third это функция  then() вычисляет результат работы  этой функции когда доходит очередь до этого then() и становится для этого then() этим значением onFulfilled 

first().then(x => x, third()).then(x => console.log(x, '👾'))
first().then(() => third).then((x) => console.log(x, '0'))

//____________________
// 5) returns an already rejected promise: p gets rejected with that promise's value as its value.
//описание для 5 поведения метода then()
  const promiseRej1 = new Promise((res, rej) => {
    rej('prom was rejected');
})

promiseRej1.then(() => {}, (val) => {return val +' 1 TIME' })
.then((val) => {console.log(val)}); // выведет 'prom was rejected 1 TIME' так как предыдущий then не выкинул throw