import { getParkData, getVisitorCenterData, getParkAlerts } from "./parkService.mjs";
import { visitorCenterTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";


function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

async function setVisitorCenters(parkCode) {
  console.log("setVisitorCenters called for:", parkCode);
  const centers = await getVisitorCenterData(parkCode);
  console.log("visitor centers fetched:", centers);

  const container = document.querySelector("#visitor-centers-list");
  if (!container) {
    console.warn("No visitor-centers-list element found");
    return;
  }

  if (!centers || centers.length === 0) {
    container.innerHTML = "<p>No visitor centers found for this park.</p>";
    return;
  }

  container.innerHTML = centers.map(visitorCenterTemplate).join("");
}


async function init() {
    document.addEventListener("DOMContentLoaded", async () => {
        const parkData = await getParkData();
        const alerts = await getParkAlerts(parkData.parkCode);

        setHeaderFooter(parkData);
        setAlerts(alerts);
        await setVisitorCenters(parkData.parkCode);
    });
}

init();
