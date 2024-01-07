import{a as l,i as c,S as d}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".btn-load-more")},u=async()=>(await l.get("https://pixabay.com/api",{params:{key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0,q:a.searchInput.value,per_page:40}})).data,m=({hits:o})=>o.reduce((s,r)=>s+`
    <li class='gallery-item'>
        <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" width='640' height='640'/>
        </a>
        <div class='info-wrap'>
          <div>
            <h3 class='card-title'>Likes</h3>
            <p class='info-amount'>${r.likes}</p>
          </div>
          <div>
            <h3 class='card-title'>Views</h3>
            <p class='info-amount'>${r.views}</p>
          </div>
          <div>
            <h3 class='card-title'>Comments</h3>
            <p class='info-amount'>${r.comments}</p>
          </div>
          <div>
            <h3 class='card-title'>Downloads</h3>
            <p class='info-amount'>${r.downloads}</p>
          </div>
        </div>
      </li>`,""),f=()=>"<button class='btn-load-more'>Load more</button>",h=()=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},p=async()=>{const o=await u();try{if(o.hits.length<1){h(),a.gallery.innerHTML="";return}a.gallery.innerHTML=m(o),a.gallery.insertAdjacentHTML("afterend",f())}catch(s){console.log(new Error(s))}},g=new d(".gallery a",{className:"simple-lightbox"}),y=async o=>{o.preventDefault(),a.gallery.innerHTML="<div class='loader'>Please wait...</div>",p(),g.refresh(),a.searchForm.reset()};a.searchForm.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
