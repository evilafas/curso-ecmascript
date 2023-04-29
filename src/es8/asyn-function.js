const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async'), 2000)
            : reject(new Error('Error!'));
    })
}

const async = async () => {
    const algo = await fnAsync();
    console.log(algo);
    console.log('Hey!');
}

console.log('Before');
async();
console.log('after');


const myName = () => {
    return new Promise((accept, reject) => {
      (true) ? setTimeout(() => accept('Andres'), 2000)
        : reject(new Error('Error!'));
    });
  };
  
  const name = async () => {
    const nombre = await myName();
    console.log(nombre);
  };
  
  console.log("Mi nombre es: ");
  name();
