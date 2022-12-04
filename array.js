const makanan = ['rendang', 'satee', 'gulai'];

/*
    Method push digunakan untuk menambahkan element array pada index terakhir
*/

makanan.push('bakso');

console.log(makanan);

/*
method pop digunakan untuk menghapus element array pada index terakhir
*/

makanan.pop();
console.log(makanan);

/*
method shift digunakan untuk menghapus element array pada index pertama
*/

makanan.shift();

console.log(makanan);

/*
method unshift digunakan untuk menambah element array pada index pertama
*/

makanan.unshift('capcai');
console.log(makanan);


function woy(array, babi ){
    return array.push(babi);
}

const array2= [1,2,3,4,5];

woy(array2,6)

console.log(array2);


