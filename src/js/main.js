import { getParkData, getInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

// const parkData = getParkData();

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".hero-banner > img").src = data.images[0].url;
}




function setIntroInfo(data) {
  const name = document.querySelector(".intro .name");
  const desc = document.querySelector(".intro .desc");
  if (!name || !desc) return; 
  name.textContent = data.fullName;
  desc.textContent=data.description;

}





function setInfoInfo(data){
  const mediaCard = document.querySelector(".info");
   if (!mediaCard) return; 
  for (let i = 0; i < data.length; i++){
      mediaCard.innerHTML += mediaCardTemplate(data[i]);
  }
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
  document.querySelector(".global-nav").classList.toggle("show");
  if (target.tagName != "BUTTON") {
    target = target.closest("button");
  } if (document.querySelector(".global-nav").classList.contains("show")) {
    //placeholder
  } else {
    target.setAttribute("aria-expanded", false);
  }

  console.log("toggle");
  });
}

async function init(){
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderInfo(parkData);
  setHeaderFooter(parkData);
  setIntroInfo(parkData);
  setInfoInfo(links);
  enableNavigation();
}

init();