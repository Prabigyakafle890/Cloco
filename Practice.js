console.log(0 || "Fallback"); // "Fallback" (because 0 is falsy)
console.log(0 ?? "Fallback"); 

let age= 22;
let isAdult= age > 18?"Yes":"No";
console.log(isAdult)

const myTasks = ["Clean the house", "Write documentation", "Call the bank"];
myTasks.forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task}`);
});

const fruits=["Banana","Apple","Grapes"];
fruits.forEach((fruit,index)=>{
    console.log(`Fruit ${index+1}:fruit`);
});


//Destructuring array

let [a,b,...rest] = fruits;
console.log(a, b,rest);

let newArr=[1,2,3,5,8,12,14,15];
let [c, , , ,...remaining] = newArr;
console.log(c,remaining);

//Destructing objects

const Person = {
    name:'Prabigya',
    age:22,
    level:'Bachelor',
    address:'Kirtipur',
    contact: '9762260656'
};

let {name,age} = Person;
console.log(name,age);

console.log(Person["address"]);

console.log(Person.contact);

//Rest Operator - ...

function addNumbers(a,b,c,...other){
    console.log(other);
    return a+b+c;
    
}
let res= addNumbers(2,3,4,5);
console.log(res);

//spread operator with array

let names=["sita","gita","hari"];

function displayNames(name1,name2,name3){
    console.log(name1,name2,name3);
}
displayNames(...names);

//spread operator with object

const students={
    name:"Prabigya",
    age:22,
    hobbies:["watching movies","singing","reading books"]

}

let newStudent={
    ...students,
    name:"Sumi",
    age:29
}
console.log(newStudent);


//filter
const nums= [1,2,3,4,5,6,7,8,9];

const values = nums.filter((num)=>num>4)
console.log(values);

const newValues = nums.filter((num)=>{
    return num>4                       //arrow function wont return if block is created unless explicitly specified
});
console.log(newValues);



let books=[
    {name:"Book1",genre:"Rom-Com", Published:2004},
    {name:"Book6",genre:"Rom-Com", Published:2009},
    {name:"Book2",genre:"Fiction", Published:2020},
    {name:"Book3",genre:"history", Published:2018},
    {name:"Book4",genre:"Science", Published:2017},
    {name:"Book5",genre:"Rom-Com", Published:2004},
];

const bookList = books.filter((book)=>{
    return book.genre==="Rom-Com"
})
console.log(bookList);


//map
const numbers= nums.map((num)=>num+10);
console.log(numbers);

//chaining
const numm = nums.map((num)=>num*10)
                 .map((num)=>num+1)
                  .filter((num)=>num>20);
console.log(numm);

//reduce

const myTotal= nums.reduce((acc,currval)=>{
    console.log( `acc:${acc} and currval:${currval}`);
    return acc+currval;
},2);
console.log(myTotal);


const shoppingCart=[{
    name:"JS",
    price:999
},
{
    name:".Net",
    price:1299
},
{
    name:"Data Science",
    price:1599
}];

const Total = shoppingCart.reduce((acc,currval)=>{
    return acc+currval.price;
},999);

console.log(Total);
