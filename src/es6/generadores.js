function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Andres','Oscar','David','Ana','Jenn']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)


function* id(){
    let id = 0
    while(true){
       id++;
        yield id
    }
}

const getId = id();
console.log(getId.next().value)
console.log(getId.next().value)
console.log(getId.next().value)