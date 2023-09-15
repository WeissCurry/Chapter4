/**
 * Konversi Array ke Objek
 * 
 * Diberikan sebuah array yang berisi string, [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ] dan sebuah array berisi number, [4, 6, 6, 5]. 
 * Ubahlah array tersebut menjadi objek dengan kunci berupa nama buah dan nilai berupa panjang dari nama buah tersebut.
 */

let fruits = [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ]
let amount = [4, 6, 6, 5]

const panjangBuah = {}

for (let i = 0; i < fruits.length; i++) {
    panjangBuah[fruits[i]] = [amount[i]]
}

console.log(panjangBuah);

// OUTPUT: { Apel: 4, Mangga: 6, Pisang: 6, Jeruk: 5 }


/**
 * Menghitung Kemunculan Kata
 * 
 * Diberikan sebuah kalimat, "saya suka makan nasi goreng dan saya juga suka minum teh". 
 * Buatlah sebuah objek yang menghitung berapa kali masing-masing kata muncul di dalam kalimat tersebut.
 */

let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh"
const word = favWord.split(" ")

const objWord = {}

/*
bisa juga dikerjain jadi 

for (let i = 0; i <words.length; i++){
    let pattern = words[i]

    if (!objWord[pattern]) {
        objWord[pattern]++// kata yang sama ditambah 1
    } else {
        objWord[pattern] = 1//yg nggak ada = 1
    }
}

*/
word.forEach((key => {
    if (objWord[key]) {
        objWord[key]++// kata yang sama ditambah 1
    } else {
        objWord[key] = 1//yg nggak ada = 1
    }
}))

console.log("");
console.log(objWord)


// OUTPUT:  { saya: 2, suka: 2, makan: 1, nasi: 1, goreng: 1, dan: 1, juga: 1, minum: 1, teh: 1 }


/**
 * Grup Orang Berdasarkan Usia
 * 
 * Diberikan sebuah array objek yang berisi nama dan usia.
 * 1. Akses umur Dewi
 * 2. Kelompokkan objek didalam array berdasarkan usia, dan keluarkan dalam bentuk objek
 * 
 */

const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
]

let umurDewi // OUTPUT: 32

let collectionUmur = {}

people.forEach(person => {
    const {usia} = person;
    if (!collectionUmur[usia]) {
        collectionUmur[usia] = [];
    }
    collectionUmur[usia].push(person);
});

console.log("");
console.log(collectionUmur);

// OUTPUT:
// {
//     20: [ { nama: 'Ana', usia: 20 } ],
//     25: [ { nama: 'Budi', usia: 25 }, { nama: 'Citra', usia: 25 } ],
//     30: [ { nama: 'Eka', usia: 30 } ],
//     32: [ { nama: 'Dewi', usia: 20 } ]
// }


/**
 * Mengakses Properti Bertingkat
 * 
 * Diberikan sebuah objek bertingkat. Akses value dar key city
 */

const data = {
    user: {
        profile: {
            name: "John Doe",
            address: {
                city: "Jakarta",
                postalCode: "12345"
            }
        }
    }
};

console.log("");
let result = data.user.profile.address.city// "Jakarta"
console.log(result);


/**
 * Penghitungan Suara Pemilihan
 * 
 * Terdapat sebuah array berisi suara pemilihan. Hitunglah total suara untuk masing-masing kandidat dan kembalikan dalam bentuk objek.
 */

const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 'Dewi', 'Ana', ];
// OUTPUT :
// { Budi: 3, Ana: 3, Citra: 1, Dewi: 2 }

const suaraTotal = {}


for (let i = 0; i < suara.length; i++) {
    let nama = suara[i]
    if (!suaraTotal[nama]){

        suaraTotal[nama] = 1
    }else{
        suaraTotal[nama]++ 
    }
}

/*
suara.forEach((key => {
    if (suaraTotal[key]) {
        suaraTotal[key]++// kata yang sama ditambah 1
    } else {
        suaraTotal[key] = 1//yg nggak ada = 1
    }
}))

*/

console.log("");
console.log(suaraTotal);


/**
 * Menggabungkan Beberapa Objek
 * 
 * Terdapat beberapa objek dengan struktur yang sama. 
 * Gabungkan objek-objek tersebut sehingga setiap kunci memiliki nilai yang merupakan total dari ketiga objek tersebut.
 */

const obj1 = { a: 5, b: 7, c: 3 };
const obj2 = { a: 4, b: 1, c: 8 };
const obj3 = { a: 9, b: 2, c: 5 };

const objTotal = {}

for (let i in obj1, obj2, obj3) {
    objTotal[i] = obj1[i] + obj2[i] + obj3[i]
}

/*
cara males
const objTotal = {a: obj1.a + obj2.a + obj3.a, b: obj1.b + obj2.b + obj3.b, c: obj1.c + obj2.c + obj3.c,}

*/

console.log(objTotal);
// OUTPUT:
// { a: 18, b: 10, c: 16 }


/**
 * Penyusunan Ulang Objek
 * 
 * Diberikan sebuah objek. Susun ulang objek tersebut agar semua informasi ada di tingkat yang sama,
 * tetapi namai kunci dengan kombinasi informasi yang mereka wakili
 */

const orang = {
    nama: "Budi",
    alamat: {
        jalan: "Jl. Raya",
        kota: "Jakarta",
        kodePos: "10000"
    },
    kontak: {
        email: "budi@mail.com",
        telepon: "080080080"
    }
};
// OUTPUT
// {
    //   nama: "Budi",
    //   alamat_jalan: "Jl. Raya",
    //   alamat_kota: "Jakarta",
    //   alamat_kodePos: "10000",
    //   kontak_email: "budi@mail.com",
    //   kontak_telepon: "080080080"
    // }
    
    const orangBaru = {}
    
    for (let i in orang) {
        orangBaru[i] = orang[i].concat 
    }
    
    console.log(orangBaru);
    

/**
 * Mencari Nilai Tertinggi dan tampilkan nama dan nilainya
 * 
 * Gunakan looping untuk mencarinya. Lalu resultnya menjadi string dengan pernyataan
 */

const mahasiswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ana", nilai: 909 },
    { nama: "Dono", nilai: 78 },
    { nama: "Dewi", nilai: 92 }
];

// OUPUT: Students yang mendapatkan nilai terbesar adalah ... dengan nilai ...

let siPalingAmbis = '' 
let akuCintaDosenKu = -Infinity 

for (let i = 0 ; i < mahasiswa.length ;i++) {
    if (mahasiswa[i].nilai > akuCintaDosenKu) {
        siPalingAmbis = mahasiswa[i].nama 
        akuCintaDosenKu = mahasiswa[i].nilai 
    }
}

let hasil = `Student yang mendapatkan nilai tertinggi adalah ${siPalingAmbis} dengan nilai ${akuCintaDosenKu}.`

console.log("");
console.log(hasil)


/**
 * Konversi Objek ke Array
 * 
 * Rubah objek menjadi array dengan metode looping yang dimana akan dinamis.
 */

const kota = {
    Jakarta: 10,
    Bandung: 5,
    Surabaya: 7,
    Medan: 4
};

console.log("");
let arrKota = Object.entries(kota)
console.log(arrKota);
// OUTPUT:
// [
//   { namaKota: "Jakarta", nilai: 10 },
//   ...
// ]