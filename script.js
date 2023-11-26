const img = document.querySelector("#img-cont");

window.addEventListener("mousemove", (dets)=>{
    xValue = dets.clientX - window.innerWidth / 2;
    yValue = dets.clientY - window.innerHeight / 2;
    let speedx = 0.04;
    let speedy = 0.02;
    img.style.transform = `translateX(calc(${-xValue*speedx}px)) translateY(calc(${yValue*speedy}px))`;
})