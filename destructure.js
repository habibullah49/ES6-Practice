const person ={
    name:'jack William',
    age:17,
    job:'facebooker',
    gf:'Ema Watson',
    address:'Kochu Khet',
    phone:'017939192906',
    frieds:['amir','haib','shanto','soron'],
}

const gfName = person.gf;
const phone = person.phone;

const {phone,job,address,salary} = person;


const complexObject ={
    name: 'abc',
    info:{
        address:'kolabagan',
        leader:'Tiger',
    }
}

const {address, leader} = complexObject.info;
console.log(address, leader);

// console.log(phone,job,address,salary);



const friends = ['sakib khan', 'arman khan', 'salman khan', 'sharkh khan'];

const [chotoFrined,nextFriend,...restFriend] = friends;

console.log(chotoFrined,nextFriend,...restFriend);
