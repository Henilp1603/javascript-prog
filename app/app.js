const input=document.querySelectorAll(".input-field");
const toggle_btn=document.querySelectorAll(".toggle");
const main=document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const image = document.querySelectorAll(".image");


input.forEach((inp)=> {
   inp.addEventListener("focus",()=>{
       inp.classList.add("active");
   });


inp.addEventListener("blur",()=>{
    
    if (inp.value !="") return;
    inp.classList.remove("active");
   });
});
  
toggle_btn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        main.classList.toggle("sign-up-mode");
    });
});

function moveslider(){
    let index= this.dataset.value;

    let currenrImage = document.querySelector(`.img-${index}`);
    image.forEach((img)=> img.classList.remove("show"));
    currenrImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index-1)*2.2}rem)`;

    bullets.forEach((bull)=>bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet)=>{
    bullet.addEventListener("click",moveslider);
});