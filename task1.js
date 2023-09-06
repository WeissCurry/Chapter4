/**

Soal Latihan: Menentukan Kategori Usia

Buatlah fungsi yang dapat menentukan kategori usia seseorang berdasarkan rentang usia sebagai berikut:
1. 0-12 tahun: "Anak-anak"
2. 13-19 tahun: "Remaja"
3. 20-35 tahun: "Dewasa"
4. 36 tahun ke atas: "Lanjut Usia"

Kalian diminta membuat fungsi kategoriUsia(umur) yang menerima parameter:
1. umur (number): Usia seseorang dalam tahun.

Fungsi ini harus mengembalikan kategori usia berdasarkan rentang usia yang diberikan.

*/

function cekUsia (umur){
    if (typeof umur === "number"){
        if (umur <= 0){
            hasil = "anda masih Zigot!?"
        } else if (umur >= 0 && umur <=12){
            hasil = "Anak-anak"
        } else if (umur >= 13 && umur <= 19){
            hasil = "Remadja"
        } else if (umur >= 20 && umur <= 35){
            hasil = "Dewasa"
        } else {
            hasil = "Landjoet Oesia"
        }
        return hasil
    } else {
        return "mau ngecek apa euweh"
    }
}

console.log(cekUsia(10))
console.log(cekUsia(17))
console.log(cekUsia(30))
console.log(cekUsia(90))
console.log(cekUsia(-1))

/*

Soal Latihan: Penentuan Biaya Parkir

Sebuah mal memiliki aturan biaya parkir sebagai berikut:

1. Jika parkir kurang dari atau sama dengan 1 jam, maka biaya parkirnya adalah Rp10.000.
2. Untuk setiap jam berikutnya (lebih dari 1 jam), biaya tambahan adalah Rp5.000/jam.
3. Jika parkir lebih dari 5 jam, akan diberikan diskon Rp10.000 dari total biaya.
4. Parkir di day Minggu dikenakan biaya tambahan Rp5.000.
5. Jika total biaya parkir lebih dari Rp30.000 dan parkir dilakukan pada hari libur nasional, maka 
akan diberikan diskon tambahan sebesar Rp7.000.

Buatlah fungsi hitungBiayaParkir(lamaParkir, hari, liburNasional) yang menerima parameter:
1. lamaParkir (number): Durasi parkir dalam jam.
2. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
3. liburNasional (boolean): Menandakan apakah hari itu merupakan libur nasional atau tidak (true jika ya, 
    false jika tidak).

Fungsi ini harus mengembalikan biaya parkir berdasarkan kondisi yang diberikan.

*/

function hitungBiayaParkir(lamaParkir, hari, liburNasional) {
    if (typeof lamaParkir === "number" && typeof hari === "string" && typeof liburNasional === "boolean") {
        let biaya = 0

        duration = Math.round(lamaParkir)
        day = hari.toLowerCase()
        
        if (duration <= 1) {
            biaya = 10_000
        } else {
            biaya = 10_000 + (duration - 1) * 5_000 
        }
    
        if (duration > 5) {
            biaya -= 10_000 
        }
    
        if (day === "minggu") {
            biaya += 5_000 
        }
    
        if (biaya > 30_000 && liburNasional) {
            biaya -= 7_000 
        }
    
        return biaya
    } else {
        return "ISI YANG BENER :("
    }
}

console.log("")
console.log(hitungBiayaParkir(6, 'MinGgu', true))
console.log(hitungBiayaParkir(2, 'Sabtu', false))
console.log(hitungBiayaParkir(2.5, 'Sabtu', false))
console.log(hitungBiayaParkir(6, 'Minggu', true))

/*

Soal Latihan: Penjadwalan Acara Festival

Sebuah kota sedang mempersiapkan festival tahunan mereka. 
Mereka ingin membuat sistem otomatis untuk menentukan acara yang akan dijalankan berdasarkan berbagai kondisi. 
Anda diminta untuk membantu membangun fungsi penjadwalan ini.
 
Kriteria Penjadwalan:
1. Jika hari itu hujan dan anginnya kencang (angin > 20 km/jam), maka semua acara di luar ruangan akan dibatalkan.
2. Jika hujan tapi anginnya tidak terlalu kencang, acara di luar ruangan akan dipindahkan ke dalam ruangan.
3. Jika suhu di bawah 5°C, acara konser malam harus diganti dengan acara indoor.
4. Jika hari cerah dan suhu di atas 25°C, tambahkan acara "Pesta Es Krim" di siang hari.
5. Jika hari Minggu dan cerah, tambahkan acara "Maraton Senja".
6. Setiap hari, tanpa memandang kondisi cuaca, akan selalu ada "Pameran Seni" di dalam ruangan.

Tugas Anda adalah untuk membuat fungsi jadwalFestival(hari, cuaca, suhu, angin) yang menerima parameter:
1. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
2. cuaca (string): 'Hujan' atau 'Cerah'.
3. suhu (number): Suhu hari itu dalam °C.
4. angin (number): Kecepatan angin dalam km/jam.

Fungsi ini harus mengembalikan sebuah string yang berisi daftar acara yang akan diadakan berdasarkan kondisi yang diberikan.

*/

function jadwalFestival(hari, cuaca, suhu, angin) {
    if (typeof hari === "string" && typeof cuaca === "string" && typeof suhu === "number" && typeof angin === "number") {
        
        hari = hari.toLowerCase();
        cuaca = cuaca.toLowerCase();
        suhu = Math.floor(suhu);
        angin = Math.floor(angin);

        let agenda = [];

        if (cuaca === "hujan" && angin > 20) {
            agenda.push("Semua acara di luar dibatalkan");
        } else if (cuaca === "hujan" && angin <= 20) {
            agenda.push("Semua acara di luar dipindahkan ke dalam ruangan");
        }

        if (suhu < 5) {
           agenda.push("Konser Malam diganti dengan acara indoor");
        }

        if (cuaca === "cerah" && suhu > 25) {
            agenda.push("Pesta Es Krim (siang hari)");
        }

        if (hari === "minggu" && cuaca === "cerah") {
            agenda.push("Maraton Senja");
        }

        agenda.push("Pameran Seni (di dalam ruangan)");

        return agenda.join("\n");
    } else {
        return "Isi yang bener euy!";
    }
}

console.log(jadwalFestival('Sabtu', 'Hujan', 23, 30));
// Output: Daftar Acara: Pameran Seni.
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 10));
// Output: Daftar Acara: Pameran Seni, Acara Dalam Ruangan.
console.log(jadwalFestival('Minggu', 'Cerah', 27, 8));
// Output: Daftar Acara: Pameran Seni, Pesta Es Krim, Maraton Senja.


