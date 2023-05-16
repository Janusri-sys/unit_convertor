// const sidebar = document.querySelector(".sidebar");
// const sidebarClose = document.querySelector("#sidebar-close");
// const menu = document.querySelector(".menu-content");
// const menuItems = document.querySelectorAll(".submenu-item");
// const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

// sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

// menuItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     menu.classList.add("submenu-active");
//     item.classList.add("show-submenu");
//     menuItems.forEach((item2, index2) => {
//       if (index !== index2) {
//         item2.classList.remove("show-submenu");
//       }
//     });
//   });
// });

// subMenuTitles.forEach((title) => {
//   title.addEventListener("click", () => {
//     menu.classList.remove("submenu-active");
//   });
// });
var feet=document.getElementById("feet")
var inch=document.getElementById("inch")
feet.addEventListener("input",function(){
    let f=this.value;
    let i=f*12;
    if(!Number.isInteger(i)){
        i=i.toFixed(2)
    }
    inch.value=i;
});
inch.addEventListener("input",function(){
    let i=this.value;
    let f=i/12;

    if(!Number.isInteger(f)){
        f=f.toFixed(2)
    }
    feet.value=f;
});
function funcDisplay(){
const logoDiv=document.getElementById("logo");
const h1Div=document.getElementById("heading");
//logoDiv.style.display="none";
h1Div.style.visibility="visible";

}
