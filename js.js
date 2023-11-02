// let images = [
//   "https://images.pexels.com/photos/134074/pexels-photo-134074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/3110354/pexels-photo-3110354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//   "https://images.pexels.com/photos/2538107/pexels-photo-2538107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/8532069/pexels-photo-8532069.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
//   "https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
// ];

// let imageElem = document.querySelector(".image");
// let i = 0;
// imageElem.setAttribute("src", images[i]);
// setInterval(() => {
//   if (++i === images.length) {
//     i = 0;
//   }
//   imageElem.setAttribute("src", images[i]);
// }, 1500);

// let form = document.querySelector("form");
// let title = document.querySelector(".title");
// let incre = document.querySelector(".incre");
// let decre = document.querySelector(".decre");

// let getvalue = 0;
// function getvalues() {
//   title.textContent = getvalue;
// };
// let increfun = () => {
//   getvalue++;
//   title.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
//   getvalues();
//   console.log(title.style.backgroundColor);

// };
// let decrefun = () => {
//   getvalue--;
//   getvalues();
// };
// incre.addEventListener("click", increfun);
// decre.addEventListener("click", decrefun);


// title.style.color = "blue"


// let btn=document.querySelector(".btn")
// btn.addEventListener('click' , ()=>{
//   alert("salom")9
// })
// btn.addEventListener("dblclick", () => {
//   alert("assalom");
// });

// btn.addEventListener("contextmenu", () => {
//   alert("assalom");
// });
let body=document.querySelector("body")
let fotoclicked=document.querySelector(".image")
let images = ["./photo1.jpg", "./photo2.jpg"];
let i=0;

fotoclicked.addEventListener("click", () =>  {
  if (++i === images.length) {
    i = 0;
  }
  fotoclicked.setAttribute("src", images[i]);
  
  
});




let form=document.querySelector('form')
let ul = document.querySelector("ul");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let input=e.target[0];
  let text=input.value;
  if (!text){
    alert("Bo'sh String Qabul Qilinmaydi");
    return;
  }
  ul.innerHTML+="<li>"+text+"</li>";
  e.target.reset();
  
  
  console.log("submitted", input.value);
});
setInterval(() => {
  
  let inputtext=document.querySelector("input")
  inputtext.style.backgroundColor = "#" + Math.random().toString(10).slice(2, 8);
}, 500);
