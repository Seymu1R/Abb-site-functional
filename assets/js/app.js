let changeLanguage = document.querySelector('#dil-deyis');
let hamburgerClick = document.querySelector("#hamburger");
let search = document.querySelector("#search");
let closeClick=document.querySelector('#close');
let changeLanguagep=document.querySelector('#p-dil-deyis');
let searchp=document.querySelector('#p-search')
changeLanguage.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector('.dil-secimleri').classList.toggle("d-block")
});

search.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(".search").classList.toggle('d-block')
});
hamburgerClick.addEventListener('click',()=>{  
  document.getElementById('overlay').classList.add("active");
  document.getElementById('hamburger').classList.add("d-none");
  document.getElementById('close').classList.remove('d-none');

});
closeClick.addEventListener('click',()=>{
    document.getElementById('overlay').classList.remove("active");
    document.getElementById('close').classList.add("d-none");
    document.getElementById('hamburger').classList.remove("d-none");

});
changeLanguagep.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.dil-secimleri').classList.toggle("d-block");
})  

searchp.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(".search").classList.toggle('d-block')
})