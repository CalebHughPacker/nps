import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import {
  vcTitleTemplate,
  vcInfoTemplate,
  vcAddressesListTemplate,
  vcDirectionsTemplate,
  listTemplate,
  vcAmenityTemplate,
  vcContactsTemplate,
  vcImageTemplate,
  vcDetailsTemplate
} from "./templates.mjs";

function getParam(param) {
  const params = new URLSearchParams(location.search);
  return params.get(param);
}

async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);

  const id = getParam("id");
  const center = await getParkVisitorCenterDetails(id);

  document.querySelector(".vc-name").innerHTML = vcTitleTemplate(center.name);
  document.querySelector(".vc-info").innerHTML = vcInfoTemplate(center);

  const detailsParent = document.querySelector(".vc-details-list");
  detailsParent.innerHTML = [
    vcDetailsTemplate(
      "vcAddresses",
      "Addresses",
      "heading-icon_map-pin",
      vcAddressesListTemplate(center.addresses)
    ),
    vcDetailsTemplate(
      "vcDirections",
      "Directions",
      "directions",
      vcDirectionsTemplate(center.directionsInfo)
    ),
    vcDetailsTemplate(
      "vcAmenities",
      "Amenities",
      "heading-icon_info",
      listTemplate(center.amenities, vcAmenityTemplate)
    ),
    vcDetailsTemplate(
      "vcContact",
      "Contact Information",
      "phone",
      vcContactsTemplate(center.contacts)
    )
  ].join("");

  const galleryHTML = listTemplate(center.images, vcImageTemplate);
  document
    .querySelector(".vc-gallery")
    .insertAdjacentHTML("beforeend", galleryHTML);
}

init();
