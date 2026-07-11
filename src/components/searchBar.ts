import { getIPdata } from "../services/getIPdata";
import { LoadingState, store } from "../state/ipdataStore";

class searchBarComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <input type="text" name="search-bar" class="bg-white p-[1rem] relative w-[450px] rounded-s-2xl" placeholder="Search for any IP address or domain"/><button class="search-btn py-[1rem] px-[1.4rem] font-bold bg-black text-white rounded-e-2xl cursor-pointer">
    <img src="../images/icon-arrow.svg" class="inline" alt=">"/>
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
    const image = this.querySelector<HTMLElement>("img");

    searchBtn?.addEventListener("click", () => {
      getIPdata(store.getState().ipAddress);
    });

    store.subscribe((newVal) => {
      if (newVal.loadingState === LoadingState.LOADING) {
        image.setAttribute("src", "../images/spinning-dots.svg");
        searchBtn.classList.add("opacity-50");
        image.classList.add("w-[1.3rem]");
        searchBtn.classList.add("disabled");
      } else {
        image.setAttribute("src", "../images/icon-arrow.svg");
        searchBtn.classList.remove("opacity-50");
        image.classList.remove("w-[1.3rem]");
        searchBtn.classList.remove("disabled");
      }
    });
  }
}

if (!customElements.get("search-bar")) {
  customElements.define("search-bar", searchBarComp);
}
