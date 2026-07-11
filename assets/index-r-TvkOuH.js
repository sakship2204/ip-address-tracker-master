(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{currentState;listeners=new Set;constructor(e){this.currentState={...e}}getState(){return this.currentState}setState(e){let t=typeof e==`function`?e(this.getState()):e;Object.keys(t).some(e=>!Object.is(this.currentState[e],t[e]))&&(this.currentState={...this.currentState,...t},this.listeners.forEach(e=>e(this.getState())))}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}},t={LOADING:0,LOADED:1,NOT_LOADED:2,ERROR:3},n=new e({ipAddress:``,coordinates:{lat:``,long:``},timeZone:``,isp:``,location:``,loadingState:t.NOT_LOADED}),r=async e=>{try{if(!e)return;n.setState({loadingState:t.LOADING});let r=await(await fetch(e?`https://geo.ipify.org/api/v2/country,city?apiKey=at_4D4HaQTCDQDA1KtWmLuPkG26VvkMo&ipAddress=${e}`:`http://ip-api.com`)).json();n.setState({isp:r.isp,ipAddress:r.ip,coordinates:{lat:r.location.lat,long:r.location.lng},timeZone:r.location.timezone.startsWith(`UTC`)?r.location.timezone:`UTC `+r.location.timezone,location:r.location.city+` , `+r.location.country}),n.setState({loadingState:t.LOADED})}catch(r){throw console.error(r),n.setState({loadingState:t.ERROR}),alert(`Couldn't fetch the details for IP:`+e+`
 Error:`+r.message),Error(r.message)}},i=class extends HTMLElement{connectedCallback(){this.innerHTML=`
    <input type="text" name="search-bar" class="bg-white p-[1rem] relative w-[450px] rounded-s-2xl" placeholder="Search for any IP address or domain"/><button class="search-btn py-[1rem] px-[1.4rem] font-bold bg-black text-white rounded-e-2xl cursor-pointer">
    <img src="../images/icon-arrow.svg" class="inline" alt=">"/>
    </button>
    `,this.querySelector(`input[name="search-bar"]`)?.addEventListener(`change`,e=>{let t=e.currentTarget;t instanceof HTMLInputElement&&n.setState({ipAddress:t.value})});let e=this.querySelector(`.search-btn`),i=this.querySelector(`img`);e?.addEventListener(`click`,()=>{r(n.getState().ipAddress)}),n.subscribe(n=>{n.loadingState===t.LOADING?(i&&(i.setAttribute(`src`,`../images/spinning-dots.svg`),i.classList.add(`w-[1.3rem]`)),e&&(e.classList.add(`opacity-50`),e.classList.add(`disabled`))):(i&&(i.setAttribute(`src`,`../images/icon-arrow.svg`),i.classList.remove(`w-[1.3rem]`)),e&&(e.classList.remove(`opacity-50`),e.classList.remove(`disabled`)))})}};customElements.get(`search-bar`)||customElements.define(`search-bar`,i);var a=class extends HTMLElement{connectedCallback(){this.innerHTML=`
            <div class="bg-white app-wide-border-radius p-[4rem] mt-[2rem] w-fit mx-auto flex relative text-start" id="result-card">

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">IP Address</span>
                <div class="text-4xl ipAddressValue">-----</div>
              </span>

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
               <span class="text-gray-600 text-base ps-[0.2rem]">Location</span>
                <div class="text-4xl locationValue">---</div>
              </span>

              <span class=" border-e border-gray-200 me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">Time zone</span>
                <div class="text-4xl timeZoneValue">----</div>
              </span>

              <span class=" me-[1.4rem] pe-[3rem] max-w-[300px]">
                <span class="text-gray-600 text-base ps-[0.2rem]">ISP</span>
                <div class="text-4xl ISPValue">----</div>
              </span>
            </div>
        `;let e=this.querySelector(`.ipAddressValue`),t=this.querySelector(`.locationValue`),r=this.querySelector(`.timeZoneValue`),i=this.querySelector(`.ISPValue`);n.subscribe(n=>{e&&(e.textContent=n.ipAddress||`----`),t&&(t.textContent=n.location||`----`),r&&(r.textContent=n.timeZone||`----`),i&&(i.textContent=n.isp||`----`)})}};customElements.get(`result-card`)||customElements.define(`result-card`,a);var o=class extends HTMLElement{connectedCallback(){let e=`https://www.google.com/maps/embed/v1/place?key=AIzaSyBxXjazDZoGT5xgTmRLW1EsTq-PERN5Uj4
    &q=`;this.innerHTML=` <iframe class="map-top"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    src="${e}37.4220,-122.0841" allowfullscreen></iframe>`;let t=this.querySelector(`.map-top`);n.subscribe(n=>{t?.setAttribute(`src`,`${e}${n.coordinates.lat},${n.coordinates.long}`)})}};customElements.get(`map-view`)||customElements.define(`map-view`,o),document.querySelector(`#app`).innerHTML=`
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