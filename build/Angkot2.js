"use strict";
let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let nomerAngkot = 1;
while (nomerAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomerAngkot} beroperasi dengan baik `);
    nomerAngkot++;
}
for (nomerAngkot = angkotBeroperasi + 1; nomerAngkot <= jumlahAngkot; nomerAngkot++) {
    console.log(` Angkot No. ${nomerAngkot} Tidak beroperasi dengan baik`);
}
