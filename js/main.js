let span = document.querySelector(".nav__toggle"),
  list = document.querySelector(".navbar-expand-lg .navbar-collapse"),
  links = document.querySelectorAll(".navbar-light .navbar-nav .nav-link"),
  blink = [...links];

const sections = document.querySelectorAll("section");

span.onclick=function(){
    list.classList.toggle("active");
    span.classList.toggle("active");
}
links.forEach((link)=>{
    link.addEventListener("click",function(){
        for (let i = 0; i < blink.length; i++) {
          blink[i].classList.remove("active");
        }
        link.classList.toggle("active");
    })
});





// =======================scroll up ========================
  let mack = document.getElementById("scrollToTop");
  let second = document.querySelector(".navbar-expand-lg");

  window.onscroll = function () {
  if (window.scrollY >= 100) {
    mack.classList.add("show");
    second.classList.add("color");
  } else {
    mack.classList.remove("show");
    second.classList.remove("color");
  }
  // active scroll==============
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 600,
      height = sec.offsetHeight -40,
      id = sec.getAttribute("id");

    if (top >= offset && top < offset + 740) { // height 
      console.log("aaaaaaaaaaaa");
      links.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.navbar-light .navbar-nav .nav-link[href*="${id}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    } else {
      console.log("bbbbbbbb");
      const activeLink = document.querySelector(
        `.navbar-light .navbar-nav .nav-link[href*="${id}"]`
      );

      if (activeLink) {
        activeLink.classList.remove("active");
      }
    }
  });
}
mack.onclick = function () {
  window.scrollTo({
    rop: 0,
    behavior: "smooth",
  });
};
// ===========================products=================
const products = document.querySelectorAll(".product-box-layout4 "),
  pproducts = [...products],
  momo = document.getElementById("momos"),
  cheines=document.getElementById("chinese"),
  blog=document.getElementById("beverages");



products.forEach((link) => {
  link.addEventListener("click", function () {
    momo.style.display = "none";
    cheines.style.display = "none";
    blog.style.display = "none";
    for (let i = 0; i < pproducts.length; i++) {
      pproducts[i].classList.remove("productClicked");
    }
    link.classList.add("productClicked");
    if(link.classList.contains("momos")){
      momo.style.display="block"
    }
    else if (link.classList.contains("chinese")) {
      cheines.style.display = "block";
    } else {
      blog.style.display = "block";
    }
  });
});




const mene = document.querySelectorAll(".menuBtn"),
  quantity = document.querySelectorAll(".quantity"),
  qquantity=[...quantity];

let  count=0;
mene.forEach((link) => {
  link.addEventListener("click", function () {
    if(link.classList.contains("minus")){
      const value = +link.nextElementSibling.textContent;
      if (value > 0 && value<=50) {
        const newval = value - 1;
        link.nextElementSibling.textContent = newval.toString();
      }
    }
    else if (link.classList.contains("plus")) {
      const value = +link.previousElementSibling.textContent;
      if (value >= 0 && value<50) {
        const newval = value + 1;
        link.previousElementSibling.textContent = newval.toString();
      }
    }
    for(let i=0;i<qquantity.length;i++){
       count +=+qquantity[i].textContent;
    }
    let moka = document.querySelectorAll(".shoppingCartAfter");
    for (let i = 0; i < moka.length; i++) {
      let concan = +moka[i].textContent;
      concan = count;
      moka[i].innerHTML = concan.toString();
    }
    count=0;
  });
});

