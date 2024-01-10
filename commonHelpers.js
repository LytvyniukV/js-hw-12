import{S as u,a as d,i as m}from"./assets/vendor-ed396e71.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const f=new u(".gallery a",{className:"simple-lightbox"}),n={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery"),paginationBtn:document.getElementById("pagination-btn")},h=async s=>(await d.get("https://pixabay.com/api",{params:{key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0,q:s,per_page:b,page:l}})).data,p=()=>{m.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})};function g(s){if(s.hits.length<1){p(),n.gallery.innerHTML="";return}s.totalHits>imagesPerPage&&n.paginationBtn.classList.remove("hidden")}const y=async({hits:s})=>{const o=s.reduce((a,e)=>a+`
        <li class='gallery-item'>
            <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" width='640' height='640'/>
            </a>
            <div class='info-wrap'>
              <div>
                <h3 class='card-title'>Likes</h3>
                <p class='info-amount'>${e.likes}</p>
              </div>
              <div>
                <h3 class='card-title'>Views</h3>
                <p class='info-amount'>${e.views}</p>
              </div>
              <div>
                <h3 class='card-title'>Comments</h3>
                <p class='info-amount'>${e.comments}</p>
              </div>
              <div>
                <h3 class='card-title'>Downloads</h3>
                <p class='info-amount'>${e.downloads}</p>
              </div>
            </div>
          </li>`,"");n.gallery.innerHTML=o},b=40;let l=1,c;const v=async s=>{s.preventDefault(),n.paginationBtn.classList.add("hidden");const a=s.currentTarget.elements.query.value;if(a.trim()!==""){c=a;try{const e=await h(c);g(e),y(e),f.refresh(),n.searchForm.reset()}catch(e){console.log(new Error(e))}l=2}};n.searchForm.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
