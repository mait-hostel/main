const reviews=[
    {
        id: 1,
        name:"kishan",
        batch:"2021-25",
        img:
        "/asset/Kishan.jpeg",
        text:
        "You wont regret hostel life"
    },
    {
        id: 2,
      name: "Kapil",
      batch: "2021-25",
      img:
        "/asset/Kapil.jpeg",
      text:
        "MAIT provides hostels for boys inside the campus. In the hostel, there are 4 blocks for MAIT and MAIMS students and a common mess inside. Rooms are well spacious. For the food quality, you can count on me. It is better than average. You will not regret this. Night out is allowed till 10pm. It has a playground that is not so big or too small. It is enough if you are not a hardcore player, So in the end, I will give a 7 out of 10 and that's all"
    },
    {
        id: 3,
      name: "Ansh",
      batch: "2021-25",
      img:
        "/asset/ansh.jpeg",
      text:
        "Mein ni dunga review 😠"
    },
    
]
const img=document.getElementById("PersonImg");
const author=document.getElementById("Author");
const batch=document.getElementById("Batch");
const info=document.getElementById("Info");
const prevBtn=document.querySelector(".PrevBtn");
const nextBtn=document.querySelector(".NextBtn");
let currentItem=0;
//Initial review ko dikhane ke liye
window.addEventListener("DOMContentLoaded", ()=>{
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    batch.textContent=item.batch;
    info.textContent = item.text;
});
//FUction to show the preson
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    batch.textContent = item.job;
    info.textContent = item.text;
  }
//Next button ke liye
nextBtn.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem)
});
//prev preson
prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
//To have automatic slide show have the function and call it in ever fuction.
// showreviews();

// function showreviews() {
//   let i;
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < reviews.length; i++) {
//     reviews[i].style.display = "none";  
//   }
//   currentItem++;
//   if (currentItem > reviews.length) {currentItem = 0}    
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   reviews[currentItem-1].style.display = "block";  
//   dots[currentItem-1].className += " active";
//   setTimeout(showreviews, 2000); // Change image every 2 seconds
// }