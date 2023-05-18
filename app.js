const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const para = document.querySelector(".para");

openButton.addEventListener("click", () => {
    para.style.display = "block";
})

closeButton.addEventListener("click", () => {
    para.style.display = "none";
})


