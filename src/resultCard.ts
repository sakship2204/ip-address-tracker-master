class ResultCardComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="bg-white app-wide-border-radius p-[4rem] mt-[2rem] w-fit mx-auto flex relative text-start">

            <span class=" border-e border-gray-200 me-[0.5rem] pe-[3rem]">
            <span class="text-gray-600 text-base ps-[0.5rem]">IP Address</span>
            <div class="text-4xl ">192.0.0.0</div>
            </span>

             <span class=" border-e border-gray-200 me-[0.5rem] pe-[3rem]">
             <span class="text-gray-600 text-base ps-[0.5rem]">Location</span>
            <div class="text-4xl ">192.0.0.0</div>
            </span>

            <span class=" border-e border-gray-200 me-[0.5rem] pe-[3rem]">
            <span class="text-gray-600 text-base ps-[0.5rem]">Time zone</span>
            <div class="text-4xl ">192.0.0.0</div>
            </span>

            <span class=" me-[0.5rem] pe-[3rem]">
            <span class="text-gray-600 text-base ps-[0.5rem]">ISP</span>
            <div class="text-4xl ">192.0.0.0</div>
            </span>
            </div>
        `;
  }
}

if (!customElements.get("result-card")) {
  customElements.define("result-card", ResultCardComp);
}
