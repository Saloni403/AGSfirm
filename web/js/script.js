let open = document.querySelector(".bi-pen-fill")
let menu = document.querySelector(".menu")
let close = document.querySelector(".closing")

open.addEventListener("click",()=>{
    menu.style.right="0"
})
close.addEventListener("click",()=>{
    menu.style.right="-350px"
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



  // login



  function showSignin(){
    document.querySelector("#signin").style.display="block"
     document.querySelector("#login").style.display="none"
     document.querySelector("body").style.overflow="hidden"
  }
  function showLogin(){
    document.querySelector("#login").style.display="block"
     document.querySelector("#signin").style.display="none"
     document.querySelector("body").style.overflow="hidden"
  }

  document.querySelector(".closelogin").addEventListener("click",()=>{
     document.querySelector("#login").style.display="none"
document.querySelector("body").style.overflow="unset"
  })
  document.querySelector(".closesignin").addEventListener("click",()=>{
     document.querySelector("#signin").style.display="none"
document.querySelector("body").style.overflow="unset"
  })