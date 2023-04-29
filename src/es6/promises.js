const miFuncion = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Resuelto!');
        }else{
            reject('Whooooops!');
        }
    })
}

miFuncion()
.then(Response => console.log(Response))
.catch(error =>{console.log(error)});

const names = (name) => {
return new Promise((resolve, reject) => {
    if(name == 'Andres'){
        resolve('Correcto!');
    }else{
        reject("Incorrecto!");
    }
})};

names('Andres').then( respuesta => console.log(respuesta))
.catch(error =>{
    console.log(error);
});

