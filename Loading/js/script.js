// loading

// 1. DomContentLoaded
// ashxatuma ev document barov ev window barov bayc aveli chishta document
// 1. document.DomContentLoad = function(){

// }

// let block = document.getElementsByClassName("block")[0]
// let a = [{
//     name: "Narek",
//     text: "Lav mard",
//     photo: "../images/img1.webp",
// },{
//     name: "Vahan",
//     text: "Aveli lav mard",
//     photo: "../images/img2.jpg",
// },{
//     name: "Lianna",
//     text: "El aveli lav mard",
//     photo: "../images/img3.webp",
// }]

// // let img = document.getElementById("img")
// document.addEventListener("DOMContentLoaded",function(){
// function rec(){
//     for(let key of a){
//         let box = document.createElement("div")
//         box.classList.add("box")
//         box.setAttribute("class","box")
//         box.innerHTML=`<h2>${key.name}</h2> <p>${key.text}</p> <img src=${key.photo}/>`
//         document.getElementById("root").prepend(box)
//     }
//     btn.remove()
// }
// let btn = document.getElementsByTagName("button")[0]
// btn.addEventListener("click",rec,{once:true})
// }) // chisht kirareli


// // 2. onload

// window.onload = function(){
//     navigator.sendBeacon(url,data)
// }

// // 3. onbeforeunload // onunload // grvum en loadi het miarjamanak sendbeaconi het miasin

// // window.onbeforeunload = function(){

// // } 

// // or  

// window.addEventListener("beforeunload",function(){

// })

// onbeforeunloady durs galuc araj harcnum e save ani te che

// onunloady patuhan e bacum` hastat durs GainNodem te che


// Proxy

// mi depqum ashxatum e ojectneri vra

// let person = {
//     name: "Narek",
//     age: 18,
//     job: "developer"
// }

// let op = new Proxy(person,{
//     // metodneri hamar
//     get(target,prop){
//         console.log("Taget",target);
//         console.log("Prop",prop);
//         return target[prop]
//     },

//     set(target,prop,value){
//         if(target[prop]){
//            return target[prop] = value
//         }else{
//             throw new Error(`no ${prop} find target`)
//         }
//     },

//     has(target,prop){
//         return ["age","name","job"].includes(prop)
//     },

//     deleteProperty(target,prop){
//         console.log(`deleting...`, prop);
//         delete target[prop]
//         return true
//     }
// })


// mi depqum functionneri vra

// let func = function(text){
//     console.log(` func:${text} `);
// }
// func(`barev`)
// let fp = new Proxy(func,{
//     apply(target,thisArgs,args){
//         console.log(`calling...`);
//         // return new target(...args)
//         return target.apply(thisArgs,args)
        
//     }
// })
// fp("Lianna")


// myus depqum classneri vra

// class User{
//     constructor(name, age, job){
//         this.name = name
//         this.age = age
//         this.job = job
//     }
// }
// let user = new User("Narek",18,"Developer")
// console.log(user);
// let cp = new Proxy(User,{
//     construct(target,args){
//         console.log(`hi...`);
//         // return new target(...args)
//         return new Proxy(new target(...args),{
//             get(target,prop){
//                 if(!(prop in target)){
//                     return prop.split("_")
//                     .map(function(item){
//                       return  target[item]
//                     })
//                     .join(" ")
//                 }
//                 return target[prop]
//             }
//         })
//     }
// })
// let p = new cp("Narek",18,"developer")
// console.log(p);



let obj = {
    name: "Narek",
    age: 18,
    job: "developer",
}


localStorage.setItem("reg",JSON.stringify(obj))
let a = localStorage.getItem("reg")
let b = JSON.parse(a)
console.log(b);

let prox = new Proxy(obj,{
    get(target,prop){
        return target[prop]
    }
})











