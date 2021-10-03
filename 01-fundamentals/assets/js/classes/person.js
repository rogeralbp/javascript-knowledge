

class Person {
 
    name = '';
    codeName = '';
    phrase = '';

    constructor(name = 'no name', codeName = 'no codeName', phrase = 'no phrase'){

        this.name = name;
        this.codeName = codeName;
        this.phrase = phrase;
    }

    whoIam(){
        console.log(`I am ${this.name} and my codeName name is ${this.codeName}`);
    }

    myPhrase(){
        this.whoIam();
        console.log(`${this.codeName} says ${this.phrase}`);
    }
}

const spiderman =  new Person('Peter PARKER', 'SpiderMan', 'I am your friendly superheroe');
const ironman =  new Person('tONY STARC', 'IronMan', 'I am your friendly metal');

console.log(spiderman);
console.log(ironman);

//spiderman.whoIam();
//ironman.whoIam();

spiderman.myPhrase();
ironman.myPhrase();
