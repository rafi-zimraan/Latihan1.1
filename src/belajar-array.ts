// PUSH (MENAMBAH DARI BELAKANG)
let makan : any = [];
makan = ['pizza', 'nasi', 'bayam'];
makan.push('sayur');
console.log('push', makan);

// SHIFT (MENGHAPUS)
let food : any = [];
food = ['kentang', 'susu', 'naget'];
food.shift(2);
console.log('shift',food);

// POP (MENGHAPUS DARI BELAKANG)
let a : any = [];
a = ['dapur', 'siang', 'makan'];
a.pop();
console.log('pop',a);

// UNSHIFT (MENAMBAH DARI DEPAN)
let b : any = [];
b =['mobil','kuda','23','true'];
b.unshift('mereka');
console.log('unshift',b);

// SPLICE (MENGHILANGKAN 2 SEKALIGUS NILAI)
let m : any =[];
m =['true','false','12','89','boolean','mobil','kaya','pondok'];
m.splice(2,2);
console.log('splice',m);

// CONCAT (MENGABUNGKAN SEMUA TIPE DATA)
let number : any = ['123','3435','234','123','456','466',];
let w : any = ['aku','punya','mobil','toyota','supra','yang','harganya','bisa ','beli ','otak','manusia'];
let hasil = w.concat(number);
console.log('concat',hasil);

