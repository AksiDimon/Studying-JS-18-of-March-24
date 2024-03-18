function maxSum (root) {
    
    if(root === null) {
        return 0
    }
    if(root.right === null && root.left === null) {
        return root.value
    }
    if(root.left !== null &&  root.right === null) {
        return root.value + maxSum(root.left);
    }
    if(root.right !== null && root.left === null) {
        return root.value + maxSum(root.right)
    }
    if(root.right !== null && root.left !== null) {
        return Math.max(maxSum(root.right), maxSum(root.left)) + root.value 
    }
    
}

// const tree = null
// assert.equal(maxSum(tree), 0, tree.toString()); // null не работает с toString()
// assert.equal(maxSum(tree), 0, String(tree)); // а String работает если с ним вызвать null


const root = {
    value: 1, // ← 
    left: {
      value: 5,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
    right: {
      value: 2, // ←
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 9, // ←
        left: null,
        right: null,
      },
    },
  };

  
  console.log(maxSum(root)); // 1 + 2 + 9 === 12


function findId (catalog, id) {
    if(id === catalog.id) {
        return catalog
    }
    for(const child of catalog.children) {
        const rec = findId(child, id);
        if(rec !== false) {
            return rec // это условие предпологает что если цикл for закончился,  после цикла вернется самый нижний return  а дальше если он равен фолс то вернется верхнее условие. а значит то что нам нужно.
        }
    }
    return false
}

function takeAllId (catalog) {
    const map = catalog.children.map(child => child.id)
    
    for(const child of catalog.children) {
        const rec = takeAllId(child);
        map.push(...rec)
    }
    return map
}




function allChild (catalog, id) {
    const thatId = findId(catalog, id);
    return takeAllId(thatId);
}
// задача allCild 
// 1 найти нужный нам id
// 2 рекурсивно собрать все id
// 2 в основной функции  соеденить обе функции. // сделать константой результат где нашел нужный id  и от не запускать сбор всех id детей.


// задача breadcrembs
//нужно собрать в массив все name от корневова объекта до того в каком id находится чел;
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
  console.log(takeAllId(catalog))
  console.log(findId(catalog, '123'), '&&&&')
   console.log(allChild(catalog, '2')); //['3','4' ,'123' ]
