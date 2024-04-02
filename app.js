const requestUrl = "https://api.github.com/users/MuhammadJunaid948";

const xhr = new XMLHttpRequest();
xhr.open("GET",requestUrl,true)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const data = JSON.parse(this.responseText)
        const body = document.querySelector("#body");
              body.innerHTML = `
              <h1>Getting Image by using API</h1>
              <div class="card" style="width: 18rem;">
        <img src="${data.avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
   
    }
}
xhr.send();




// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestUrl);
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     const data = JSON.parse(this.responseText);
//     if (data.avatar_url) {
//       var profilePictureUrl = data.avatar_url;
//       console.log("profilePictureUrl", profilePictureUrl);
//       const body = document.querySelector("#body");
//       body.innerHTML = `<div class="card" style="width: 18rem;">
// <img src="${profilePictureUrl}" class="card-img-top" alt="...">
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>`;
//     } else if (xhr.readyState === 4) {
//       console.error("Failed to fetch user data. Status:", xhr.status);
//     } else {
//       console.log("profile picture not found in the responce");
//     }
//   }
// };
// xhr.send();
