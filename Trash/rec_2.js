function breadcrumbs (catalog, id, result = []) {
    if ( id === catalog.id) {
        return [...result, catalog.name];
    }
    for(const child of catalog.children){
        const rec = breadcrumbs(child, id, [...result, catalog.name]);
        if (rec !== false){
            return rec
        }
    }
    return false
}




const catalog = {
    id: '1',
    name: 'Электроника',
    children: [
      { id: '5', name: 'Мобильные телефоны', children: [] },
      {
        id: '2',
        name: 'Товары для компьютера',
        children: [
          {
            id: '3',
            name: 'Оперативная память',
            children: [{ id: '123', name: 'Qwerty', children: [] }],
          },
          { id: '4', name: 'Процессоры', children: [] },
        ],
      },
    ],
  };


  console.log(breadcrumbs(catalog, "1"));
// ["Электроника"]

console.log(breadcrumbs(catalog, "3"));
// ["Электроника", "Товары для компьютера", "Оперативная память"]

console.log(breadcrumbs(catalog, "5"));
// ["Электроника", "Мобильные телефоны"]



  const obj = {
        m: {
          o: {
            w: 4n,
            g: true,
          },
          f: 571,
        },
      };
      
function isObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
  }            //false                      //true      //false
   console.log(!isObject([1,2])) // false
//   console.log(isObject(1)) //false
//   console.log(!isObject({})) // true
//   console.log(isObject({g: 1, a: 'qwe'})) // true
//   console.log(isObject('rty')) //false
//   console.log(isObject(false)) // false
//   console.log(isObject((x) => x + 1)) // false
//   console.log(!isObject(null)) // false
  //для null c вызовом ! будет true
  
  function flattenMap(obj, keys = []) { 
    const newObj = {};
    for(const key in obj) {
        const joinKeys = [...keys, key].join('/')
        if(!isObject(obj[key])) {
            newObj[joinKeys] = obj[key];
        } else {
            const rec = flattenMap(obj[key], [...keys, key]);
           
            for(const k in rec) {
                newObj[k] = rec[k];
            }
        }
    }
    return newObj
    }


  const obj1 =   {
        'a': {
          'b': {
            'c': 12,
            'd': 'Hello World'
          },
          'e': [1,2,3]
        }
      };
    //   {
    //     'a/b/c': 12,
    //     'a/b/d': 'Hello World',
    //     'a/e': [1,2,3]
    //   }
      


    //   flattenObj(obj) === {
    //     "m/o/w": 4n,
    //     "m/o/g": true,
    //     "m/f": 571,
    //   };

      console.log(flattenMap(obj1));

      
    //   {
    //     id: '1',
    //     name: 'Электроника',
    //     children: [
    //       { id: '5', name: 'Мобильные телефоны', children: [] },
    //       {
    //         id: '2',
    //         name: 'Товары для компьютера',
    //         children: [
    //           {
    //             id: '3',
    //             name: 'Оперативная память',
    //             children: [{ id: '123', name: 'Qwerty', children: [] }],
    //           },
    //           { id: '4', name: 'Процессоры', children: [] },
    //         ],
    //       },
    //     ],
    //   };
      function id2children (catalog) {
        let result = {};
        result[catalog.id] = catalog.children.map(child => child.id);
        for(const child of catalog.children) {
            const rec = id2children(child);
            for(const key in rec) {
                result[key] = rec[key]
            }
        }
        // const rec =  id2children(catalog.children)
        return result
      }

      console.log(id2children(catalog));

      const expected = {
        "1": ["2", "5"],
        "2": ["4", "3"],
        "3": [],
        "4": [],
        "5": [],
      }

//1) про мороз и солнце
//2) можно ли функцию ниже написать без if



function isObjects (obj) {
   if(typeof obj !== 'object' || Array.isArray(obj)|| Object.keys(obj).length === 0 ) {
    return false
   }
   return true
    

//   return typeof obj === 'object' && obj !== null && !Array.isArray(obj) && Object.keys(obj).length !== 0
   
    
                // true                //true                   //true                   //false
}
console.log( Object.keys({}).length  === 0)
console.log(isObjects({a: 1})) // true 
console.log(isObjects({})) // false
console.log(isObjects([])) // false
console.log(isObject(null)) //false


function depth (obj) {
    if(!isObjects(obj) || obj === null) {
        return 0
    }
      const valueObj = Object.values(obj);
    console.log(valueObj)
    const depths = valueObj.map(val => depth(val));
    // console.log(depths)
    return Math.max(...depths) + 1
}

      const obj2 = {
        a: 1,
        b: {
          c: 2,
          d: 3,
        },
        e: {
            j: null,
          f: {
            g: 4,
            h: 5,
          },
        },
        i: 6,
      };
      
      // обратились три раза и дошли до примитива:
      // obj.e.f.g
      
       console.log(depth(obj2)); // 3
      
      