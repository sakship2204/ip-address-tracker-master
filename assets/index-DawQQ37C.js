(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{currentState;listeners=new Set;constructor(e){this.currentState={...e}}getState(){return this.currentState}setState(e){let t=typeof e==`function`?e(this.getState()):e;Object.keys(t).some(e=>!Object.is(this.currentState[e],t[e]))&&(this.currentState={...this.currentState,...t},this.listeners.forEach(e=>e(this.getState())))}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}},t={LOADING:0,LOADED:1,NOT_LOADED:2,ERROR:3},n=new e({ipAddress:``,coordinates:{lat:``,long:``},timeZone:``,isp:``,location:``,loadingState:t.NOT_LOADED}),r=async e=>{try{if(!e)return;n.setState({loadingState:t.LOADING});let r=await(await fetch(e?`https://geo.ipify.org/api/v2/country,city?apiKey=at_4D4HaQTCDQDA1KtWmLuPkG26VvkMo&ipAddress=${e}`:`http://ip-api.com`)).json();n.setState({isp:r.isp,ipAddress:r.ip,coordinates:{lat:r.location.lat,long:r.location.lng},timeZone:r.location.timezone.startsWith(`UTC`)?r.location.timezone:`UTC `+r.location.timezone,location:r.location.city+` , `+r.location.country}),n.setState({loadingState:t.LOADED})}catch(r){throw console.error(r),n.setState({loadingState:t.ERROR}),alert(`Couldn't fetch the details for IP:`+e+`
 Error:`+r.message),Error(r.message)}},i=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='14'%3e%3cpath%20fill='none'%20stroke='%23FFF'%20stroke-width='3'%20d='M2%201l6%206-6%206'/%3e%3c/svg%3e`,a=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3clinearGradient%20id='a17'%3e%3cstop%20offset='0'%20stop-color='%23FBFFF4'%20stop-opacity='0'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='%23FBFFF4'%3e%3c/stop%3e%3c/linearGradient%3e%3ccircle%20fill='none'%20stroke='url(%23a17)'%20stroke-width='15'%20stroke-linecap='round'%20stroke-dasharray='0%2044%200%2044%200%2044%200%2044%200%20360'%20cx='100'%20cy='100'%20r='70'%20transform-origin='center'%3e%3canimateTransform%20type='rotate'%20attributeName='transform'%20calcMode='discrete'%20dur='2'%20values='360;324;288;252;216;180;144;108;72;36'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3c/circle%3e%3c/svg%3e`,o=class extends HTMLElement{connectedCallback(){this.innerHTML=`
    <input type="text" name="search-bar" class="bg-white p-[1rem] relative w-[450px] rounded-s-2xl" placeholder="Search for any IP address or domain"/><button class="search-btn py-[1rem] px-[1.4rem] font-bold bg-black text-white rounded-e-2xl cursor-pointer">
    <img src="${i}" class="inline" alt=">"/>
    </button>
    `,this.querySelector(`input[name="search-bar"]`)?.addEventListener(`change`,e=>{let t=e.currentTarget;t instanceof HTMLInputElement&&n.setState({ipAddress:t.value})});let e=this.querySelector(`.search-btn`),o=this.querySelector(`img`);e?.addEventListener(`click`,()=>{r(n.getState().ipAddress)}),n.subscribe(n=>{n.loadingState===t.LOADING?(o&&(o.setAttribute(`src`,a),o.classList.add(`w-[1.3rem]`)),e&&(e.classList.add(`opacity-50`),e.classList.add(`disabled`))):(o&&(o.setAttribute(`src`,i),o.classList.remove(`w-[1.3rem]`)),e&&(e.classList.remove(`opacity-50`),e.classList.remove(`disabled`)))})}};customElements.get(`search-bar`)||customElements.define(`search-bar`,o);var s=class extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `;let e=this.querySelector(`.ipAddressValue`),t=this.querySelector(`.locationValue`),r=this.querySelector(`.timeZoneValue`),i=this.querySelector(`.ISPValue`);n.subscribe(n=>{e&&(e.textContent=n.ipAddress||`----`),t&&(t.textContent=n.location||`----`),r&&(r.textContent=n.timeZone||`----`),i&&(i.textContent=n.isp||`----`)})}};customElements.get(`result-card`)||customElements.define(`result-card`,s);var c=class extends HTMLElement{connectedCallback(){let e=`https://www.google.com/maps/embed/v1/place?key=AIzaSyDq6z52ILrMtGI-4SPjiFEo4r2vhIEDhSA
    &q=`;this.innerHTML=` <iframe class="map-top"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    src="${e}37.4220,-122.0841" allowfullscreen></iframe>`;let t=this.querySelector(`.map-top`);n.subscribe(n=>{t?.setAttribute(`src`,`${e}${n.coordinates.lat},${n.coordinates.long}`)})}};customElements.get(`map-view`)||customElements.define(`map-view`,c),document.querySelector(`#app`).innerHTML=`
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