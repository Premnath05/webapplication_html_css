(function(){
    console.log("welcome")
})
();

for(var i=1;i<=3;i++){
    (function(i,message){
        console.log('$(1):message');
    })(i,'greet');
}

const process = function(id) {
    if (id % 2 === 0) {
        return "fast processing";
    } else {
        return "extra verification";
    }
};

console.log(process(1024));

const numbers = [10, 15, 22, 37, 42, 55, 68, 71];

const oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});

console.log(oddNumbers); 
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); 

function showMessage(){
    console.log("the cursed world");
}
function callShowMessage(hello,callback){
    console.log(hello);
    callback();

}
callShowMessage("all is well",showMessage);


function authorize(role){
    return function(userRole){
        return userRole === role ?"Access granted":"Access denied";

    };
}
const isAdmin =authorize("admin");
console.log(isAdmin("admin"));
console.log(isAdmin("user"));


function sum1(...args){
    let total=0;
    for( const a of args){
        total +=a;
    }
    return total;
}
console.log(sum1 (1,2,3));

function info(...arg){
    for(const a of arg){
        if(typeof(a)=== "string"){
            console.log(a);
        }
    }
}
info(1,2,3,"info graphic");


let [first,second,third,...arr]=["a","b","c","d","e"];

console.log(first);
console.log(second);
console.log(third);
console.log(arr);


function cap(data){
    let ab=data.split("");
    ab[0].toUpperCase();
    return ab.join(''); 
}
console.log(cap("jute"));

const original=[10,20,30];
const copy=[...original];
copy.push(40);
console.log(original);
console.log(copy);

const number=[5,10,15];
function soo(a,b,c){
    return a+b+c;
}
console.log(soo(...number));

// const person={name:"Alice"}

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    welcome(){
        console.log(`hello animeworld ${this.name} and ${this.age}`);

    }
}
const person1=new person("prem",21);
person1.welcome();


class data{
    constructor (name1,age1,work){

    }
}
