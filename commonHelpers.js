import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery")},u=()=>{const s=new URLSearchParams({key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0,q:n.searchInput.value});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(t.ok)return t.json();throw new Error("Request is not ok")})},d=({hits:s})=>s.reduce((t,o)=>t+`
    <li class='gallery-item'>
        <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" width='640' height='640'/>
        </a>
        <div class='info-wrap'>
          <div>
            <h3 class='card-title'>Likes</h3>
            <p class='info-amount'>${o.likes}</p>
          </div>
          <div>
            <h3 class='card-title'>Views</h3>
            <p class='info-amount'>${o.views}</p>
          </div>
          <div>
            <h3 class='card-title'>Comments</h3>
            <p class='info-amount'>${o.comments}</p>
          </div>
          <div>
            <h3 class='card-title'>Downloads</h3>
            <p class='info-amount'>${o.downloads}</p>
          </div>
        </div>
      </li>`,""),h=()=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},f=new c(".gallery a",{className:"simple-lightbox"}),m=s=>{s.preventDefault(),n.gallery.innerHTML="<div class='loader'>Please wait...</div>",u().then(t=>{if(t.hits.length<1){h(),n.gallery.innerHTML="";return}n.gallery.innerHTML=d(t),f.refresh(),n.searchForm.reset()}).catch(t=>console.log(t))};n.searchForm.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
