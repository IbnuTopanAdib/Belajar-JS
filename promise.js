// let bertemu = true;

// janji1 = new Promise((resolve, reject) => {
//     if(bertemu){
//         resolve('kita bertemu');
//     }
//     else{
//         reject('kita tidak bertemu');
//     }
// })

// janji1.then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err);
// });

let bayar = true;

janji2 = new Promise((resolve, reject) => {
    if (bayar) {
        setTimeout(()=>{
            resolve("Bayar hutang");
        }, 2000);
    }else{
        setTimeout(()=>{
            reject("Tidak Bayar Hutang")
        },1000)
    }
});
console.log("mulai");

console.log(janji2.then(()=>console.log(janji2)));
// janji2.then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err);
// });

console.log("selesai")



