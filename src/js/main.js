import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();

const parkInfoLinks = getParkInfoLinks();

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".hero-banner > img").src = data.images[0].url;
}

setHeaderInfo(parkData);
setHeaderFooter(parkData);


function setIntroInfo(data) {
  const name = document.querySelector(".intro .name");
  const desc = document.querySelector(".intro .desc");
  name.textContent = data.fullName;
  desc.textContent=data.description;

}

setIntroInfo(parkData);



function setInfoInfo(data){
  const mediaCard = document.querySelector(".info");
  for (let i = 0; i < data.length; i++){
      mediaCard.innerHTML += mediaCardTemplate(data[i]);
  }
}

setInfoInfo(parkInfoLinks);
