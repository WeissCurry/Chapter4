/**
 * Hapus item terkhir
 * 
 * let fruits = ['apple', 'banana', 'cherry']
 */

let fruits = ['apple', 'banana', 'cherry']
console.log(fruits);
// Output: ['apple', 'banana']
fruits.pop()
console.log(fruits);
console.log('');




/**
 * Cari panjang array
 * 
 * Diberikan sebuah array ['a', 'b', 'c', 'd', 'e']. Tentukan panjang dari array tersebut.
 */

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e']
console.log(bulkAlphabet);
// Output: 5
console.log(bulkAlphabet.length);
console.log('');

/**
 * Cari nilai tertinggi dan terendah
 * 
 * Terdapat array [21, 19, 10, 89, 3, 20, 33, 34], tentukan nilai tertinggi dan nilai terendah. 
 * Setelah itu urutkan array tersebut tanpa menggunakan built in function
 */
let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34,]

let angkaMax = -Infinity
let angkaMin = Infinity

for (let i = 0; i <angkaUnik.length; i++) {
    // console.log(i);
    console.log(i + "==>" + angkaUnik[i])
    if (angkaUnik[i] > angkaMax) {
        angkaMax = angkaUnik[i]
    } else if (angkaUnik[i] < angkaMin)
        angkaMin = angkaUnik[i]
}
console.log(angkaMax)
console.log(angkaMin)

/**
 * Gabungkan Dua Array, berikut dengan ketentuan:
 * 1. Menggunakan built in function
 * 2. Tidak menggunakan built in function
 * 
 * [1, 2, 3] dan [4, 5, 6]
 */
let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
// Output : [1, 2, 3, 4, 5, 6]

console.log('');
let result2 = [...arr1, ...arr2]
console.log(result2);


/**
 * Filter huruf ganjil
 * 
 * Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
 * Buatlah sebuah array baru yang hanya berisi angka ganjil dari array tersebut.
 * 
 * Ketentuan tanpa menggunakan built in function
 */
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let angkaGanjil = []
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 1) {
        angkaGanjil.push(arr3[i])
    }
}

console.log(angkaGanjil); // [1, 3, 5, 7, 9]


/**
 * Susun ulang array
 * 
 * Diberikan array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]. 
 * Urutkan array ini dari yang terkecil ke terbesar, kemudian balikkan urutannya. 
 * Setelah itu, hapus angka yang sama sehingga setiap angka hanya muncul sekali.
 * 
 * Bisa menggunakan built in function. Kisi2 sebagai berikut:
 * 1. Urutkan array terlebih dahulu
 * 2. Balik urutan array tersebut
 * 3. Hapus angka yang duplikat
 */

let angkaKumupulan =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// Output : [9, 6, 5, 4, 3, 2, 1]

let short1 = angkaKumupulan.sort(function(a, b) {
    return a - b;
});
let angkaKumupulan2 = short1.reverse()


console.log(short1); 

let uniqueArray = []
for (let i = 0; i<angkaKumupulan2.length;i++){
    // console.log(uniqueArray.indexOf(angkaKumupulan[i]));
    if (uniqueArray.indexOf(angkaKumupulan2[i])=== -1) {
        uniqueArray.push(angkaKumupulan2[i])
    }
} 
console.log(uniqueArray);


/**
 * Menggabungkan Array dengan Spesifik
 * Memiliki dua array, arr1 = [1, 2, 3] dan arr2 = ['a', 'b', 'c']. 
 * Gabungkan kedua array tersebut sehingga mendapatkan hasil ['a', 1, 'b', 2, 'c', 3].
 */

let kumpulanAngka = [1, 2, 3]
let kumpulanHuruf = ["a", "b", "c"]

function selangSeling(arr1, arr2) {
    let hasil = []
    let panjangArr1 = arr1.length
    let panjangArr2= arr2.length

    for (let i = 0; i  < Math.max(panjangArr1, panjangArr2); i++) {
        if (i < panjangArr1){
            hasil.push(arr1[i])
        } 
        if (i < panjangArr2){
            hasil.push(arr2[i])
        }
    }
    return hasil
}

console.log(selangSeling(kumpulanAngka, kumpulanHuruf))

