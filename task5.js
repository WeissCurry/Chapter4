/**
 * setTimeout
 * 
 * Buatlah sebuah fungsi yang menampilkan pesan "Latihan dimulai dalam 5 detik" dan setelah menunggu selama 5 detik, menampilkan pesan "Mulai!".
 * 
 */

// mulaiHitungMundur();
// Latihan dimulai dalam 5 detik...
// Mulai!


/**
 * setInterval
 * 
 * Buatlah sebuah fungsi yang akan menampilkan pesan "Detik ke-{n}" setiap detik. 
 * Fungsi ini harus berhenti menampilkan pesan setelah mencapai "Detik ke-5".
 * 
 */

function tampilkanDetik() {
    let detik = 1;
    const interval = setInterval(() => {
        console.log(`Detik ke-${detik}`);
        detik++;
        if (detik > 5) {
        clearInterval(interval);
        }
    }, 1000);
}

tampilkanDetik ()
// "Detik ke-1"
// (setelah 1 detik) "Detik ke-2"
// (setelah 1 detik lagi) "Detik ke-3"
// (setelah 1 detik lagi) "Detik ke-4"
// (setelah 1 detik lagi) "Detik ke-5"


/**
 * Cek Lari (Gabungan setTimeout dan setInterval)
 * 
 * Buatlah sebuah fungsi yang ketika dijalankan akan menunggu selama 2 detik, kemudian menampilkan pesan "Mulai latihan!". 
 * Setelah itu, fungsi tersebut akan menampilkan pesan "Lari {n} meter!" setiap 1 detik. 
 * Fungsi ini harus berhenti setelah menampilkan pesan "Lari 10 meter!".
 * 
 */

// function mulaiLatihan() {
//     setTimeout(() => {
//       console.log("Mulai latihan!");
//       let jarak = 0;
//       const interval = setInterval(() => {
//         jarak++;
//         console.log(`Lari ${jarak} meter!`);
//         if (jarak >= 10) {
//           clearInterval(interval);
//         }
//       }, 1000);
//     }, 2000);
//   }

function mulaiLatihan() {
    setTimeout(() => {
        console.log("Mulai latihan!");
        let jarak = 0
        const interval = setInterval(() => {
            jarak+=1
            console.log(`Lari ${jarak} meter!`);
        if (jarak >= 10) {
            clearInterval(interval);
        } 
        }, 1000)
    }, 2000)
}

mulaiLatihan();
// Tunggu 2 detik...
// "Mulai latihan!"
// (setelah 1 detik) "Lari 1 meter!"
// (setelah 1 detik lagi) "Lari 2 meter!"
// ... 
// (setelah 1 detik lagi) "Lari 10 meter!"


/**
 * Iterasi Array dengan callback
 * 
 * Buatlah fungsi iterasiArrayDenganCallback(arr, callback) yang menerima sebuah array dan sebuah callback. 
 * Fungsi tersebut harus memanggil callback untuk setiap elemen dalam array tersebut.
 */

// const data = [1, 2, 3, 4, 5];

// iterasiArrayDenganCallback([1, 2, 3], (item, index) => {
//     console.log(`Index: ${index}, Value: ${item}`);
// });
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// Index: 3, Value: 4
// Index: 4, Value: 5


/**
 * Latihan Callback dengan skenario belanja
 * 
 * Saldo awal sebesar Rp100.000. Anda ingin berbelanja di sebuah 
 * toko dengan urutan sebagai berikut:
 * 
 * 1. Membeli buku seharga Rp50.000.
 * 2. Membeli pulpen seharga Rp20.000.
 * 3. Membeli penghapus seharga Rp10.000.
 * 4. Membeli pensil seharga Rp5.000.
 * 
 * Tugas:
 * 1. Buatlah fungsi belanja yang menerima saldo awal,
 *  harga barang, dan sebuah callback.
 * 2. Fungsi tersebut akan mengurangi saldo dengan 
 * harga barang, lalu memanggil callback dengan sisa saldo 
 * setelah pembelian.
 * 3. Jika saldo tidak mencukupi untuk pembelian, 
 * fungsi harus menampilkan pesan "Uang tidak mencukupi" 
 * dan tidak memanggil callback.
 * 4. Gunakan fungsi belanja untuk melakukan setiap pembelian 
 * dengan urutan yang sudah ditentukan.
 * 5. Setelah setiap pembelian, tampilkan sisa saldo Anda.
 * 
 */

function belanja(saldoAwal, namaBarang,hargaBarang, callback) {
    while (saldoAwal >= hargaBarang) {
        saldoAwal -= hargaBarang
        callback(`Membeli ${namaBarang} dengan harga Rp${hargaBarang}. Sisa saldo: Rp${saldoAwal}`)
    } //else {
    //     console.log(`Saldo Anda: Rp${saldoAwal} TIDAK CUKUP HEI!`)
    // }
}

let saldoAwal = 100_000

const barangBerang = {
    buku: 50_000,
    pulpen: 20_000,
    penghapus: 10_000,
    pensil: 5_000
}

for (let barang in barangBerang) { 
    belanja(saldoAwal, barang, barangBerang[barang], (pesan) => {
        console.log(pesan)
        saldoAwal -= barangBerang[barang]
    })
}

/*
bisa juga dikerjain 

belanja
*/

//Output:
// Membeli buku dengan harga Rp50.000. Sisa saldo: Rp50.000.
// Membeli pulpen dengan harga Rp20.000. Sisa saldo: Rp30.000.
// Membeli penghapus dengan harga Rp10.000. Sisa saldo: Rp20.000.
// Membeli pensil dengan harga Rp5.000. Sisa saldo: Rp15.000.



/**
 * Pengurutan dengan Callback
 * 
 * Tuliskan sebuah fungsi urutkanArray(arr, compareFunc, callback) yang menerima 
 * sebuah array, fungsi perbandingan, dan sebuah callback. 
 * Fungsi tersebut harus mengembalikan array yang sudah diurutkan sesuai dengan 
 * fungsi perbandingan ke fungsi callback.
 */


function urutkanArray(arr, compareFunc, callback) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            let cFunction = compareFunc(arr[j], arr[j+1])
            if (cFunction > 0) {
                let tamp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tamp
            }
        }
    }
    
    callback(arr)
}

urutkanArray([3, 1, 4, 1], (a, b) => a - b, (hasil) => {
    console.log(hasil) // [1, 1, 3, 4]
});


