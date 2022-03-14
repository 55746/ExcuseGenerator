let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];



function combArr(arr){
    return Math.floor(Math.random()* arr.length)
}
let p = `${who[combArr(who)]} ${action[combArr(action)]} ${what[combArr(what)]} ${when[combArr(when)]}`
document.getElementById('excuse').innerHTML = p;


//In the HTML file



// function combarr(){
// for(let i in who){
//     for(let j in action){
//         for(let k in what){
//             for(let m in when){
                
//             }
//         }
//     }
// }
// let mix = who, action, what, when
// return mix.Math.floor(Math.random()*10)
// }
// console.log(combarr())
