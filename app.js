// alert("hi");

const bodyContainer = document.querySelector("#body-section");
// const numFirstContainer = document.querySelector(".divsection:first-child");
const numContainer = document.querySelectorAll(".divsection");

const numDiv = document.querySelectorAll(".hover-section");
const centerImage = document.querySelector(".center-img");

console.dir(bodyContainer);
// console.dir(numFirstContainer);
console.log(numContainer);
console.log(numContainer[0]);

console.dir(numDiv);

console.log(numDiv);

console.dir(centerImage);
console.log(centerImage);

function onNumOver(event) {
  console.log(event.target.innerText);
  console.dir(event);

  if (event.target.innerText === "#1") {
    centerImage.src = "img2.png";
  } else if (event.target.innerText === "#10") {
    centerImage.src = "img2.png";
  }
  //   centerImage.src = "img2.png";
}

// function onNumOut(event) {
//   centerImage.src = "img1.png";
// }

numDiv.forEach((element) => {
  element.addEventListener("mouseover", onNumOver);
});

// numDiv.forEach((element) => {
//   element.addEventListener("mouseout", onNumOut);
//   element.addEventListener("mouseover", onNumOver);
// });
