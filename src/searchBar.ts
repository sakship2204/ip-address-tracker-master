class searchBarComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <input type="text" name="search-bar" class="bg-white p-[1rem]  min-w-[450px] rounded-s-2xl" placeholder="Search for any IP address or domain"/><button class="search-btn py-[1rem] px-[1.4rem] font-bold bg-black text-white rounded-e-2xl cursor-pointer">
    <img src="../images/icon-arrow.svg" class="inline" alt=">"/>
    </button>
    `;
  }
}

if (!customElements.get("search-bar")) {
  customElements.define("search-bar", searchBarComp);
}
