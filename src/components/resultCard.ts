import { store } from "../state/ipdataStore";

class ResultCardComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="bg-white app-wide-border-radius p-[4rem] mt-[2rem] w-fit mx-auto flex relative text-start" id="result-card">

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">IP Address</span>
                <div class="text-4xl ipAddressValue">----</div>
              </span>

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
               <span class="text-gray-600 text-base ps-[0.2rem]">Location</span>
                <div class="text-4xl locationValue">----</div>
              </span>

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">Time zone</span>
                <div class="text-4xl timeZoneValue">----</div>
              </span>

              <span class=" me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">ISP</span>
                <div class="text-4xl ISPValue">----</div>
              </span>
            </div>
        `;

    const ipAddressEl = this.querySelector(".ipAddressValue");
    const locationEl = this.querySelector(".locationValue");
    const timeZoneEl = this.querySelector(".timeZoneValue");
    const ISPEl = this.querySelector(".ISPValue");

    store.subscribe((newVal) => {
      if (ipAddressEl) ipAddressEl.textContent = newVal.ipAddress || "----";
      if (locationEl) locationEl.textContent = newVal.location || "----";
      if (timeZoneEl) timeZoneEl.textContent = newVal.timeZone || "----";
      if (ISPEl) ISPEl.textContent = newVal.isp || "----";
    });
  }
}

if (!customElements.get("result-card")) {
  customElements.define("result-card", ResultCardComp);
}
