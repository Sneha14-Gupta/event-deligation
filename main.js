// const divEl = document.querySelector(".box");
// const btnEl = document.querySelectorAll("button");

// divEl.addEventListener("click", (e) => {
//   //   console.log("clicked")
//   // if(e.target.tagName==="BUTTON"){
//   //   const btnNum=e.target.id.split("").reverve()[1];
//   //   console.log(`clicked ${btnNum}`)
//   console.log("div clicked");
// });

// btnEl.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("btn clicked");
//   });
// });
const formEl = document.querySelector("form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
});