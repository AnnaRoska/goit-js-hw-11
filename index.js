import{a as y,i as l,S as p}from"./assets/vendor-BK_rxH-O.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function h(o){const i="https://pixabay.com",t="/api/",s=new URLSearchParams({key:"51904026-11e1c7708336e49fc55c25133",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${i}${t}?${s}`;try{return(await y.get(e)).data.hits}catch(r){return l.error({position:"center",message:r.message}),[]}}const u=document.querySelector(".loader"),f=document.querySelector(".gallery");let a=null;function g(o){if(!o||o.length===0)return;const i=o.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:n,comments:d,downloads:m})=>`
        <li class="photo-card">
          <a href="${s}">
          <img src="${t}" alt="${e}" />
          </a>
          <div class="info">
            <ul class="ul-info">
            <li>Likes</li>
            <li>${r}</li>
            </ul>
            <ul class="ul-info">
            <li>Views</li>
            <li>${n}</li>
            </ul>
            <ul class="ul-info">
            <li>Comments</li>
            <li>${d}</li>
            </ul>
            <ul class="ul-info">
            <li>Downloads</li>
            <li>${m}</li>
            </ul>
          </div>
        </li>
         `).join("");f.insertAdjacentHTML("beforeend",i),a?a.refresh():a=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){f.innerHTML=""}function S(){u.classList.remove("hidden")}function $(){u.classList.add("hidden")}const w=document.querySelector('[name="search-text"]'),c=document.querySelector(".form");c.addEventListener("submit",async o=>{o.preventDefault();const i=w.value.trim();if(i.length===0){l.error({position:"center",message:"❌ Fill in the search field"});return}L(),S();try{const t=await h(i);if(g(t),!t||t.length===0){l.warning({position:"center",message:"Sorry, there are no images matching your search query. Please try again!"});return}}catch(t){l.error({position:"center",message:t.message})}finally{$(),c.reset()}});
//# sourceMappingURL=index.js.map
