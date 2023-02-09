Dropdown  = document.querySelector(".dropdown")
Drop = document.querySelector(".drop");
Close = document.querySelector(".close");

Drop.addEventListener("click", () =>{
    Dropdown.style.display = 'flex';
})
Close.addEventListener("click", () =>{
    Dropdown.style.display = 'none';
})