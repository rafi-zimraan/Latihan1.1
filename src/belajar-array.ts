// // PUSH (MENAMBAH DARI BELAKANG)
// let makan : any = [];
// makan = ['pizza', 'nasi', 'bayam'];
// makan.push('sayur');
// console.log('push', makan);

// // SHIFT (MENGHAPUS)
// let food : any = [];
// food = ['kentang', 'susu', 'naget'];
// food.shift(2);
// console.log('shift',food);

// // POP (MENGHAPUS DARI BELAKANG)
// let a : any = [];
// a = ['dapur', 'siang', 'makan'];
// a.pop();
// console.log('pop',a);

// // UNSHIFT (MENAMBAH DARI DEPAN)
// let b : any = [];
// b =['mobil','kuda','23','true'];
// b.unshift('mereka');
// console.log('unshift',b);

// // SPLICE (MENGHILANGKAN 2 SEKALIGUS NILAI)
// let m : any =[];
// m =['true','false','12','89','boolean','mobil','kaya','pondok'];
// m.splice(2,2);
// console.log('splice',m);

// // CONCAT (MENGABUNGKAN SEMUA TIPE DATA)
// let number : any = ['123','3435','234','123','456','466',];
// let w : any = ['aku','punya','mobil','toyota','supra','yang','harganya','bisa ','beli ','otak','manusia'];
// let hasil = w.concat(number);
// console.log('concat',hasil);

// PERULANGAN 
for (let y = 0; y <= 10; y++) {
    for(let x = 0; x <= 10; x++) {
        if( y + x == 5||  x == 5 || y - x == 5 || x - y == 5|| x  + y == 15 || x == 10 || x == 0 || y == 0|| y == 10)   {
            document.writeln(" * ")
        } else { 
            document.writeln(" _ ")
        }
    }
    document.write("</br>")
}

document.write("</br>")

for (let o = 0; o <= 10; o++) {
    for(let p = 0; p <= 10; p++) {
        if ( o != 5 || p != 5 ) {
            document.write(" - ")
        } else {
            document.write(" 9 ")
        }
    }
    document.write("</br>")
}