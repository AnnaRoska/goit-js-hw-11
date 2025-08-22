import{S as d,a as f,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".loader");function m(o){return o.map(({webformatURL:r,largeImageURL:i,tags:l,likes:e,views:t,comments:n,downloads:u})=>`
        <li class="photo-card">
          <a href="${i}">
          <img src="${r}" alt="${l}" />
          </a>
          <div class="info">
            <ul class="ul-info">
            <li>Likes</li>
            <li>${e}</li>
            </ul>
            <ul class="ul-info">
            <li>Views</li>
            <li>${t}</li>
            </ul>
            <ul class="ul-info">
            <li>Comments</li>
            <li>${n}</li>
            </ul>
            <ul class="ul-info">
            <li>Downloads</li>
            <li>${u}</li>
            </ul>
          </div>
        </li>
      `).join("")}function h(){new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}function g(o){const r="https://pixabay.com",i="/api/",l=new URLSearchParams({key:"51904026-11e1c7708336e49fc55c25133",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${i}?${l}`;return p(),f.get(e).then(t=>(t.data.hits.length===0&&a.show({color:"red",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),t.data.hits)).catch(t=>console.error(t)).finally(()=>y())}const s=document.querySelector('[name="search-text"]');document.querySelector(".btn-img");const L=document.querySelector(".form"),S=document.querySelector(".gallery");L.addEventListener("submit",o=>{if(o.preventDefault(),s.value.length===0){a.show({color:"red",position:"center",message:"❌ Fill in the search field"});return}g(s.value).then(r=>{const i=m(r);S.innerHTML=i,h()}),o.target.reset()});
//# sourceMappingURL=index.js.map
