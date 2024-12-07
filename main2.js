// let name1 = prompt("1-ismni kirit:");
// let name2 = prompt("2-ismni kirit:");
// let name3 = prompt("3-ismni kirit:");
// let name4 = prompt("4-ismni kirit:");
// let name5 = prompt("5-ismni kirit:");

// let arr = [];

// arr.push(name1, name2, name3, name4, name5);

// console.log(arr);

// const myFunc = (callback) => {
//     // setTimeout(() => {
//     //     for (let i = 1; i <= arr.length; i++){
//     //        console.log(`${i}. ${arr[i-1]}`);
//     //     }
//     // }, 2000);

//     setInterval(() => {
//         for (let i = 1; i <= arr.length; i++){
//            console.log(`${i}. ${arr[i-1]}`);
//         }
//     }, 2000);
// }

// myFunc();




// const myFunc = (callback) => {
//     for (let i = 0; i <= arr.length-1; i++) {
//         let element = `${i+1} ${arr[i]}`;
//         callback(element);
//     }
// }

// myFunc ((result) => {
//     // setInterval(() => {
//     //     console.log(result);
//     // }, 2000);

//     setTimeout(() => {
//         console.log(result);
//     }, 2000);
// })




// ########  DOM  #########

// 1-Elementlarni tanlash:

//               1)

// let title = document.getElementById("title_id");

// let title = document.getElementsByClassName("title_class");            // ???

// console.log(title.textContent);



// let paragraph = document.querySelector("p");

// let paragraph = document.querySelector("h1");

// console.log(paragraph.textContent);









// const users = {
//   name: "Umidjon",
//   age: 24,
//   address: "Tashkent",
//   languages: ["Uzbek", "Russian", "English"],
//   login: function () {
//     console.log(`${this.name} can speak:`);
//     this.languages.forEach((element) => {
//       console.log(element);
//     });
//   },
// };

// users.login();



// const links = [
//   { name: "/home", components: "HomePage" },
//   { name: "/about", components: "AboutPage" },
//   { name: "/contact", components: "ContactPage" },
// ];
// console.log(links.components);

// links.forEach((element) => {
//     console.log(element.name);
// });





// // DOM = Document Object Model:

// // document.getElementById
// // const title = document.getElementById("text");
// // console.log(title);

// // document.getElementsByClassName
// // const title = document.getElementsByClassName("title");
// // console.log(title);

// // document.getElementsByTagName
// // const title = document.getElementsByTagName("h1");
// // console.log(title);

// // document.querySelector
// // const title = document.querySelector('h1')
// // console.log(title);

// // document.querySelectorAll
// const title = document.querySelector(".title");
// const links = document.querySelectorAll(".lists");

// console.log(title.classList.remove("title"));
// // textContent

// // lists.textContent = "Stalin";

// // innerHTML
// // lists.innerHTML = "<mark>Stalin</mark>";

// // setAttribute
// // const elLink = document.querySelector(".link");
// // elLink.textContent = "Go to w3schools";
// // elLink.setAttribute("href", "https://www.w3schools.com/");
// // console.log(elLink);

// // getAttribute
// // elLink.setAttribute("style", "color:green");
// // elLink.style.color = "red";
// // elLink.style.fontSize = "24px";
// // let elPrice = lists.getAttribute("data-price");
// // console.log(elPrice);

// // style
// // elLink.style.color = "red";

// let elTitle = document.querySelector("h1");
// console.log(elTitle);
// elTitle.classList.add('correct')
// elTitle.classList.remove('correct')
// elTitle.classList.add('error')
// elTitle.classList.remove('error')

