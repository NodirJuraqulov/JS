// 1) Primitive 
// String = '23'
// Boolean = true/false
// Number = 1234
// null = 0
// undefined
// BigInt
// Symbol

// 2) Non primitive (Reference)
// Object 




// let x = Math.sqrt(-1)
// console.log(x);


// console.log("Hello World!");



// #############  1  ############

// let myName = "Nodir";
// let myAge = 22;
// console.log("Mening ismim " + myName + ", yoshim " + myAge + " da");


// ##############  2  ############

// let x = "Toshkent";
// x = "Samarqand";
// console.log(x);


// ################  3  ###############

// let x = "Salom, JavaScript";
// // console.log(x.length);
// let l = x.length;
// console.log(l);


// ################  4  #############

// let x="JavaSript-ni o'rganish";
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());


// ############  5  ################

// let x = "I love JavaScript programming";
// console.log(x.includes("JavaScript"));
// console.log(x.indexOf("JavaScript"));


// ##############  6  #############

// let x = "I love JavaScript programming";
// let y = x.slice(7, 17);
// console.log(y);
// console.log(x.substring(7, 17));
// console.log(x.trim(7, 17));    ???



// ###########  7  ############

// let x = "Bu yomon kun";
// let y = x.split(" ");
// y[1] = "yaxshi";
// let z = y.join(' ');
// console.log(z);

// let x = "Bu yomon kun";
// let result = x.replace('yomon','yaxshi')
// console.log(result);



// #############  8  ##########

// let x = "      JavaScript ajoyib        ";
// console.log(x.trim());


// ###########  9  #############

// let x = "JavaScript is qiziqarli";
// console.log(x.split(" "));


// ############  10  ##########

// const idx = objArray.findIndex((elem) => elem.name === "Behruz");       // elementning indexini topib beradi;
// objArray[idx].name = "Botir";       
// console.log(objArray);

// let x = "Bu yomon kun yomon his";
// let y = x.split(" "); 
// let idx = y.findIndex((elem => elem.a === "yomon"));
// y[idx].a = " "
// console.log(y);

// let x = "Bu yomon kun yomon his";
// let result = x.replaceAll('yomon', '')
// console.log(result);


// ##############  11  ############

// let x = "JavaScript is fun";
// let y = x.split(" ");


// ###########  12  #############

// let x = "Salom, dunyo!";
// let y = x.split("");
// console.log(y);
// let z = y.reverse();
// console.log(z.join(""));

// let x = "Salom, dunyo!";
// let result = x.split('').reverse().join('')
// console.log(result);












// ############  3  ###########

// let array = [];
// for (let i = 0; i < 11; i++) {
//     // console.log(i);
//     array.push(i); 
// }
// console.log(array);


// ############  4  ###########

// let array = [];
// for (let i = 2; i <= 20; i+=2) {
//     // console.log(i); 
//     array.push(i); 
// }
// console.log(array);


// ############  6  ###########

// let i = 6;
// let arr = [];
// while (i>=1) {
//     i--;
//     arr.push(i);
// }
// console.log(arr);


// ############  9  ###########

// let number;

// do {
//     number = prompt("Iltimos, 10 dan katta son kiriting:");
// } while (number <= 10);

// console.log("Rahmat! Siz " + number + " ni kiritdingiz.");


// let number;

// do {
//     number = prompt("Iltimos juft son kiriting!: ");
// }   while (number % 2 == 1);

// console.log(`Raxmat! Siz ${number} juft sonini kiritdingiz.`);




// let str;

// do {
//     str = prompt("Iltimos biror so'z yozing: ");
// }   while (str == "");

// console.log("Raxmat!");





// let str;

// do {
//     str = prompt("Ismingiz nima: ");
// }   while (str.toLowerCase() !== "nodir");     

// console.log("Xush kelibsiz, " + str);














// let limit = parseInt(prompt("Fibonachchi sonlari chegarasini kiriting:"));

// let fib1 = 0;
// let fib2 = 1;

// let arr = [fib1, fib2];

// while (true) {
//     let nextFib = fib1 + fib2;
//     if (nextFib > limit) break; // Agar keyingi Fibonachchi son chegaradan oshsa, to‘xtatish
//     // console.log(nextFib);
//     fib1 = fib2; // fib1 ni yangilash
//     fib2 = nextFib; // fib2 ni yangilash
//     arr.push(nextFib);
// }
// console.log(arr);        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
















// let num = parseInt(prompt("Son kiriting: "));
// let arr = [];

// for (let i = 1; i < num+1; i++) {
//     if (num % i == 0) {
//         arr.push(i);
//     }
// }

// console.log(arr);
// console.log(arr.length);







// let num = +prompt("Son kiriting: ");
// let arr = [];

// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);
// let sum = 0
// for (let j = 0; j < arr.length; j++) {
//     const element = arr[j];
//     sum += element
// }
// console.log(sum);








// let num = parseInt(prompt("Son kiriting: "));
// let arr = [];

// for (let i = 0; i < num; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//         arr.push(i);
//     }
// }

// console.log(arr);



// let rand = Math.random() * 10;
// console.log(Math.trunc(rand));

// number = parseInt(prompt("Iltimos, 10 gacha son kiriting: "));
// if (number == Math.trunc(rand)) {
//     console.log("To'g'ri topdingiz!");
// } else {
//     console.log("XATO!");
// }




// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     sum = sum + i;
// }
// console.log(sum);



// let i = 1;
// let arr = [];
// while (i <= 50) {
//     if (i % 7 == 0) {
//         break;
//     }
//     i++;
// }
// console.log(i);




// let num = parseInt(prompt("Son kiriting: "));

// for (let i = 1; i < 10; i++) {
//     console.log(num * i);
// }




// let randomNumbers = [];
// let maxNumber = 0;

// console.log("Tasodifiy sonlar:");

// // 10 ta tasodifiy son yaratish
// for (let i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * 100) + 1; // 1 dan 100 gacha tasodifiy son
//     randomNumbers.push(randomNum);
//     console.log(randomNum);

//     // Eng katta sonni topish
//     if (randomNum > maxNumber) {
//         maxNumber = randomNum;
//     }
// }

// console.log("Eng katta son:", maxNumber);




// let num = prompt("Son kiriting: ")
// let mult = 1;

// for (let i = 1; i <= num; i++) {
//     mult = mult * i;
// }
// console.log(mult);













// document.write("<h1>Hello World!</h1>");

// console.warn("Hello World!");

// console.error("Hello World!");

// alert("Hello World!");

// console.debug("Hello World!");

// let users = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
// ];
// console.table(users);



// let num1 = Number(prompt("1-son: "));
// let num2 = Number(prompt("2-son: "));

// num1 = num1 + num2; 
// num2 = num1 - num2;
// num1 = num1 - num2;

// console.log(num1);
// console.log(num2);

















// 1)  const ismlar = ["Ahror", "Kamol", "Asadbek"];       promtdan kiritilagan ism arrayda bo'lsa togri.


// const ismlar = ["Ahror", "Kamol", "Asadbek"];

// let nam = prompt("Ism kiriting: ");

// if (ismlar.includes(nam) == true) {
//     console.log("Ro'yxatda bor");
// }   else{
//     console.log("Ro'yxatda yoq");
// }




// 2)  viloyatdagi aholi soni.


// let vil = prompt("Viloyatni kiriting: ");


// let arrVil = ["Xorazm", "Buxoro", "Navoiy", "Samarqand", "Jizzax", "Toshkent", "Qashqadaryo", "Surxondaryo", "Andijon", "Farg'ona", "Namangan", "Sirdaryo"];

// // console.log(arrVil.length);
// // console.log(arrSoni.length);

// for (let i = 0; i < arrVil.length; i++) {
//     for (let j = 0; j < arrSoni.length; j++) {
//         arrVil = arrVil[i];
//         arrSoni = arrSoni[j];
//         if (arrVil.includes(vil) == true) {
//             console.log("arrSoni");
//         }
//     }
// }










// 3)  20 limit bor length oshgani va kamini aytsin.


// let lim = Number(prompt("Limitni kiriting: "));

// let x = prompt(": ");

// if (x.length < lim) {
//     console.log(`Bu limitdan ${lim-x.length} ga kam`);
// }   else if (x.length > lim) {
//     console.log(`Bu limitdan ${x.length-lim} ga ko'p`);
// }   else if (x.length == lim) {
//     console.log("JEC");
// }   else {
//     console.log("ERROR");
// }






// 4)  teskari kiritiladigan so'zni toping.


// let word = prompt("So'zni kiriting: ");

// let arr = word.split("")

// let revWord = arr.reverse().join("");

// if (word.toLowerCase() == revWord.toLowerCase()) {
//     console.log("to'g'ri");
// }   else {
//     console.log("noto'g'ri");
// }




// let regionName = prompt('Enter')

// if (regionName == 'Toshkent') {
//     alert(`${regionName} da aholi soni 1 mln`)  
// }   else if (regionName == 'Buxoro') {
//     alert(`${regionName} da aholi soni 2 mln`)
// }   else if (regionName == 'Navoiy') {
//     alert(`${regionName} da aholi soni 3 mln`)
// }   else if (regionName == 'Samarqand') {
//     alert(`${regionName} da aholi soni 4 mln`)
// }   else if (regionName == 'Jizzax') {
//     alert(`${regionName} da aholi soni 5 mln`)
// }   else if (regionName == 'Sirdaryo') {
//     alert(`${regionName} da aholi soni 6 mln`)
// }   else if (regionName == 'Qashqadaryo') {
//     alert(`${regionName} da aholi soni 7 mln`)
// }   else if (regionName == 'Surxondaryo') {
//     alert(`${regionName} da aholi soni 8 mln`)
// }   else if (regionName == 'Andijon') {
//     alert(`${regionName} da aholi soni 9 mln`)
// }   else if (regionName == "Farg'ona") {
//     alert(`${regionName} da aholi soni 10 mln`)
// }   else if (regionName == 'Namangan') {
//     alert(`${regionName} da aholi soni 11 mln`)
// }   else {
//     alert("Bunaqa viloyat yoq!")
// }








// TDM - Temprorary dead zone (Voxtinchali o'lik zona)


// console.log(age);
// var age = 24


// Arrow Function

// const myFunc = () => console.log('Hello')

// myFunc()


// // Expression Function
// const myWork = function () {
//     console.log('Hello');
// }
// myWork()


// // Declaration Function
// mySy()
// function mySy() {
//     console.log('Hello');
// }



// let regionName = prompt('Please enter here the name of a region');

// switch (regionName) {
//     case ('Toshkent'):
//         alert(`${regionName} da aholi soni - 3,6 million kishi`)
//         break;
//     case ('Samarqand'):
//         alert(`${regionName} da aholi soni - 1,6 million kishi`)
//         break;

//     default:
//         alert(`Bunday Viloyat nomi yo'q`)
//         break;
// }





// let x = 10
// let y = 5
// let a = 11


// function calculation(num1, num2, num3) {
//     console.log(num1 + num2 + num3);

// }
// calculation(1, 2, 3)






// function PowerA3(num) {
//     console.log(Math.pow(num, 3));
// }
// PowerA3(3);




// const Triangle = (a) => console.log(a*3);

// Triangle(5);
// Triangle(6);
// Triangle(25);

// console.log((a*Math.sqrt(3))/4);


// myFunc();

// function myFunc(a) {
//     console.log(a*3);
//     console.log((a*Math.sqrt(3))/4);
// }

// myFunc(5);
// myFunc(6);


// function myFunc(a) {
//     console.log(a*3);
//     console.log((a*Math.sqrt(3))/4);
// }

// myFunc(5);
// myFunc(8);
// myFunc(51);



// const K = Number(prompt("Son kiriting: "));

// function myFunc(R) {
//     console.log(10*K+R);
// }

// myFunc(5);


// function kv(a, b, c) {
//     var d = b ** 2 - 4 * a * c;
//     if (d > 0) {
//         console.log("2 ta ildizga ega");
//     } else if (d == 0) {
//         console.log("1 ta ildizga ega");
//     } else {
//         console.log("bo'sh to'plam");
//     }
// }

// kv(1, 2, 3);
// kv(1, 6, 2);
// kv(1, 4, 4);


// function Even(K) {
//     if (K%2==0) {
//         console.log("Juft");
//     } else {
//         console.log("Toq");
//     }
// }

// Even(75);
// Even(68);



// function Time(T) {
//     let H = Math.trunc(T / 3600);
//     T = T - H * 3600;
//     let M = Math.trunc(T / 60);
//     T = T - M * 60;
//     let S = T;
//     // console.log(`${H}:${M}:${S}`);
//     if (H < 10) {
//         console.log(`0${H}:${M}:${S}`);
//     } else {
//         console.log(`${H}:${M}:${S}`);
//     }
// }

// Time(10000);
// Time(400);
// Time(40000);


// function myFunc(H, M, S, T) {
//     H = H + Math.trunc(T / 3600);
//     T = T - Math.trunc(T / 3600) * 3600;
//     M = M + Math.trunc(T / 60);
//     T = T - Math.trunc(T / 60) * 60;
//     S = S + T;
//     M = M + Math.trunc(S / 60);
//     S = S - Math.trunc(S / 60)*60;
//     H = H + Math.trunc(M / 60);
//     M = M - Math.trunc(M / 60)* 60;
//     if (H < 10 && M < 10 && S < 10) {
//         console.log(`0${H}:0${M}:0${S}`);
//     } else if (H < 10 && M < 10) {
//         console.log(`0${H}:0${M}:${S}`);
//     } else if (H < 10 && S < 10) {
//         console.log(`0${H}:${M}:0${S}`);
//     } else if (M < 10 && S < 10) {
//         console.log(`${H}:0${M}:0${S}`);
//     } else if (H < 10) {
//         console.log(`0${H}:${M}:${S}`);
//     } else if (M < 10) {
//         console.log(`${H}:0${M}:${S}`);
//     } else if (S < 10) {
//         console.log(`${H}:${M}:0${S}`);
//     } else {
//         console.log(`${H}:${M}:${S}`);
//     }
// }

// myFunc(8, 59, 21, 10010);




//  #########  FunSimple25:

// function myFunc(K) {
//     if (Math.sqrt(K) == Math.trunc(Math.sqrt(K))) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// myFunc(25);
// myFunc(200);
// myFunc(225);


//  #########  FunSimple25:

// function isPowerOfFive(number) {
//     if (number <= 0) return false; // Manfiy yoki 0 uchun daraja bo'lmaydi

//     while (number % 5 === 0) {
//         number /= 5; // Sonni 5 ga bo'lib davom ettiramiz
//         console.log("True");
//     }

//     return number === 1; // Oxirida 1 qoldi, demak 5 ning darajasi
// }

// isPowerOfFive(125);
// isPowerOfFive(15625);


// console.log("Hello");





// ##################  1:


// let arr = [2, 5, 12, 37, 13, 2, 22, 21, 68];

// let juft = [];
// let toq = [];

// arr.forEach(elem => {
//     // console.log(elem);
//     if (elem % 2 == 0) {
//         juft.push(elem);

//     } else if (elem % 2 == 1) {
//         toq.push(elem);
//     }
// });

// console.log(`juft sonlar: ${juft}`);
// console.log(`toq sonlar: ${toq}`);




// ###################  2:


// let num = Number(prompt("Son kirit: "));
// let arr = [];

// for (let i = 1; i <= num*10; i++) {
//     if (i % num == 0) {
//         arr.push(i);
//     }
// }

// console.log(arr);




// ###################  3:


// function greetUser(name) {
//     console.log(`Salom, ${name}! Xush kelibsiz!`);
// }

// greetUser("Nodir");
// greetUser("Ali");
// greetUser("Bobur");




// ###################  4:


// let arr = [2, 4, 6, 8, 10, 23, 34];
// let sum = 0; 

// arr.forEach(elem => {
//     // console.log(elem);
//     sum += elem;
// });

// console.log(sum);




// ####################  5:


// let num1 = Number(prompt("1-son kirit: "));
// let num2 = Number(prompt("2-son kirit: "));
// let num3 = Number(prompt("3-son kirit: "));
// let arr = [num1, num2, num3]; 

// console.log(arr);

// arr.forEach(elem => {
//     console.log(elem);
// });








// #####################  DARS:

// // Arrow Function
// // Declaration Function
// // Expression Function

// // Arrow Function
// const myFunc = () => {
//     console.log('Hello World');
// }
// myFunc()


// // Expression Function
// const myWork = function () {
//     console.log('Salom Dunyo');
// }
// myWork()



// // Declaration Function
// nameFunc()
// function nameFunc() {
//     console.log('Salom');
// }



// Parameter and Argument of Function



// Arrow Function



// While
// let i = 0
// while (i < 100) {
//     i++
//     console.log(${i}) Nodirjon);
// }

// For
// for (let i = 1; i <= 100; i++) {
//     console.log(${i}) Nodirjon);
// }

// ForOf
// for (const iterator of object) {

// }
// ForEach



// Array Methods

// "concat" - Arrayimizning oxiriga birlashtirvoradi
// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// let newFruits = 'Olma'
// console.log(fruits.concat(newFruits));


// "fill" - Arradigi ma'lumotni to'ldirish va o'rin almashish
// 1)
// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// console.log(fruits.fill('Salom', 1, 3));

// 2)
// let username = new Array(100).fill('Nodirjon')
// console.log(username);


// "entries" - Arrayni index va qiymatini bittada kere bo'ganda ishlatilinadi
// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// for (const [index, value] of fruits.entries()) {
//     console.log(`Index: ${index}, Value: ${value}`);
// }



// "every" - Arrayimizning biz tomonda berilgan sharti qanoatlantirsa true yokida false qaytaradi
// const numbers = [1, 2, 3, 4, 5];
// const allNumber = numbers.every(num => num > 0)
// console.log(allNumber);


// "find" - Arrayimizda birinchi to'g'ri bajarilgan amalni topadi
// const numbers = [1, 3, 7, 8, 10];
// const result = numbers.find(num => num % 2 === 0)
// console.log(result);


// "findIndex" - Arrayimizda birinchi to'g'ri bajarilgan amalning indexini topadi
// const numbers = [1, 3, 7, 8, 10];
// const result = numbers.findIndex(num => num % 2 == 0)
// console.log(result);


// "Flat" - usuli ma'lum bir chuqurlikka birlashtirilgan pastki qator elementlari bilan yangi massiv yaratadi.
// const myArr = [[1, 2], [3, 4], [5, 6]];
// const newArr = myArr.flat();
// console.log(newArr);


// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// fruits.forEach(element => {
//     console.log(element[0]);
// });


// "includes" - Arrayimizda ma'lumotimizni o'z ichiga olishini bilib beradi
// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// console.log(fruits.includes('Apple'));


// "indexOf" - Arrayimizning ma'lumotini nechanchi o'rinda turganligini ko'rsatadi 
// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// console.log(fruits.indexOf('Mango'));


// "join" - Arrayimizning biz bergan belgilar bilan ahjratib beradi
// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// console.log(fruits.join(' / '));


// let fruits = ['Apple', 'Banana', 'Cherry', 'Waterlemon', 'Mango'];
// let keys = fruits.keys()
// keys.forEach(element => {
//     console.log(element);
// });


// let num1 = +prompt("1-sonni kiriting: ");
// let num2 = +prompt("2-sonni kiriting: ");
// let num3 = +prompt("3-sonni kiriting: ");
// let num4 = +prompt("4-sonni kiriting: ");
// let num5 = +prompt("5-sonni kiriting: ");
// let num6 = +prompt("6-sonni kiriting: ");
// let num7 = +prompt("7-sonni kiriting: ");
// let num8 = +prompt("8-sonni kiriting: ");
// let num9 = +prompt("9-sonni kiriting: ");
// let num10 = +prompt("10-sonni kiriting: ");

// // let numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];

// let numbers = [];

// numbers.push(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);

// console.log(numbers); 

// arrToq = [];
// arrJuft = [];

// numbers.forEach(elem => {
//     if (elem % 2 == 0) {
//         arrJuft.push(elem);
//     } else if (elem % 2 != 0) {
//         arrToq.push(elem);
//     }
// });

// console.log(`Juft sonlar: ${arrJuft}`);
// console.log(`Toq sonlar: ${arrToq}`);

// let result = numbers.reduce((acc, num) => acc + num, 0);
// console.log(result);



// let result = numbers.reduce((acc, num) => acc + num, 0)
// console.log(result);





// ##################  CallBack Function:

// const myfunc = (callback) => {
//     let age = 24
//     callback(age)
// }

// myfunc((value) => {
//     console.log(value);
// })



// const myData = (callback) => {
//     setTimeout(() => {
//         let username = 'Nodirjon'
//         callback(username)
//     }, 5000);

//     // setInterval(() => {
//     //     let username = 'Nodirjon'
//     //     callback(username)
//     // }, 5000);
// }

// myData((value) => {
//     console.log(value);
// })



// IIFE = Immediately Invoked Function Expression (Darhol chaqirilgan funksiyaning ifodasi)

// (function () {
//     console.log('salom');
// })()

// (function () {
//     console.log("Hello World!");
// }) ();



// function tugadi() {
//     console.log("Vaqt tugadi!");
// }

// console.log("Ish boshladi...");
// setTimeout(tugadi, 2000); // 2 soniyadan so'ng tugadi funksiyasi chaqiriladi


// function finish() {
//     console.log("To finish!");
// }

// console.log("Begin...");
// setTimeout(finish, 5000);


// function otinYor(callback) {
//     console.log("O‘tin yorilmoqda...");
//     setTimeout(() => {
//         console.log("O‘tin tugadi!");
//         callback(); // Callback funksiya: choy qaynatishni chaqiryapti
//     }, 5000); // 5 soniya kutamiz (vaqtni tasvirlash uchun)
// }

// function choyQaynat(choy) {
//     console.log("Choy qaynatilmoqda...");
//     setTimeout(() => {
//         console.log("Choy qaynatildi!");
//         choy();
//     }, 3000);
// }

// // Otin yorganingdan keyin choy qaynatishni so'raymiz
// otinYor(choyQaynat);




// function shorvaPishir(callback) {
//     console.log("Sho‘rva pishmoqda...");
//     setTimeout(() => {
//         console.log("Sho‘rva pishdi!");
//         callback(); // "Idishga solishni" chaqiradi
//     }, 2000); // 2 soniya kutib turadi
// }

// function idishgaSol() {
//     console.log("Sho‘rva idishga solindi!");
// }

// // Sho‘rva pishirgandan keyin idishga solishni aytib qo‘yamiz
// shorvaPishir(idishgaSol);



// let talabalar = ["Ali", "Vali"];

// function ro'yxatniKor() {
//     console.log("Talabalar ro‘yxati:");
//     talabalar.forEach((talaba, index) => {
//         console.log(`${index + 1}. ${talaba}`);
//     });
// }

// function talabaniQosh(yangiTalaba, callback) {
//     // Bu yerda yangi talabani ro‘yxatga qo‘shib, callbackni chaqir
//     setTimeout(() => {
//         talabalar.push(yangiTalaba);
//         console.log(`${yangiTalaba} tizimga qo‘shildi!`);
//         callback(); // Callback funksiyani shu yerda chaqir
//     }, 2000);
// }

// "Sardor" ismli talabani qo‘sh va ro‘yxatni ko‘rishga o‘t



// let students = ["Ali", "Bobur"];

// function list() {
//     console.log("Talabalar ro'yxati: ");
//     students.forEach((talaba, index) => {
//         console.log(`${index + 1}. ${talaba}`);
//     });
// }

// list();

// function add(newstudend, callback) {
//     setTimeout(() => {
//         students.push(newstudend);
//         console.log(`${newstudend} tizimga qo'shildi!`);
//         callback();
//     }, 5000);
// }

// add("Sardor", list);




// const myFunc = (callback) => {
//     let name = "Nodir";
//     callback(name);
// }

// myFunc((result) => {
//     console.log(`Xayrli tong! ${result}`);
// })

// myFunc ((salom) => {
//     console.log(`Salom, ${salom}`);
//     console.log(`${salom}, Bugun yomg'irli kun!`);
// })


// const myFunc = (callback) => {
//     let age = 22;
//     callback(age);
// }

// myFunc ((myAge) => {
//     console.log(`Men 2 yildan keyin ${myAge+2} yoshda bo'laman!`);
// })





// const myFunc = (callback) => {
//     let name = "Nodir";
//     callback(name);
// }

// myFunc ((firstname) => {
//     console.log(`Mening ismim ${firstname}`);
// })



// const myFunc = (callback) => {
//     let city = "Tashkent";
//     callback(city);
// }

// myFunc ((poytaxt) => {
//     console.log(`${poytaxt} - O'zbekistonning poytaxti.`);
//     console.log(`UZMU ${poytaxt} shahrida joylashgan.`);
//     console.log(`Men hozirda ${poytaxt}da yashayman.`);
// })



// console.log("Hozir vaqt: 12:00:32");

// const myFunc = (callback) => {
//     setTimeout(() => {
//         let time = "12:00:37"
//         callback(time);
//     }, 5000);
// }

// myFunc ((now_time) => {
//     console.log(`Endi esa vaqt: ${now_time}`);
// })


// const myFunc = (callback) => {
//     setInterval(() => {
//         let word = "interval";
//         callback(word);
//     }, 5000);
// }

// myFunc ((x) => {
//     console.log(x);
// })



