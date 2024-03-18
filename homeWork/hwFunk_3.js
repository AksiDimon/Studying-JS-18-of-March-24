

function random (min, max) {
    const rand = (5 - 1) + Math.random() * (max - min * 2);
    return Math.round(rand)
}

function wrap () {
    let count = 0;
    return function data() {
        count += random(1, 50);
        if(count > 250){
            count = 0
        } 
        return count
    //    return count < 250 ?  count : count = 0;
    }
}
let some = wrap ()
let xer = wrap ()
console.log(some())
console.log(some())
console.log(some())
console.log(some())
console.log(some())
console.log(some())
console.log(some())
console.log(some())
console.log(some())
console.log(some())
console.log(some())



function sicle () {
    let str = '';
    for(let i = 1; i <= 30; i += 1) {
        str = str + i + ' ';
    }
    return str;
}

console.log(sicle())


function recurs () {
    let str = '';
    let i = 1;
    return function foo () {
        str = str + i + ' '
        i += 1;
        if(i > 30) {
            return str
        } 
        return foo()
    }
}

const felp = recurs();
console.log(felp())


function monySicle () {
    let selary = 0;
    for(let i = 0; 1e9; i += 1) {
        selary += random(0, 50);
        if(selary > 200) {
            return 'Done'
        } 
        console.log(selary)
    }

}

console.log(monySicle())



function monySicleRecursion () {
    let selary = 0;
    return function foo () {
        selary += random(0,50);
        console.log(selary)
        if (selary >= 200) { // почему если здесь поставить знак === то функция начинает рабоать бесконечно?
            return 'done'
        }
        return foo();
    }
}

const helper = monySicleRecursion(); // для чего нужно перезаписывать функцию в константу? можно ли ее вызвать что бы она работала без вспомогательной константы ?

console.log(helper()) // как я могу константы вызваать со скобками ? константы этоже не функция.




function sum(a) {
    let result = a;
    return function foo5(b) {
        
        if(b === undefined){
            return result
        }
        result += b
        return foo5
    };
  }

  console.log(sum(5)(6)(7)(8)(8)(6)())

