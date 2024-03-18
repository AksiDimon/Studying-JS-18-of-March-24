//______________________
const first = () => new Promise(r => setTimeout(r, 3000, 'first'));
const second = () => new Promise(r => setTimeout(r, 2000, 'second'));

// first().then(function (val) {
//   console.log(val, '!@#')
//    second();
// }).then((val) => console.log(val, '±±±'));



function third() {
  return "third";
}

first().then(third()) //так как здесь мы передаем third() со скобками, функция вызывается Cразу. Это не правильно. Вместо того что бы передавать ссылку на функцию, вот так; third, и когда она завершится  тогда она поподет со значением onFulfilled этого промиса в следующий then()
.then(x => console.log(x, '👾'));// так как third() это не функция, then() подставляет колбэк (x) => x, а в X передается результат промиса first

first().then(third)
.then(x => console.log(x, '0')); // так как third это функция  then() вычисляет результат работы  этой функции когда доходит очередь до этого then() и становится для этого then() этим значением onFulfilled 

first().then(x => x, third()).then(x => console.log(x, '👾')) // эта запись эдентична записи с '👾' выше
first().then(() => {return third()}).then((x) => console.log(x, '0')) // эта запись эдентична записи с '0' выше. Просто та передается ссылка на функцию, а здесь эта функция вызывается непосредственно в then() поэтому нужно писать соскобками функцию third() а тот что выше пример в then передавать без (). // Потому что та функция что выше записана без колбэка, там скилет вызываемой функции function() {} функции  как бы бызывается вместо колбэка в then и он получает onfulfilld  с результатом работы функции third, и за счет этого мы в следующем then получаем результат этой функции.



//____________
//
function sum(p1, p2) {
  
  const res1 =  new Promise ((resolve) => {
    const data1 = p1.then((num) => num)
    resolve(data1)
  })
  const res2 = new Promise (resolve => {
    const data2 = p2.then(num => num)
    resolve(data2)
  })
  return new Promise (resolve => {
    resolve(Promise.all([res1,res2]).then(num => num[0] + num[1]))
  })
}

const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));

sum(p1, p2).then(result => {
  console.log(result); // 1 + 2 === 3
})

