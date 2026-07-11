import "./style.css";

import "./components/searchBar";
import "./components/resultCard";

import "./components/mapView";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="app flex flex-col h-screen">
<div id="header">
  <div class="text-white text-4xl py-[2rem]">IP Address tracker</div>
  
  <search-bar ></search-bar>

  <result-card></result-card>


  
</div>
<section id="map" class="grow">
<map-view/>
</section>
</div>


`;
