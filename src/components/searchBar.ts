import { getIPdata } from "../services/getIPdata";
import { LoadingState, store } from "../state/ipdataStore";
import arrowIcon from "../../images/icon-arrow.svg";
import loadingIcon from "../../images/spinning-dots.svg";

class searchBarComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <input type="text" name="search-bar" class="bg-white p-[1rem] relative w-[450px] rounded-s-2xl" placeholder="Search for any IP address or domain"/><button class="search-btn py-[1rem] px-[1.4rem] font-bold bg-black text-white rounded-e-2xl cursor-pointer">
    <img src="${arrowIcon}" class="inline" alt=">"/>
    </button>
    `;

    const searchInput = this.querySelector<HTMLInputElement>(
      'input[name="search-bar"]',
    );

    searchInput?.addEventListener("change", (event) => {
      const target = event.currentTarget;

      if (!(target instanceof HTMLInputElement)) return;

      store.setState({ searchedValue: target.value });
    });

    const searchBtn = this.querySelector<HTMLElement>(".search-btn");
    const image = this.querySelector<HTMLElement>("img");

    searchBtn?.addEventListener("click", () => {
      getIPdata(store.getState().searchedValue);
    });

    store.subscribe((newVal) => {
      if (newVal.loadingState === LoadingState.LOADING) {
        if (image) {
          image.setAttribute("src", loadingIcon);
          image.classList.add("w-[1.3rem]");
        }
        if (searchBtn) {
          searchBtn.classList.add("opacity-50");

          searchBtn.classList.add("disabled");
        }
      } else {
        if (image) {
          image.setAttribute("src", arrowIcon);
          image.classList.remove("w-[1.3rem]");
        }
        if (searchBtn) {
          searchBtn.classList.remove("opacity-50");

          searchBtn.classList.remove("disabled");
        }
      }
    });
  }
}

if (!customElements.get("search-bar")) {
  customElements.define("search-bar", searchBarComp);
}
