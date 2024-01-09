import{S as u,a as m,i as p}from"./assets/vendor-ed396e71.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h=new u(".gallery a",{className:"simple-lightbox"}),r={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery"),paginationBtn:document.getElementById("pagination-btn")},f=async()=>(await m.get("https://pixabay.com/api",{params:{key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0,q:r.searchInput.value,per_page:d,page:n}})).data,g=({hits:s})=>s.reduce((o,a)=>o+`
    <li class='gallery-item'>
        <a href="${a.largeImageURL}">
        <img src="${a.webformatURL}" alt="${a.tags}" width='640' height='640'/>
        </a>
        <div class='info-wrap'>
          <div>
            <h3 class='card-title'>Likes</h3>
            <p class='info-amount'>${a.likes}</p>
          </div>
          <div>
            <h3 class='card-title'>Views</h3>
            <p class='info-amount'>${a.views}</p>
          </div>
          <div>
            <h3 class='card-title'>Comments</h3>
            <p class='info-amount'>${a.comments}</p>
          </div>
          <div>
            <h3 class='card-title'>Downloads</h3>
            <p class='info-amount'>${a.downloads}</p>
          </div>
        </div>
      </li>`,""),y=()=>{p.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})};let c,n=1;const d=40,v=async()=>{const s=await f();try{if(s.hits.length<1){y(),r.gallery.innerHTML="";return}s.totalHits>d&&r.paginationBtn.classList.remove("hidden"),r.gallery.innerHTML=g(s)}catch(o){console.log(new Error(o))}},b=async s=>{s.preventDefault(),r.paginationBtn.classList.add("hidden"),r.gallery.innerHTML="<div class='loader'></div>",v(),c=r.searchInput.value,n++,r.searchInput.value!==c&&(n=1),console.log(n),h.refresh(),r.searchForm.reset()};r.searchForm.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
