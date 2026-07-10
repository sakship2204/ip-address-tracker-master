class ResultCardComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="bg-white app-wide-border-radius p-[4rem] mt-[2rem] w-fit mx-auto flex relative">
            </div>
        `;
  }
}

if (!customElements.get("result-card")) {
  customElements.define("result-card", ResultCardComp);
}
