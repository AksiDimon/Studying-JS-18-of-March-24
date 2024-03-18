function id2children(catalog) {
    let result = {};
    const children = catalog.children.map(child =>  child.id)
    result[catalog.id] = children;
    for(const child of catalog.children) {
     const rec = id2children(child);
     console.log(rec)
    }
    return result
  }


  const catalog = {
    id: "1",
    name: "Электроника",
    children: [
      {
        id: "2",
        name: "Товары для компьютера",
        children: [
          { id: "3", name: "Оперативная память", children: [] },
          { id: "4", name: "Процессоры", children: [] },
        ],
      },
      { id: "5", name: "Мобильные телефоны", children: [] },
    ],
  };

  console.log(id2children(catalog));
console.log([].map(val => val + 1)) // пример того что если передать в map пустой массив он вернет пустой массив. а не undefind




function id2parent(catalog, parent = null) {
   let result = {};
   const keyForResult = catalog.id;
   result[keyForResult] = parent;
   for(const child of catalog.children) {
    const rec = id2parent(child, catalog.id);
    console.log(rec)
   }
   return result
  }
  console.log(id2parent(catalog))