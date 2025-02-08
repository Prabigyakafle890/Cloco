
// In call stack function one goes first and it removes after execution , then function two and then three.
function One(){
    console.log("One")
}
function Two(){
    console.log("Two")
}
function Three(){
    console.log("Three")
}
One();
Two();
Three();

// In call stack Function oone goes initilay then twoo then threee, the removal order is LIFO:three,twoo and oone.
function Oone(){
    console.log("Oone");
    Twoo();
}
function Twoo(){
    console.log("Twoo");
    Threee();
}
function Threee(){
    console.log("Threee");
}

//callback queue - setTimeOut

console.log("Start");

setTimeout(() => console.log("Callback Task"), 0);

console.log("End");

//Microtask Queue

console.log("Start again");

Promise.resolve().then(()=>{
    console.log("Microtask");
})
console.log("End again");

//combined

console.log("Start again again");

setTimeout(()=>{
    console.log("Callback Queue")}
    ,0);

Promise.resolve().then(()=>{
    console.log("Microtask Queue");
})
console.log("End again again");