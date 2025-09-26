

export function mediaCardTemplate(info){
  return `<section class="card"><a href="${info.link}">
  <img src="${info.image}" alt="">
  </a><a href="${info.link}">
  <h2>${info.name}</h2>
  </a><p>${info.description}</p></section>`
}

