
//breadCrumbs
function breadcrumbs(catalog, id, result = []) { //id обозначает в какой вкладке в данный момент находится человек
    if(id === catalog.id) {
        return [...result, catalog.name]
    }
    for(const child of catalog.children) {
        const rec = breadcrumbs(child, id, [...result, catalog.name] )
        if(rec !== null) {
            return rec
        }
    }
     return null
}
// почему функция не останавливается когда она например на Оперативной памяти вернула null т.к  так как в этой ветве рекурсия не нашла  искомого id ?
const catalog = {
    id: "1",
    name: "Электроника",
    children: [
      {
        id: "2",
        name: "Товары для компьютера",
        children: [
          { id: "3", name: "Оперативная память", children: [] },
          { id: "4", name: "Процессоры", children: [{ id: '123', name: 'Qwerty', children: [] }] },
        ],
      },
      { id: "5", name: "Мобильные телефоны", children: [] },
    ],
  };

  console.log(breadcrumbs(catalog, '123'), '🤖')
//["Электроника", "Товары для компьютера"]


//   console.log(breadcrumbs(catalog, "1"));
// // ["Электроника"]

// console.log(breadcrumbs(catalog, "3"));
// // ["Электроника", "Товары для компьютера", "Оперативная память"]

// console.log(breadcrumbs(catalog, "5"));
// // ["Электроника", "Мобильные телефоны"]


function findId (catalog, id, neadId = catalog) {
    //найти в catalog объект с нужным id  
    // нужна рекурсия что бы найти этот объект;
    if(catalog.id === id) {
        return neadId
    }
    for(const child of catalog.children) {
        const rec = findId(child, id, child);
        if(rec !== null) {
            return rec
        }
    }
    return null ; // здесь нужно это организовать как метод some;
    //почему здесь нельзя вернуть false ? почему нужно null
    
}

function descendants(catalog = findId(catalog, id), id, result =[]) {// создали переменную из функции findId которая находит по id  вкладку в которой мы будем искать детей
     
    //const findCildren = catalog.children.map(child => child.id );
    console.log(catalog,'www')
        result.push(catalog.id)
    
    for(const child of catalog.children) {
        
        const rec =  descendants(child)
         result.push(...rec)
    }
    return result
    console.log(map)

}
// разбить задачу на 2 функции
// найти объект с этим id 
// 2 найти всех потомков этого объекта.
//console.log(descendants(catalog, "1"));
// // ["2", "3", "4", "5"]

// console.log(descendants(catalog, "2"));
// // ["3", "4"]

  console.log(descendants(catalog, '2'));
// // []


// console.log(findId(catalog, '123')) // проверка первой функции



//Оператор нулевого слияния 
function check (str) {
    return str ?? 0
}

console.log('' === '') // true
console.log([] === []) // false
// console.log(check('Dima'));
// console.log(check(undefined));
// console.log(check(42));
// console.log(check({name: 'Asya'}))
// console.log(check(null))