function data () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 55, name: 'Sergey'})
        }, 1000)
    })
}

function gamesData (id) { //почему id не задействован ? 
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const data = ['game 1', 'game 2']
            resolve(data)
        }, 2000)
    })
}


function run() {
    data()
    .then((data) => {
        console.log(data)
      return gamesData()  
    })
    .then((userGames) =>  console.log(userGames))
}

run()


// 1 пример из доки про then()
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      })
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(4,string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    console.log( 1,
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(2,string); // foobar
  });


// переписанный мной в последовательном порядке 1 пример из доки про then()
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    (string) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          console.log(3 ,string, 'string')
          resolve(string);
        }, 1);
      })}
      
  )
  .then((string) => {
   return new Promise ((resolve) => {
        setTimeout(() => {
            console.log(5,string); // foobarbaz
     resolve(string += "baz")
      
    }, 1);
    })
    
  })
  .then((string) => {
    // console.log(
    //   "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    // );

    console.log(6, string); // foobar
  });


  
// 2 пример из доки про then()
  Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error("Oh no!");
  })
  .then(
    () => {
      console.log("Not called.");
    },
    (error) => {
      console.error(`onRejected function called: ${error.message}`);
    },
  );



  let counter = 0; // начинаем с 1
const intervalId = setInterval(() => {
    console.log(counter);
    counter++;
    if(counter === 5) {
        clearInterval(intervalId)
    }
}, 1000); // каждую секунду будет выводиться значение счетчика
