let open = document.querySelector(".bi-pen-fill")
let menu = document.querySelector(".menu")
let close = document.querySelector(".closing")

open.addEventListener("click",()=>{
    menu.style.right="0"
})
close.addEventListener("click",()=>{
    menu.style.right="-350px"
})


let menulink = document.querySelectorAll(".menu ul li a")
menulink.forEach(link =>{
    link.addEventListener("click",function(e){
    //    e.preventDefault();
        menulink.forEach(i => i.classList.remove("active"));
        link.classList.add("active")
    })
})


function closeinstantdiv(){
    document.querySelector(".instdiv").style.display="none"
}
function declineTerms() {
    // If there is a previous page in history
    if (document.referrer !== "") {
      history.back();
    } else {
      // Fallback: redirect to homepage or any specific page
      window.location.href = "index.html"; // change this to your desired page
    }
  }