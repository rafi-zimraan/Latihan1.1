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

// SPLICE
let m : any =[];
m =['true','false','12','89','boolean','mobil','kaya','pondok'];
m.splice(2,2);
console.log('splice',m);
