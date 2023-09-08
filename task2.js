/**
 * Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20
 */
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } else {}
}

/**
 * Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100.
 */
console.log("");

let total = 0

for (let i = 0; i <= 100; i++) {
    total += i
}
console.log(total)

/**
 * Pola Segitiga Naik
 * Tampilkan pola segitiga asteriks sebagai berikut untuk n = 5. Contoh:

*
**
***
****
*****

 */

console.log("");
let hasil = ''
for (let i = 0; i != 5; i++) {
    hasil += '*'
    console.log(hasil);
}

/**
 * Pola Segitiga Terbalik
 * Tampilkan pola segitiga asteriks terbalik sebagai berikut untuk n = 5. Contoh:
 
*****
****
***
**
*

 */
console.log("");
for (let i = 5; i >= 1; i--) {
    let hasil = '';
    for (let j = 1; j <= i; j++) {
      hasil += '*';
    }
    console.log(hasil);
}

/**
 * Pola Berlian
 * Tampilkan pola segitiga asteriks berlian sebagai berikut untuk n = 5. Contoh:
 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


 */
 
/**
 * Pola Segitiga Bilangan
 * Tampilkan pola segitiga dengan angka dengan asteriks sebagai pemisah:

1
1*2
1*2*3
1*2*3*4
1*2*3*4*5

 */
console.log("");
let n = 5
let baris = "1"

for (let i =1; i <=n; i++) {
    if( baris !== "" ){ // Tambahkan Asterik 
        baris += "*" 
    }
    baris += i
    console.log(baris);
}