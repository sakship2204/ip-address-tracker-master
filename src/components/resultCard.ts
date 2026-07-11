import { store } from "../state/ipdataStore";

class ResultCardComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="bg-white app-wide-border-radius p-[4rem] mt-[2rem] w-fit mx-auto flex relative text-start" id="result-card">

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">IP Address</span>
                <div class="text-4xl ipAddressValue">192.0.0.0</div>
              </span>

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
               <span class="text-gray-600 text-base ps-[0.2rem]">Location</span>
                <div class="text-4xl locationValue">192.0.0.0</div>
              </span>

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">Time zone</span>
                <div class="text-4xl timeZoneValue">192.0.0.0</div>
              </span>

              <span class=" me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">ISP</span>
                <div class="text-4xl ISPValue">192.0.0.0</div>
              </span>
            </div>
        `;

    const ipAddressEl = document.querySelector(".ipAddressValue");
    const locationEl = document.querySelector(".locationValue");
    const timeZoneEl = document.querySelector(".timeZoneValue");
    const ISPEl = document.querySelector(".ISPValue");

    store.subscribe((newVal) => {
      ipAddressEl.textContent = newVal.ipAddress;
      locationEl.textContent = newVal.location;
      timeZoneEl.textContent = newVal.timeZone;
      ISPEl.textContent = newVal.isp;
    });
  }
}

if (!customElements.get("result-card")) {
  customElements.define("result-card", ResultCardComp);
}
