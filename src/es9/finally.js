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
.catch(error =>{console.log(error)})
.finally(()=> console.log('Finally!'))