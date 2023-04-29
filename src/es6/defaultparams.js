function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 37;
    var country = country || 'COL';
    console.log(name, age, country);
}

newUser();
newUser('Andres', 23, 'COL');

//ECMA SCRIPT 6 

function newAdmin(name='Andres', age=12,country='COL'){
    console.log(name, age, country);
}

newAdmin();