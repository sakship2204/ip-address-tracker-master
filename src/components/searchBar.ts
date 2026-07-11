import { getIPdata } from "../services/getIPdata";
import { store } from "../state/ipdataStore";

class searchBarComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <input type="text" name="search-bar" class="bg-white p-[1rem] relative w-[450px] rounded-s-2xl" placeholder="Search for any IP address or domain"/><button class="search-btn py-[1rem] px-[1.4rem] font-bold bg-black text-white rounded-e-2xl cursor-pointer">
    <img src="../images/icon-arrow.svg" class="inline " alt=">"/>
    </button>
    `;

    const searchInput = this.querySelector<HTMLInputElement>(
      'input[name="search-bar"]',
    );

    searchInput?.addEventListener("change", (event) => {
      const target = event.currentTarget;

      if (!(target instanceof HTMLInputElement)) return;

      store.setState({ ipAddress: target.value });
    });

    const searchBtn = this.querySelector<HTMLElement>(".search-btn");

    searchBtn?.addEventListener("click", () => {
      getIPdata(store.getState().ipAddress);
    });
  }
}

if (!customElements.get("search-bar")) {
  customElements.define("search-bar", searchBarComp);
}
