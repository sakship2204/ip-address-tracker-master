import "./style.css";

import "./searchBar";
import "./resultCard";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="header">
  <div class="text-white text-4xl py-[2rem]">IP Address tracker</div>
  
  <search-bar class="block"></search-bar>

  <result-card></result-card>


  
</div>
<section id="map">
 <iframe class="map-top"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    src="https://www.google.com/maps/embed/v1/directions?key=${import.meta.env.VITE_GOOGLE_API_KEY}
    &origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways" allowfullscreen></iframe>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;
