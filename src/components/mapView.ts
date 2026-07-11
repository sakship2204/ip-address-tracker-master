import { store } from "../state/ipdataStore";

class MapViewComp extends HTMLElement {
  connectedCallback() {
    const srcPrefix = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API_KEY}
    &q=`;

    this.innerHTML = ` <iframe class="map-top"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    src="${srcPrefix}37.4220,-122.0841" allowfullscreen></iframe>`;

    const iframeElement = this.querySelector<HTMLElement>(".map-top");

    store.subscribe((newVal) => {
      iframeElement?.setAttribute(
        "src",
        `${srcPrefix}${newVal.coordinates.lat},${newVal.coordinates.long}`,
      );
    });
  }
}

if (!customElements.get("map-view")) {
  customElements.define("map-view", MapViewComp);
}
