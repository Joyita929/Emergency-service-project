// JS part 1--> heart count
const whiteHeart = document.getElementsByClassName("whiteHeart");
const heartCountFinal = document.getElementById("heartCountFinal");
let heartCount = 0;

for (const heart of whiteHeart) {
  heart.addEventListener("click", function () {
    heartCount++;
    //console.log("heart count " + heartCount);
    heartCountFinal.innerText = heartCount;
  });
}
