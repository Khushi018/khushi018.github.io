// menuBar.classList.remove("none")
document.querySelector(".home").addEventListener("click",()=>{
   document.querySelector("#home").scrollIntoView();
 
})

document.querySelector(".about").addEventListener("click",()=>{
  document.querySelector("#about").scrollIntoView();
 
})

document.querySelector(".skills").addEventListener("click",()=>{
  document.querySelector("#skills").scrollIntoView();
 
})

document.querySelector(".projects").addEventListener("click",()=>{
  document.querySelector("#projects").scrollIntoView();
 
})

document.querySelector(".res-projects-class").addEventListener("click",()=>{
  document.querySelector("#res-projects").scrollIntoView();
  console.log("clicked")
 
})

document.querySelector("#prtf").addEventListener("click" , ()=>{
  window.open("https://github.com/khushi018","_blank") ;
})

document.querySelector("#lkdn").addEventListener("click" , ()=>{
  window.open("https://www.linkedin.com/in/khushi018/","_blank");
})



document.querySelector(".contact").addEventListener("click",()=>{
  document.querySelector("#contact").scrollIntoView();
 
})

document.querySelector("#resume-button-1").addEventListener("click",()=>{
//   window.location.href="https://drive.google.com/u/0/uc?id=1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_&export=download";

  window.open("https://drive.google.com/file/d/17Fk2CVW9-0xroEx3CnSDSI1h_uvX3caL/view?usp=share_link","_blank") ;
})

document.querySelector("#resume-button-2").addEventListener("click",()=>{
//   window.location.href="https://drive.google.com/file/d/17Fk2CVW9-0xroEx3CnSDSI1h_uvX3caL/view?usp=share_link";
 window.open("https://drive.google.com/file/d/17Fk2CVW9-0xroEx3CnSDSI1h_uvX3caL/view?usp=share_link","_blank") ;  //open new tab
})

//------------------------------projects -------------------
// =------------myglamm |
document.querySelector(".myglammGit").addEventListener("click",()=>{
   window.open("https://github.com/Manoj890880/angry-crow-9702","_blank") ;
 })
 
document.querySelector(".myglammDep").addEventListener("click",()=>{
 window.open("https://hermoso.netlify.app/","_blank") ;
})

//------------ orbitz |
document.querySelector(".orbitzGit").addEventListener("click",()=>{
  window.open("https://github.com/Khushi018/Orbitz-clone","_blank") ;
})

document.querySelector(".orbitzDep").addEventListener("click",()=>{
  window.open("https://warm-seahorse-9ae490.netlify.app/","_blank") ;
})

// ------------------ online banking 

document.querySelector(".bankGit").addEventListener("click",()=>{
  window.open("https://github.com/Khushi018/permissible-pot-8510","_blank") ;
})


document.querySelector(".bankDep").addEventListener("click",()=>{
  window.open("","_blank") ;
})


// ------------------ Sweetopia

document.querySelector(".sweetGit").addEventListener("click",()=>{
   window.open("https://github.com/mdzahidhaider/dusty-jewel-3645","_blank") ;
 })
 
 
 document.querySelector(".sweetDep").addEventListener("click",()=>{
   window.open("","_blank") ;
 })






// ----------------------CONTACT SECTION ------------------------------
document.querySelector(".linkedIn").addEventListener("click",()=>{
  window.open("https://www.linkedin.com/in/khushi018/","_blank") ;
})

document.querySelector(".portfolio").addEventListener("click",()=>{
  console.log("clicked")
  window.open("https://github.com/khushi018","_blank") ;
})





const mediaQuery = window.matchMedia('(min-width: 1001px)');

// Check if the media query matches


let menuButton=document.getElementById("menu");
//  console.log(menuButton)
let menuBar=document.querySelector("#nav-menu>div:nth-child(2)");

mediaQuery.addEventListener('change',(event) => {
  if (event.matches) {
      // menuBar.style="display:flex";

    
   }
});
let click_count=0;
menuButton.addEventListener("click",()=>{
  click_count++;



  if (menuButton.classList.contains('fa-xmark')) {
      menuButton.classList.remove("fa-bars");
      menuButton.classList.add("fa-xmark");
      menuBar.style="display:flex";
    } else {
      // menuBar.style="display:none";
      menuButton.classList.add("fa-bars");
      menuButton.classList.remove("fa-xmark");
    }

  // console.log(click_count)
  if(click_count%2==0){
      menuBar.style="display:none";
      menuButton.classList.add("fa-bars");
      menuButton.classList.remove("fa-xmark");
  }else{
      menuButton.classList.remove("fa-bars");
      menuButton.classList.add("fa-xmark");
      menuBar.style="display:flex";
  }
})