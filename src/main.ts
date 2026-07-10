import "./style.css";

import "./searchBar";
import "./resultCard";
import { getIPdata } from "./getIPdata";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="app flex flex-col h-screen">
<div id="header">
  <div class="text-white text-4xl py-[2rem]">IP Address tracker</div>
  
  <search-bar ></search-bar>

  <result-card></result-card>


  
</div>
<section id="map" class="grow">
 <iframe class="map-top"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    src="https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API_KEY}
    &q=37.4220,-122.0841" allowfullscreen></iframe>
</section>
</div>


`;

console.log(getIPdata("8.8.8.8"));
