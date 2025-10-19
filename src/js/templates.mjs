import spritePath from '../images/sprite.symbol.svg';

export function mediaCardTemplate(info){
  return `<section class="card"><a href="${info.link}">
  <img src="${info.image}" alt="">
  </a><a href="${info.link}">
  <h2>${info.name}</h2>
  </a><p>${info.description}</p></section>`
}

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  // note the new path below for the SVG!
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>  
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

export function visitorCenterTemplate(center) {
  return `
    <section class="visitor-center">
      <h3>${center.name}</h3>
      <p>${center.description || "No description available."}</p>
      <p><strong>Directions:</strong> ${center.directionsInfo || "No directions provided."}</p>
    </section>
  `;
}

